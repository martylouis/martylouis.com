"use client"

import Link from "next/link"

import { ContainerInner, ContainerOuter } from "@/components/ui/container"
import { navConfig, type NavLink } from "@/config/nav"
import { usePathname } from "next/navigation"

function NavLink({ href, children }: NavLink) {
  let isCurrentPath = usePathname() === href
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      aria-current={isCurrentPath ? "page" : undefined}
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navConfig.map((item) => (
                  <NavLink key={item.text} href={item.href}>
                    {item.text}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
