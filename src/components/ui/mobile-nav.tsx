import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const MobileNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleNavState = (event: CustomEvent<{ isMobileOpen: boolean }>) => {
      setIsSidebarOpen(event.detail.isMobileOpen);
    };

    document.addEventListener(
      'updateNavState',
      handleNavState as EventListener
    );
    return () => {
      document.removeEventListener(
        'updateNavState',
        handleNavState as EventListener
      );
    };
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    document.dispatchEvent(
      new CustomEvent('updateSidebarState', {
        detail: { isMobileOpen: newState },
      })
    );
  };

  return (
    <div className="mobile-nav fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
      {/* Logo */}
      <div className="h-10 w-10 bg-muted transition-all duration-200" />

      {/* Right side controls */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          className="relative md:hidden"
        >
          <div className="relative">
            <Menu
              className={cn(
                'h-5 w-5 transition-all duration-200',
                isSidebarOpen
                  ? 'opacity-0 rotate-90 scale-0'
                  : 'opacity-100 rotate-0 scale-100'
              )}
            />
            <X
              className={cn(
                'absolute top-0 left-0 h-5 w-5 transition-all duration-200',
                isSidebarOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-0'
              )}
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
