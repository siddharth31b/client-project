"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-9 rounded-lg border border-border/60 bg-background text-muted-foreground",
          className
        )}
        aria-label="Toggle theme"
      >
        <span className="size-4 rounded-full bg-muted/40 animate-pulse" />
      </Button>
    );
  }

  if (!showLabel) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={cn(
          "relative size-9 rounded-lg border border-border/60 bg-background/50 hover:bg-muted text-foreground transition-colors cursor-pointer",
          className
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="relative flex items-center justify-center size-4">
          <Sun
            className={cn(
              "size-4 text-amber-500 transition-all duration-300",
              isDark
                ? "rotate-90 scale-0 opacity-0 absolute"
                : "rotate-0 scale-100 opacity-100"
            )}
          />
          <Moon
            className={cn(
              "size-4 text-sky-400 transition-all duration-300",
              isDark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0 absolute"
            )}
          />
        </div>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={cn(
        "relative h-11 px-4 gap-2.5 rounded-lg border border-border/70 bg-background/80 hover:bg-muted/80 text-foreground shadow-xs transition-all duration-200 cursor-pointer font-medium",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative flex items-center justify-center size-4">
        <Sun
          className={cn(
            "size-4 text-amber-500 transition-all duration-300",
            isDark
              ? "rotate-90 scale-0 opacity-0 absolute"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "size-4 text-sky-400 transition-all duration-300",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 absolute"
          )}
        />
      </div>
      <span className="text-sm font-medium select-none">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </Button>
  );
}

export default ThemeToggle;
