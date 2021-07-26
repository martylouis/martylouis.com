import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import tw, { theme, styled } from 'twin.macro';
import * as Switch from '@radix-ui/react-switch';
import { Moon, Sun } from 'react-feather';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme && resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledSwitch
      onClick={handleToggle}
      aria-hidden="true"
      checked={resolvedTheme === 'dark'}
    >
      <StyledThumb>
        {resolvedTheme === 'dark' ? (
          <Sun
            size="16px"
            strokeWidth="2px"
            fill="currentColor"
            tw="text-gray-800"
          />
        ) : (
          <Moon
            size="16px"
            fill="currentColor"
            strokeWidth="0"
            tw="text-white"
          />
        )}
      </StyledThumb>
    </StyledSwitch>
  );
};

export default ThemeToggle;

const StyledSwitch = styled(Switch.Root, {
  ...tw`inline-flex items-center w-[20px] h-[36px] rounded-full`,
  ...tw`bg-gray-200`,
  appearance: 'none',
  border: 'none',
  padding: 0,
  position: 'relative',
  boxShadow:
    'inset 0 2px 5px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(255,255,255, 0.1)',
  '&:focus': {
    outline: 'none',
  },
  '&[data-state="checked"]': {
    ...tw`bg-gray-900`,
  },
});

const StyledThumb = styled(Switch.Thumb, {
  ...tw`inline-flex items-center justify-center flex-shrink-0 w-[20px] h-[20px]  rounded-full bg-gray-800 dark:bg-gray-300`,
  // boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.8)',
  transition: 'transform 150ms',
  transform: 'translateY(-7px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateY(7px)',
  },
});
