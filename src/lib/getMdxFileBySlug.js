import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import MdxComponents from '@components/MdxComponents';

const root = process.cwd();

export async function getMdxFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'src/data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'src/data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MdxComponents,
    mdxOptions: {
      // remarkPlugins: {},
      // rehypePlugins: [mdxPrism]
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
