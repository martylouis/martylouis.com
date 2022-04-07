import 'twin.macro';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

function PageHeader() {
  return (
    <header role="banner">
      <Container size="lg" tw="flex items-center justify-between py-4">
        <Logo tw="w-12 h-12 text-gray-800 dark:text-gray-300" />
        <ThemeToggle />
      </Container>
    </header>
  );
}
export default PageHeader;
