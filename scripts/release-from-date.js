#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';

// Parse command line arguments
const args = process.argv.slice(2);
const sinceDateArg = args.find((arg) => arg.startsWith('--since='));
const untilDateArg = args.find((arg) => arg.startsWith('--until='));
const releaseTypeArg = args.find((arg) => arg.startsWith('--release-as='));
const dryRunArg = args.includes('--dry-run');
const verboseArg = args.includes('--verbose');

// Extract dates and release type
const sinceDate = sinceDateArg ? sinceDateArg.split('=')[1] : null;
const untilDate = untilDateArg ? untilDateArg.split('=')[1] : 'now';
const releaseType = releaseTypeArg ? releaseTypeArg.split('=')[1] : 'patch';

if (!sinceDate) {
  console.error('Please provide a start date using --since=YYYY-MM-DD');
  process.exit(1);
}

// Log function that respects verbose flag
function log(message) {
  if (verboseArg) {
    console.log(message);
  }
}

// Create a temporary git tag to use as reference
const tmpTag = `temp-tag-${Date.now()}`;
const backupFile = path.join(process.cwd(), '.changelog-backup.json');

try {
  console.log(`Generating changelog from ${sinceDate} to ${untilDate}...`);

  // First, backup current package.json version
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  const originalVersion = packageJson.version;

  // Backup changelog if it exists
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  let originalChangelog = null;
  if (existsSync(changelogPath)) {
    originalChangelog = readFileSync(changelogPath, 'utf8');
  }

  // Write backup info
  writeFileSync(
    backupFile,
    JSON.stringify({
      version: originalVersion,
      changelog: originalChangelog,
    })
  );

  // Get commits in date range with their dates for better filtering
  log('Getting commits in date range...');
  const dateFilter = `--after="${sinceDate}" --before="${untilDate}"`;
  const commitsOutput = execSync(
    `git log --pretty=format:"%H %aI" ${dateFilter}`
  )
    .toString()
    .trim();

  if (!commitsOutput) {
    console.error('No commits found in the specified date range');
    process.exit(1);
  }

  const commits = commitsOutput.split('\n').map((line) => {
    const [hash, date] = line.split(' ');
    return { hash, date };
  });

  log(`Found ${commits.length} commits in date range`);

  // Create an empty tag to use as a reference point
  // This is important: we'll generate a changelog only from commits in our date range
  const initialCommit = execSync('git rev-list --max-parents=0 HEAD')
    .toString()
    .trim();
  execSync(`git tag -f ${tmpTag} ${initialCommit}`);
  log(`Created temporary tag ${tmpTag} at initial commit`);

  // Create a filtered commit history
  const tempBranch = `temp-changelog-branch-${Date.now()}`;
  execSync(`git checkout -b ${tempBranch}`);
  log(`Created temporary branch ${tempBranch}`);

  // Filter the changelog content
  log('Creating new changelog with filtered commits...');

  // Create a modified changelog that only includes our date-filtered commits
  let newChangelog = '# Changelog\n\n';
  newChangelog +=
    'All notable changes to this project will be documented in this file.\n\n';

  // Get the new version based on release type
  let newVersion;
  switch (releaseType) {
    case 'major':
      newVersion = incrementMajor(originalVersion);
      break;
    case 'minor':
      newVersion = incrementMinor(originalVersion);
      break;
    default:
      newVersion = incrementPatch(originalVersion);
  }

  // Format the date in YYYY-MM-DD format
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  // Add the new version entry
  newChangelog += `## [${newVersion}] - ${formattedDate}\n\n`;

  // Get conventional commits in our date range
  const types = {
    feat: 'Features',
    fix: 'Bug Fixes',
    docs: 'Documentation',
    style: 'Styling',
    refactor: 'Code Refactoring',
    perf: 'Performance Improvements',
    build: 'Build System',
  };

  // Group commits by type
  const commitsByType = {};

  // Process each commit to get its conventional commit type and message
  for (const commit of commits) {
    const commitMsg = execSync(`git show -s --format=%B ${commit.hash}`)
      .toString()
      .trim();
    log(`Processing commit: ${commitMsg}`);

    // Parse conventional commit format: <type>[(scope)]: <description>
    const match = commitMsg.match(/^(\w+)(?:\(([^)]+)\))?: (.+)/);
    if (match) {
      const [, type, scope, description] = match;
      if (types[type]) {
        commitsByType[type] = commitsByType[type] || [];
        const entry = scope ? `**${scope}:** ${description}` : description;
        commitsByType[type].push({ message: entry, hash: commit.hash });
      }
    }
  }

  // Add commits to changelog by type
  for (const [type, typeLabel] of Object.entries(types)) {
    const typeCommits = commitsByType[type];
    if (typeCommits && typeCommits.length > 0) {
      newChangelog += `### ${typeLabel}\n\n`;
      for (const commit of typeCommits) {
        const shortHash = commit.hash.substring(0, 7);
        newChangelog += `- ${commit.message} ([${shortHash}](https://github.com/martylouis/martylouis.com/commit/${commit.hash}))\n`;
      }
      newChangelog += '\n';
    }
  }

  // Preserve existing changelog entries
  if (originalChangelog) {
    const existingEntries = originalChangelog.split(/##\s+\[\d+\.\d+\.\d+\]/);
    if (existingEntries.length > 1) {
      // Skip the header and include all version entries
      newChangelog += existingEntries
        .slice(1)
        .join('## [')
        .replace(/^/, '## [');
    }
  }

  // Write the new changelog
  writeFileSync(changelogPath, newChangelog);

  // Update package.json version
  packageJson.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

  console.log(`\n✅ Success! Generated changelog for version ${newVersion}`);

  if (dryRunArg) {
    console.log(
      '\n[DRY RUN] Changes were not committed. Here is the new changelog:'
    );
    console.log('\n' + '='.repeat(80) + '\n');
    console.log(newChangelog);
    console.log('\n' + '='.repeat(80));

    // Restore original files
    restoreOriginalFiles();
    console.log('\n[DRY RUN] Original files restored');
  } else {
    // Commit the changes
    execSync('git add CHANGELOG.md package.json');
    execSync(`git commit -m "chore(release): ${newVersion} [from-date]"`);
    execSync(`git tag -a v${newVersion} -m "Version ${newVersion}"`);

    console.log(`\nCommitted version ${newVersion}`);
    console.log('To push the new version and tag:');
    console.log(
      `  git push origin ${execSync('git rev-parse --abbrev-ref HEAD').toString().trim()}`
    );
    console.log(`  git push origin v${newVersion}`);
  }
} catch (error) {
  console.error('\nError generating changelog:', error);
  restoreOriginalFiles();
  process.exit(1);
} finally {
  // Clean up
  cleanUp();
}

