import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Sun, MoonStars } from 'phosphor-react';

export const StyledButton = styled('button', {
  ...tw`inline-flex w-6 h-6 items-center justify-center text-xs font-bold rounded-full border border-gray-300 transition-colors dark:(border-gray-700)
  hocus:(bg-teal-200/50 dark:bg-teal-900/25)
  focus:(outline-none ring ring-teal-700)`,
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
      {resolvedTheme === 'dark' ? <Sun /> : <MoonStars />}
    </StyledButton>
  );
};

export default ThemeToggle;
