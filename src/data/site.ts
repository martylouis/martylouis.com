import type { Paths } from '@/types'

const paths: Paths = {
  base: '/',
  page: '/',
  project: 'projects',
  post: 'posts',
  tag: 'tags',
  service: 'services',
}

export default {
  title: 'Marty Louis - Web Designer and Frontend Developer',
  description:
    'Marty Louis is a web designer and frontend developer based in the Destin, FL.',
  name: 'martylouis.com',
  twitter: '@martylouis',
  url: 'https://www.martylouis.com',
  paths,
  trailingSlash: false as boolean,
} as const
