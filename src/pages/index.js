import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Page } from '@components/layout';
import { hero, services } from '@data/home';
import Emoji from '@components/emoji';
import { H1, H2, H3 } from '@components/typography';
import Tabs from '@components/tabs';

const { greeting, subheading, photo } = hero;

export default function Index() {
  return (
    <Page>
      <NextSeo
        title={'Marty Louis'}
        description={'Marty Louis personal blog!'}
      />
      <Hero />
      <Services />
      <About />
      <Feed />
    </Page>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="max-w-4xl px-8 mx-auto">
        <div className="pt-8 pb-16 space-y-6 md:space-y-10 md:text-center sm:py-24">
          <h1 className="text-4xl font-black tracking-tighter text-gray-900 md:text-6xl">
            Let’s make your website{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-800">
              better
            </span>
          </h1>
          <p className="text-gray-700 md:text-2xl">{subheading}</p>
          <div className="flex space-x-4 md:justify-center">
            <Link href="/contact">
              <a className="block px-6 py-3 font-medium text-white bg-green-700 rounded md:text-lg">
                Get in touch
              </a>
            </Link>
            {/* <a
              href="#services"
              className="block px-6 py-3 font-medium text-gray-900 bg-gray-100 rounded md:text-lg"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="max-w-6xl px-8 mx-auto md:grid md:grid-cols-3 md:gap-16">
        {services.items.map(({ title, emoji, desc, link }) => (
          <div key={title} className="pb-8 space-y-4 md:pb-0 md:col-span-1">
            <div className="text-4xl">
              <Emoji ariaLabel={emoji.label} emoji={emoji.type} />
            </div>
            <H3>{title}</H3>
            <p className="text-lg text-gray-700">{desc}</p>
            {/* <p className="mt-2 text-gray-700">{desc}</p> */}
            {/* <p className="mt-2">
    <Link href={link}>
    <a className="font-semibold text-gray-800">Learn more &rarr;</a>
    </Link>
    </p> */}
          </div>
        ))}
      </div>
      <div className="max-w-2xl px-8 mx-auto">
        <hr className="my-20 border-gray-100 divider" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="flex items-center max-w-2xl px-8 mx-auto my-24">
        <div className="flex place-items-center">
          <div className="flex flex-shrink-0 mr-8 overflow-hidden border-2 rounded-full shadow-md place-center border-gray-50">
            <Image
              src={photo.link}
              alt={photo.title}
              height="100"
              width="100"
            />
          </div>
        </div>
        <p className="flex-1 text-gray-600">
          {greeting.text}&nbsp;
          <Emoji
            ariaLabel={greeting.emoji.label}
            emoji={greeting.emoji.type}
          />{' '}
          I’m a freelance web designer, developer, podcaster, writer and
          creator. I’m based in sunny Destin, Florida but work remotely with
          people all over the world.
        </p>
        {/* <p className="text-xl font-bold">Learn More &rarr;</p> */}
      </div>
    </section>
  );
}

function Feed() {
  return (
    <section id="feed">
      <div className="max-w-2xl px-8 mx-auto">
        <Tabs />
        <div className="space-y-16">
          <div className="flex">
            <div className="flex flex-shrink-0 w-16 h-16 mr-8 bg-gray-100 rounded place-center">
              icon
            </div>
            <div>
              <p className="text-sm text-gray-500">Jan 01, 2021</p>
              <h3 className="mt-2 text-2xl font-extrabold">
                New year, new site! <Emoji ariaLabel="celebration" emoji="👀" />
              </h3>
              <p className="mt-2 text-gray-600">
                An all new <a href="##">martylouis.com</a>
              </p>
              <div className="flex mt-4">
                <a
                  href="##"
                  className="block px-8 py-2 text-sm font-medium bg-gray-100 rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-shrink-0 w-16 h-16 mr-8 bg-gray-100 rounded place-center">
              icon
            </div>
            <div>
              <p className="text-sm text-gray-500">Dec 28, 2020</p>
              <h3 className="mt-2 text-2xl font-extrabold">
                The Freelance Dance — Podcast Launch{' '}
                <Emoji ariaLabel="rocket" emoji="🚀" />
              </h3>
              <p className="mt-2 text-gray-600">
                I’m happy to announce the launch of{' '}
                <a href="##">The Freelance Dance</a>, a podcast for freelancers
                navigating the ups and downs of running your own business.
              </p>
              <div className="flex mt-4">
                <a
                  href="##"
                  className="block px-8 py-2 text-sm font-medium bg-gray-100 rounded"
                >
                  View Podcast
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
