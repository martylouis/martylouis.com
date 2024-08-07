import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CheckIcon, MoonStarIcon, SunIcon } from "lucide-react";
import * as React from "react";

type ThemeState = "light" | "dark" | "system";

export const ThemeToggle: React.FC = () => {
  const [theme, setThemeState] = React.useState<ThemeState>("light");

  const toggleTheme = (selectedTheme: ThemeState) => {
    setThemeState(selectedTheme);
  };

  const handleThemeChange = React.useCallback(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    handleThemeChange();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, [handleThemeChange]);

  React.useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themes: ThemeState[] = ["dark", "light", "system"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="pointer-events-auto">
        <Button
          variant="ghost"
          className="group size-10 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          size="sm"
          aria-label={`Change theme to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
        >
          <span className="relative">
            <SunIcon
              size="6"
              strokeWidth={1.5}
              className="size-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
            />
            <MoonStarIcon
              size={24}
              strokeWidth={1.5}
              className="hidden fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
            />
          </span>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeItem, index) => (
          <DropdownMenuItem key={index} onClick={() => toggleTheme(themeItem)}>
            <CheckIcon
              size={18}
              className={cn(
                theme === themeItem ? "opacity-100" : "opacity-0",
                "mr-2 transition-opacity delay-75",
              )}
            />
            <span>
              {themeItem.charAt(0).toUpperCase() + themeItem.slice(1)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
