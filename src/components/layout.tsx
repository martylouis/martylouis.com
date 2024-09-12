import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <SiteHeader />
        <main className="flex-auto">{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}
