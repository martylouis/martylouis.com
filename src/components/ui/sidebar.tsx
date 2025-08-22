import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { Button } from './button';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Briefcase,
  BookOpen,
  Mail,
  Lightbulb,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Featured Work', href: '/work', icon: Briefcase },
    { name: 'Design Philosophy', href: '/philosophy', icon: Lightbulb },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  useEffect(() => {
    const handleSidebarState = (
      event: CustomEvent<{ isMobileOpen: boolean }>
    ) => {
      setIsMobileOpen(event.detail.isMobileOpen);
    };

    document.addEventListener(
      'updateSidebarState',
      handleSidebarState as EventListener
    );
    return () => {
      document.removeEventListener(
        'updateSidebarState',
        handleSidebarState as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('.mobile-nav')
      ) {
        handleMobileClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileOpen]);

  const handleMobileClose = () => {
    document.dispatchEvent(new CustomEvent('closeSidebar'));
  };

  return (
    <>
      {/* Mobile backdrop with fade transition */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
          aria-hidden="true"
          onClick={handleMobileClose}
        />
      )}

      <div
        ref={sidebarRef}
        className={cn(
          'sidebar fixed left-0 z-50 border-r bg-background',
          'transition-all duration-300 ease-in-out transform',
          isCollapsed ? 'w-16' : 'w-64',
          'md:block md:top-0 md:h-screen',
          isMobileOpen
            ? 'block top-16 h-[calc(100vh-4rem)] translate-x-0 opacity-100'
            : 'hidden -translate-x-full opacity-0 md:translate-x-0 md:opacity-100'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo - hidden on mobile since it's in the mobile nav */}
          <div className="hidden h-16 items-center justify-center border-b md:flex">
            <div className="h-[100px] w-[100px] bg-muted transition-all duration-200" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
                    'transition-all duration-200 ease-in-out',
                    'hover:bg-accent hover:text-accent-foreground',
                    isCollapsed ? 'justify-center' : 'justify-start'
                  )}
                  onClick={handleMobileClose}
                >
                  <Icon className="h-5 w-5 transition-transform duration-200" />
                  {!isCollapsed && (
                    <span className="animate-in fade-in slide-in-from-left-5 duration-200">
                      {item.name}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle and Collapse Button - hidden on mobile */}
          <div className="hidden border-t p-2 md:block transition-opacity duration-200">
            <div className="mb-2 flex items-center justify-center">
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-full transition-all duration-200"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <div className="transition-transform duration-200">
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
