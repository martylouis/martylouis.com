import { ButtonLink } from '@/components/Button';
import Container from '@/components/Container';
import {
  IconProps,
  LogoGithub,
  LogoLinkedin,
  LogoMartyLouis,
  LogoTwitter,
  PaperPlane,
} from '@/components/Icons';
import Project from '@/components/Project';
import { SEOPage } from '@/components/SEO';
import ThemeToggle from '@/components/ThemeToggle';
import { homeContent, homeSEO } from '@/data/pages/home.constants';
import { formatNotionRichText } from '@/lib/formatNotionRichText';
import { Client } from '@notionhq/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    icon: LogoGithub,
    href: 'https://github.com/martylouis',
  },
  {
    name: 'LinkedIn',
    icon: LogoLinkedin,
    href: 'https://www.linkedin.com/in/martylouis/',
  },
  {
    name: 'Twitter',
    icon: LogoTwitter,
    href: 'https://twitter.com/martylouis',
  },
];

export default function Home({ works }: { works: any[] }) {
  const { title, subtitle, button } = homeContent.hero;
  const { url, text } = button;
  const { src, alt, width, height } = homeContent.profile.image;
  return (
    <>
      <SEOPage {...homeSEO} />

      <header className="mt-24">
        <Container>
          <div className="mb-8 flex w-full items-center gap-10">
            <div className="flex-shrink-1 mr-auto flex items-center rounded-full border border-gray-500 p-0.5">
              <Image
                src={'/images/martylouis-profile.jpg'}
                alt={'Marty Thierry'}
                width={128}
                height={128}
                className="rounded-full"
                role="presentation"
              />
            </div>
            <SocialLinks links={socialLinks} />
            <ThemeToggle size={24} />
          </div>
          <h1 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">
            Hey, I&rsquo;m Marty
          </h1>
          <div className="mb-8 space-y-4">
            <p className="text-xl">
              I&rsquo;m a UX designer and developer based in Destin, Florida. I
              enjoy building beautiful, functional user interfaces that are easy
              to use and simple to understand.
            </p>
            <p className="text-xl">
              I&rsquo;ve been helping small businesses and organizations build
              websites, apps, and brands for over 10 years. Say hello or
              checkout some featured work below.
            </p>
          </div>
          <ButtonLink href={url} variant="primary">
            <span>Let&rsquo;s work together</span>
            <PaperPlane size={16} />
          </ButtonLink>
        </Container>
      </header>

      <Container>
        <div className="my-24 border border-b border-gray-400" />
      </Container>

      <Container>
        <div className="mb-16">
          <h2 id="work" className="mb-2 text-3xl font-extrabold md:text-4xl">
            Featured Work
          </h2>
          <p className="text-lg text-gray-low">
            From small to large, here are just a few of the projects I&rsquo;ve
            worked on.
          </p>
        </div>
        {works.map(({ id, title, excerpt, cover, url }) => (
          <Project
            key={id}
            title={title}
            description={excerpt}
            image={{ src: cover, alt: title }}
            url={url}
          />
        ))}
      </Container>

      <Container>
        <div className="my-24 border border-b border-gray-400" />
      </Container>

      <footer className="pb-24">
        <Container className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="inline-flex h-16 w-16 rounded-full bg-gray-600 p-2">
              <LogoMartyLouis />
            </div>
            <p className="text-sm text-gray-low">
              &copy; {new Date().getFullYear()} Marty Louis Co.
            </p>
          </div>
          <div className="flex items-center gap-10">
            <SocialLinks links={socialLinks} />
            <ThemeToggle size={24} />
          </div>
        </Container>
      </footer>
    </>
  );
}

type SocialLinkProps = {
  links: {
    name: string;
    icon: React.ComponentType<IconProps>;
    href: string;
  }[];
};

const SocialLinks = ({ links, ...props }: SocialLinkProps) => {
  return (
    <>
      {links.map(({ name, icon: Icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={`Follow @martylouis on ${name}`}
        >
          <Icon size={24} title={`Follow @martylouis on ${name}`} />
        </a>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_DB_WORK as string,
    filter: {
      property: 'IsPublished',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'DatePublished',
        direction: 'descending',
      },
    ],
  });

  const works = data.results.map(({ id, properties, cover }: any) => ({
    id: id,
    title: properties.Title.title[0].plain_text,
    excerpt: properties.Excerpt.rich_text
      ?.map((item: any) => formatNotionRichText(item))
      .join(''),
    cover: cover?.file.url ?? '',
    url: properties.Url.url,
    tags: properties.Tags.multi_select.map((tag: any) => tag.name),
  }));

  return {
    props: {
      works,
    },
  };
};
