import Image from 'next/image';
import hydrate from 'next-mdx-remote/hydrate';
import { getMdxFileBySlug } from '@lib/getMdxFileBySlug';
import { getFiles } from '@lib/getFiles';
import MdxComponents from '@components/MdxComponents';
import { Page } from '@components/layout';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

const fileDir = 'blog';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components: MdxComponents });

  return (
    <Page>
      <article className="container">
        {/* {console.log(frontMatter)} */}
        <div className="my-8">
          <Link href="/blog" passHref>
            <a className="flex items-center space-x-2 text-gray-600">
              <ArrowLeft size="16" /> <span>Blog</span>
            </a>
          </Link>
        </div>
        <header className="mt-10 mb-10">
          <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            {frontMatter.title}
          </h1>
          <p className="space-x-2 text-sm tracking-wide text-gray-600">
            <span>
              {format(parseISO(frontMatter.date_published), 'MMM dd, yyyy')}
            </span>
            <span className="text-gray-200">&bull;</span>
            <span>{frontMatter.readingTime.text}</span>
          </p>
        </header>
        {frontMatter.thumb && (
          <figure className="flex flex-col my-8 lg:-mx-16">
            <div className="relative aspect-w-16 aspect-h-10">
              <Image
                src={frontMatter.thumb.url}
                alt={frontMatter.thumb.alt}
                priority
                layout="fill"
                className="object-cover rounded"
              />
            </div>
            <figcaption className="p-3 text-center">
              {frontMatter.thumb.caption && (
                <p className="tracking-wide text-gray-700">
                  {frontMatter.thumb.caption}
                </p>
              )}
              {frontMatter.thumb.unsplash && (
                <p className="mt-2 text-sm tracking-wide text-gray-400">
                  Photo by{' '}
                  <a
                    href={`https://unsplash.com/@${frontMatter.thumb.unsplash.profile}`}
                    rel="noopener nofollow"
                    className="underline"
                  >
                    {frontMatter.thumb.unsplash.profile}
                  </a>{' '}
                  on{' '}
                  <a
                    href={`https://unsplash.com/photos/${frontMatter.thumb.unsplash.id}`}
                    rel="noopener nofollow"
                    className="underline"
                  >
                    Unsplash
                  </a>
                </p>
              )}
            </figcaption>
          </figure>
        )}
        <div className="prose">{content}</div>
      </article>
    </Page>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles(fileDir);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getMdxFileBySlug(fileDir, params.slug);

  return { props: post };
}

export default Blog;
