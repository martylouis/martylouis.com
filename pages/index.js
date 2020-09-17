import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import { getAllPosts } from '../lib/getPosts';
import Link from 'next/link';
import PostList from '../components/PostList';
import site from '../data/site';
import { intro, services } from '../data/home';
import { FeatherIcon } from '../components/Icon';

export default function Home({ allPosts }) {
  // const morePosts = allPosts;

  return (
    <PageLayout>
      <Head
        title={`${intro.heading} – ${site.author} (${site.name})`}
        description={site.meta.description}
      />
      <section className="py-16">
        <div className="container max-w-4xl">
          <Intro />
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <Services />
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <BlogPosts posts={allPosts} />
        </div>
      </section>
    </PageLayout>
  );
}

export const Intro = () => {
  const { heading, subheading, button, photo } = intro;

  return (
    <>
      <p className="text-xl text-gray-700">
        Hey! I’m <strong>Marty</strong>{' '}
        <span role="img" aria-label="nerd emoji">
          🤓
        </span>
      </p>
      <div className="flex">
        <div className="mr-16 leading-snug">
          <h1 className="mt-2 text-5xl font-black leading-none">{heading}</h1>
          <p className="text-2xl font-light text-gray-700">{subheading}</p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-48 border-2 border-gray-200 rounded-lg"
            src={photo.link}
            alt={photo.title}
          />
        </div>
      </div>
      <p className="flex space-x-8">
        <Link href={button.link}>
          <a className="button button-green">{button.text}</a>
        </Link>
        {/* <Link href="/">
          <a className="button button-link">
            View Work{' '}
            <FeatherIcon size="5" name="arrowRight" className="ml-1" />
          </a>
        </Link> */}
      </p>
    </>
  );
};

export const Services = () => {
  const { header, items } = services;

  return (
    <>
      <header className="text-center">
        <h2 className="text-4xl font-black">{header['heading']}</h2>
        <p className="text-lg text-gray-700">{header['subheading']}</p>
      </header>
      <div className={`mt-8 md:grid md:gap-x-8 grid-cols-3`}>
        {items.map(({ title, desc, link }) => {
          return (
            <div key={title} className="mt-16">
              <img
                className="rounded-full"
                src="//placehold.it/48"
                alt={title}
              />
              <h3 className="mb-2 text-xl font-black leading-snug">{title}</h3>
              <p className="my-0 text-sm text-gray-700 ">{desc}</p>
              <p>
                <Link href={link}>
                  <a>Learn More</a>
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const BlogPosts = ({ posts }) => {
  return (
    <div className="container">
      <header className="flex items-baseline justify-between mt-24 mb-8 tracking-tight">
        <h2 className="font-black text-gray-700 uppercase">Blog</h2>
        <div>
          <Link href="/blog">
            <a className="flex items-center font-extrabold text-green-500">
              All Posts <FeatherIcon name="arrowRight" className="ml-1" />
            </a>
          </Link>
        </div>
      </header>
      <PostList posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
