import { dispatch, subscribe, unsubscribe } from '@/lib/events';
import { cn } from '@/lib/utils';
import * as ThemeTogglePrimitive from '@radix-ui/react-radio-group';
import { Monitor, MoonStar as Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  const handleThemeChange = (theme: string) => {
    if (theme === 'system') {
      dispatch('set-theme', null);
    } else {
      dispatch('set-theme', theme);
    }
    setTheme(theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      setTheme('system');
    } else {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    subscribe('set-theme', () => setTheme(theme));

    return () => {
      unsubscribe('set-theme', () => setTheme(theme));
    };
  }, [theme]);

  return (
    <ThemeToggleRadioGroup value={theme} onValueChange={handleThemeChange}>
      <ThemeToggleGroupItem value="light">
        <Sun className="size-full" strokeWidth={1.5} />
      </ThemeToggleGroupItem>
      <ThemeToggleGroupItem value="system">
        <Monitor className="size-full" strokeWidth={1.5} />
      </ThemeToggleGroupItem>
      <ThemeToggleGroupItem value="dark">
        <Moon className="size-full" strokeWidth={1.5} />
      </ThemeToggleGroupItem>
    </ThemeToggleRadioGroup>
  );
};

export const ThemeToggleRadioGroup = React.forwardRef<
  React.ComponentRef<typeof ThemeTogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ThemeTogglePrimitive.Root>
>(({ ...props }, ref) => {
  return (
    <ThemeTogglePrimitive.Root
      className="flex max-w-[max-content] gap-2 rounded-full border border-border p-0.5"
      {...props}
      ref={ref}
    />
  );
});
ThemeToggle.displayName = ThemeTogglePrimitive.Root.displayName;

const ThemeToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ThemeTogglePrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ThemeTogglePrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <ThemeTogglePrimitive.Item
      ref={ref}
      className={cn(
        ['size-7 rounded-full text-gray-600 dark:text-gray-200'],
        [
          'grid grid-cols-1 grid-rows-1 place-items-center *:col-span-full *:row-span-full',
        ],
        ['ring-offset-background'],
        [
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        ],
        [
          'data-[state=checked]:text-gray-100 dark:data-[state=checked]:text-gray-900',
        ],
        className
      )}
      {...props}
    >
      <ThemeTogglePrimitive.Indicator asChild>
        <motion.div
          layoutId="themeToggleIndicator"
          transition={{ duration: 0.2 }}
          className="size-full rounded-full bg-gray-900 dark:bg-gray-100"
        />
      </ThemeTogglePrimitive.Indicator>
      <div className="relative z-10 p-1">{children}</div>
    </ThemeTogglePrimitive.Item>
  );
});
ThemeToggleGroupItem.displayName = ThemeTogglePrimitive.Item.displayName;
