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
    <StyledSwitch onClick={handleToggle} checked={resolvedTheme === 'dark'}>
      <StyledThumb>
        {resolvedTheme === 'dark' ? (
          <Sun
            size="14px"
            strokeWidth="2px"
            fill="currentColor"
            tw="text-gray-800"
          />
        ) : (
          <Moon
            size="14px"
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
  ...tw`inline-flex items-center w-6 h-4 bg-yellow-400 bg-opacity-50 rounded-full`,
  appearance: 'none',
  border: 'none',
  padding: 0,
  position: 'relative',
  // boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
  '&:focus': {
    outline: 'none',
  },
  '&[data-state="checked"]': {
    ...tw`bg-[#000] bg-opacity-30`,
  },
});

const StyledThumb = styled(Switch.Thumb, {
  ...tw`inline-flex items-center justify-center w-[20px] h-[20px] bg-gray-700 rounded-full dark:bg-yellow-200`,
  // boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.8)',
  transition: 'transform 100ms',
  transform: 'translateX(9px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(-3px)',
  },
});
