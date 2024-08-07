import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  CaretDownIcon,
  CheckIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
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
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="items-center" size="sm">
          <span className="relative">
            <SunIcon className="rotate-lightmode scale-lightmode absolute size-5 transition-transform duration-500" />
            <MoonIcon className="rotate-darkmode scale-darkmode size-5 transition-transform duration-500" />
          </span>
          <span className="sr-only">Toggle theme</span>
          <CaretDownIcon className="-mr-0.5 ml-1 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeItem, index) => (
          <DropdownMenuItem key={index} onClick={() => toggleTheme(themeItem)}>
            <CheckIcon
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
