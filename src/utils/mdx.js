import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(root, 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export async function getFilesByFrontMatter() {
  return postFilePaths.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
