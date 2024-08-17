import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { PanelTopOpenIcon } from "lucide-react"

function HeaderMobileNav({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="pointer-events-auto md:hidden" {...props}>
      <Drawer shouldScaleBackground={false} direction="top">
        <DrawerTrigger className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <PanelTopOpenIcon
            strokeWidth={1.5}
            className="ml-2 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerClose>Close</DrawerClose>
            <VisuallyHidden.Root>
              <DrawerTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </DrawerTitle>
              <DrawerDescription>Mobile navigation menu</DrawerDescription>
            </VisuallyHidden.Root>
          </DrawerHeader>
          <nav className="px-8">
            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
              {children}
            </ul>
          </nav>
          <DrawerHandle className="my-8" />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

function HeaderMobileNavItem({
  href,
  children,
  ...props
}: {
  href: string
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "block border-b border-zinc-100 py-4 dark:border-zinc-100/5",
          props.className,
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

export { HeaderMobileNav, HeaderMobileNavItem }
