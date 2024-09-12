import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavLink extends React.ComponentPropsWithoutRef<typeof Link> {
  text?: string
}

export function NavLink({ href, className, children }: NavLink) {
  let isCurrentPath = usePathname() === href
  return (
    <Link
      href={href}
      className={cn(
        "relative transition hover:text-teal-500 dark:hover:text-teal-400",
        className,
      )}
      aria-current={isCurrentPath ? "page" : undefined}
    >
      {children}
    </Link>
  )
}
