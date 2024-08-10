import {
  Drawer,
  DrawerContent,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelTopOpenIcon } from "lucide-react";

function MobileNav() {
  return (
    <div className="pointer-events-auto md:hidden">
      <Drawer shouldScaleBackground={false} direction="top">
        <DrawerTrigger className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <PanelTopOpenIcon
            strokeWidth={1.5}
            className="ml-2 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Navigation
            </DrawerTitle>
          </DrawerHeader>
          <nav className="my-4 px-4">
            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
              <MobileNavItem href="/">Home</MobileNavItem>
              <MobileNavItem href="/about">About</MobileNavItem>
              <MobileNavItem href="/projects">Projects</MobileNavItem>
              {/* <MobileNavItem href="/articles">Articles</MobileNavItem> */}
              {/* <MobileNavItem href="/speaking">Speaking</MobileNavItem> */}
              <MobileNavItem href="/uses">Uses</MobileNavItem>
            </ul>
          </nav>
          {/* <DrawerFooter>
            <DrawerClose>Close</DrawerClose>
          </DrawerFooter> */}
          <DrawerHandle className="mb-4" />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a href={href} className="block py-2">
        {children}
      </a>
    </li>
  );
}

export { MobileNav };
