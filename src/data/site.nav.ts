export type NavItem = {
  href: string
  text: string
}

export type SiteNav = {
  headerDesktop: NavItem[]
  headerMobile: NavItem[]
  footer: NavItem[]
}

const siteNav: SiteNav = {
  headerDesktop: [
    { href: "/about/", text: "About" },
    { href: "/projects/", text: "Projects" },
    { href: "/uses/", text: "Uses" },
  ],
  headerMobile: [
    { href: "/", text: "Home" },
    { href: "/about/", text: "About" },
    { href: "/projects/", text: "Projects" },
    { href: "/uses/", text: "Uses" },
  ],
  footer: [
    { href: "/", text: "Home" },
    { href: "/about/", text: "About" },
    { href: "/projects/", text: "Projects" },
    { href: "/uses/", text: "Uses" },
  ],
}

export default siteNav
