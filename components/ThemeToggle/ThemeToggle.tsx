import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import ThemeToggleIcon from './ThemeToggleIcon';

export const StyledButton = styled('button', {
  ...tw`inline-flex p-1.5 w-8 h-8 items-center justify-center text-xs font-bold rounded-full
    text-gray-600 dark:text-gray-400
  hover:(text-gray-900 dark:text-gray-100)
  // focus:(outline-none ring ring-teal-700)`,
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
      <ThemeToggleIcon theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
    </StyledButton>
  );
};

export default ThemeToggle;
