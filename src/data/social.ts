type SocialId = 'github' | 'linkedin' | 'twitter'

type SocialLink = {
  id: SocialId
  name: string
  url: string
}

const links: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/martylouis',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/martylouis/',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/martylouis',
  },
] as const

export default {
  links,
}
