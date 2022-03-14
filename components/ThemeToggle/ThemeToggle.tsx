import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import ThemeToggleIcon from './ThemeToggleIcon';

export const StyledButton = styled('button', {
  ...tw`
    inline-flex w-9 h-9 p-2 rounded-lg
    bg-black/0 dark:(bg-white/0)
    hover:(bg-black/5 text-black/90 dark:(bg-white/10 text-white/90))
    active:(bg-black/5 text-black dark:(bg-white/10 text-white))
    focus:(outline-none text-black/90 ring-2 ring-black/80 dark:(text-white/90 ring-white/80))
    transition-all
  `,
});

function ThemeToggle() {
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
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <ThemeToggleIcon theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
    </StyledButton>
  );
}

export default ThemeToggle;
