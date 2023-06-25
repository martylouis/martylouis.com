import Container from "@/components/Container"
import { Divider } from "@/components/dividers"
import SocialIconLinks from "@/components/social-icon-links"
import ThemeToggle from "@/components/ThemeToggle"

export default function SiteFooter() {
  return (
    <footer id="footer">
      <Container>
        <Divider />
        <div className="mb-8 flex flex-col-reverse items-center justify-between  gap-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Marty Louis Co.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SocialIconLinks />
            <ThemeToggle size={18} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
