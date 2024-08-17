import { cn } from "@/lib/utils"

function HeaderDesktopNav({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {children}
      </ul>
    </nav>
  )
}

function HeaderDesktopNavItem({
  href,
  isCurrent = false,
  children,
  ...props
}: {
  href: string
  isCurrent: boolean
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "relative block px-3 py-2 transition",
          isCurrent
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400",
        )}
        {...props}
      >
        {children}
        {isCurrent && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </a>
    </li>
  )
}

export { HeaderDesktopNav, HeaderDesktopNavItem }
