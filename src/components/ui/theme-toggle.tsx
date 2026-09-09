"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/vendors/ui/button";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={`h-12 w-12 rounded-lg border border-border/70 bg-background text-muted-foreground ${className}`}
        aria-label="Toggle theme"
      >
        <span className="size-5 rounded-full bg-muted/40 animate-pulse" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={`relative h-12 px-4 gap-2.5 rounded-lg border border-border/70 bg-background/80 hover:bg-muted/80 text-foreground shadow-xs transition-all duration-200 cursor-pointer font-semibold ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative flex items-center justify-center size-5">
        <Sun
          className={`size-5 text-amber-500 transition-all duration-300 ${
            isDark
              ? "rotate-90 scale-0 opacity-0 absolute"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`size-5 text-sky-400 transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 absolute"
          }`}
        />
      </div>
      <span className="text-base font-semibold select-none">
        {isDark ? "Dark" : "Light"}
      </span>
    </Button>
  );
}

export default ThemeToggle;
