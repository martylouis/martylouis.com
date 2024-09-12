import Link from "next/link"

export interface NavLink extends React.ComponentPropsWithoutRef<typeof Link> {
  text?: string
}

export const navConfig: NavLink[] = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/blog", text: "Blog" },
  { href: "/uses", text: "Uses" },
]
