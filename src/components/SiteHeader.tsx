import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import ThemeToggle, { StyledButton } from '@/components/ThemeToggle';
import Container from '@/components/Container';
import { Command } from 'phosphor-react';
// import { header as headerNav } from '@/data/site/nav';
import tw, { styled } from 'twin.macro';

const SiteHeader = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <header role="banner">
      <Container tw="flex items-center justify-between h-16">
        <Link href="/" passHref>
          <a
            tw="inline-flex items-center hover:text-teal-500"
            title="Go to MartyLouis.com"
          >
            <Logo title="Marty Louis Co. logo" tw="w-8 h-4" />
          </a>
        </Link>
        <div className="flex gap-2">
          <ThemeToggle />
          <StyledButton
            aria-disabled
            tw="cursor-not-allowed opacity-50 hocus:(ring-0 bg-transparent dark:bg-transparent)"
          >
            <Command />
          </StyledButton>
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;
