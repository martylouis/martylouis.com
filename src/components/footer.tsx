/* eslint-disable @next/next/no-img-element */
"use client"

import { NavLink } from "@/components/nav-link"
import { ContainerInner, ContainerOuter } from "@/components/ui/container"
import { navConfig } from "@/config/nav"

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navConfig.map((item) => {
                  return (
                    <NavLink key={item.text} href={item.href}>
                      {item.text}
                    </NavLink>
                  )
                })}
              </div>
              <CreativeCommonsLicence />
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}

function CreativeCommonsLicence() {
  return (
    <p className="flex-shrink text-balance text-center text-sm font-medium text-zinc-500 sm:text-right dark:text-zinc-400">
      &copy; {new Date().getFullYear()}{" "}
      <span property="dct:title">Marty Louis LLC</span>. Licensed by{" "}
      <a
        href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        className="inline-flex underline decoration-zinc-200 underline-offset-2 transition-[text-underline-offset,color] hover:text-teal-500 hover:underline-offset-4 dark:decoration-zinc-500 dark:hover:decoration-teal-400"
      >
        CC BY 4.0
        <img
          className="ml-2 h-5 align-text-bottom"
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt=""
        />
        <img
          className="ml-1 h-5 align-text-bottom"
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          alt=""
        />
      </a>
    </p>
  )
}