function restoreOriginalFiles() {
  if (existsSync(backupFile)) {
    const backup = JSON.parse(readFileSync(backupFile, 'utf8'));

    // Restore package.json version
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    packageJson.version = backup.version;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    // Restore changelog if it existed
    if (backup.changelog) {
      const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
      writeFileSync(changelogPath, backup.changelog);
    }
  }
}

function cleanUp() {
  try {
    // Return to original branch
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();
    if (currentBranch.startsWith('temp-changelog-branch-')) {
      const mainBranch = execSync('git symbolic-ref refs/remotes/origin/HEAD')
        .toString()
        .trim()
        .replace('refs/remotes/origin/', '');
      execSync(`git checkout ${mainBranch}`);
      execSync(`git branch -D ${currentBranch}`);
      log(`Deleted temporary branch ${currentBranch}`);
    }

    // Remove temp tag if it exists
    if (execSync(`git tag -l ${tmpTag}`).toString().trim()) {
      execSync(`git tag -d ${tmpTag}`);
      log(`Deleted temporary tag ${tmpTag}`);
    }

    // Remove backup file
    if (existsSync(backupFile)) {
      execSync(`rm ${backupFile}`);
    }
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}

// Version incrementing functions
function incrementMajor(version) {
  const parts = version.split('.');
  return `${Number(parts[0]) + 1}.0.0`;
}

function incrementMinor(version) {
  const parts = version.split('.');
  return `${parts[0]}.${Number(parts[1]) + 1}.0`;
}

function incrementPatch(version) {
  const parts = version.split('.');
  return `${parts[0]}.${parts[1]}.${Number(parts[2]) + 1}`;
}
