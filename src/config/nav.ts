export interface NavItem {
  text: string
  href: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export interface NavConfig {
  mainNav: NavItem[]
}

export const navConfig: NavConfig = {
  mainNav: [
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/blog", text: "Blog" },
    { href: "/uses", text: "Uses" },
  ],
}
