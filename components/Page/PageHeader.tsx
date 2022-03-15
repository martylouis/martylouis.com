import 'twin.macro';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import SEO from '@/components/SEO';
import ThemeToggle from '@/components/ThemeToggle';

function PageHeader() {
  return (
    <>
      <SEO />
      <header
        role="banner"
        // tw="bg-white border-b border-black/5 dark:(bg-black/10 border-white/5)"
      >
        <Container size="full" tw="flex items-center justify-between py-4">
          <Logo tw="w-12 h-12 text-gray-800 dark:text-gray-300" />
          <ThemeToggle />
        </Container>
      </header>
    </>
  );
}
export default PageHeader;
