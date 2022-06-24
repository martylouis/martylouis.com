import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggleIcon from './ThemeToggleIcon';

type ThemeToggleProps = {
  className?: string;
  size?: number;
};

function ThemeToggle({ className, size = 24, ...props }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme && resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={clsx('flex-shrink-0 transition-all', className)}
      onClick={handleToggle}
      aria-label="Toggle theme"
      {...props}
    >
      <ThemeToggleIcon
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        size={size}
      />
    </button>
  );
}

export default ThemeToggle;
