import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { MoonIcon, SunIcon } from '@modulz/radix-icons';

const StyledButton = styled('button', {
  ...tw`inline-flex items-center justify-center text-xs font-bold rounded`,
});

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme && resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <StyledButton
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </StyledButton>
  );
};

export default ThemeToggle;
