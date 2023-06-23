export interface IHomeSEO {
  title?: string
  customTitle?: string
  description: string
}

export interface IHomeContent {
  profile: {
    image: {
      src: string
      width: string
      height: string
      alt: string
    }
    name: string
    title: string
  }
  hero: {
    title: string
    subtitle: string
    button: {
      text: string
      url: string
    }
  }
}
