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

const themes = [
  {
    mode: "light",
    name: "Light",
  },
  {
    mode: "dark",
    name: "Dark",
  },
  {
    mode: "system",
    name: "System",
  },
] as const;

type ThemeMode = (typeof themes)[number]["mode"];

export const ThemeToggle: React.FC = () => {
  const [themeMode, setThemeState] = React.useState<ThemeMode>("light");

  const toggleTheme = (selectedTheme: ThemeMode) => {
    setThemeState(selectedTheme);
  };

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    const isDark =
      themeMode === "dark" ||
      (themeMode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [themeMode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="pointer-events-auto">
        <Button
          variant="ghost"
          className="group size-10 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          size="sm"
          aria-label={`Change theme to ${
            themeMode === "dark" ? "light" : "dark"
          } mode`}
        >
          <span className="relative">
            <SunIcon
              size="24"
              strokeWidth={1.5}
              className="fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
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
        {themes.map((theme, index) => (
          <DropdownMenuItem key={index} onClick={() => toggleTheme(theme.mode)}>
            <CheckIcon
              size={18}
              className={cn(
                themeMode === theme.mode ? "opacity-100" : "opacity-0",
                "mr-2 transition-opacity delay-75",
              )}
            />
            <span>{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
