import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const root = process.cwd();

export async function getAllFilesByFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'posts'));

  return files.reduce((allPosts, postSlug) => {
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
