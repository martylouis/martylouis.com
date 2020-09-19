import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import { getAllPosts } from '../lib/getPosts';
import Link from 'next/link';
import PostList from '../components/PostList';
import site from '../data/site';
import { intro, services, projects } from '../data/home';
import { FeatherIcon } from '../components/Icon';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

export default function Home({ allPosts }) {
  // const morePosts = allPosts;

  return (
    <PageLayout>
      <Head>
        <title>{`${intro.heading} – ${site.author} (${site.name})`}</title>
        <meta name="description" content={site.meta.description} />
      </Head>
      <section className="py-8 sm:py-16">
        <div className="container">
          <Intro />
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <Services />
        </div>
      </section>
      <section className="py-16">
        <div className="px-0">
          <Projects />
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl">Ready to get started?</h2>
            <p className="button-gray">Let’s work together!</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export const Intro = () => {
  const { greeting, heading, subheading, button, photo } = intro;

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-x-8">
        <div className="col-span-2">
          <p className="text-xl text-gray-700">
            {greeting} I’m <strong>Marty</strong>{' '}
            <span role="img" aria-label="nerd emoji">
              🤓
            </span>
          </p>
          <h1 className="mt-2 text-4xl font-black leading-none md:text-5xl">
            {heading}
          </h1>
          <p className="text-2xl font-light text-gray-700">{subheading}</p>
        </div>
        <div className="">
          <img
            className="w-full border-2 border-gray-200 rounded-lg"
            src={photo.link}
            alt={photo.title}
          />
        </div>
      </div>
      <p className="flex space-x-8">
        <Link href={button.link}>
          <a className="button button-gray">{button.text}</a>
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
      <div className="grid-cols-3 mt-8 md:grid md:gap-x-8">
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

export const Projects = () => {
  return (
    <>
      <div className="container">
        <header className="text-centered">
          <h2 className="flex flex-col items-center justify-center text-4xl font-black">
            <span className="-mb-2 text-sm font-normal tracking-wider text-gray-500 uppercase">
              Selected
            </span>{' '}
            <span className="tracking-tight">Work</span>
          </h2>
        </header>
      </div>
      <Swiper
        // effect="coverflow"
        // coverflowEffect={{
        //   rotate: 0,
        //   slideShadows: false,
        //   depth: 300,
        // }}
        centeredSlides="true"
        spaceBetween={24}
        slidesPerView="auto"
        // navigation
        // pagination={{ clickable: true, type: 'fraction' }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {projects.map(({ title, desc, img }, i) => (
          <SwiperSlide
            key={i}
            className="my-8 overflow-hidden shadow-xl rounded-xl w-fourth md:w-2/5"
          >
            <div className="relative h-0 pb-fourth">
              <img
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={img}
                alt={title}
              />
            </div>
            <div className="relative p-4 text-gray-100 bg-gray-900">
              <h3 className="my-1 font-medium tracking-tight md:text-lg">
                {title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
