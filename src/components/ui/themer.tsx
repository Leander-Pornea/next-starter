"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system";
  onChange?: (theme: "light" | "dark" | "system") => void;
  className?: string;
};

export const ThemeSwitcher = ({
  value,
  onChange,
  className,
}: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // If value prop is provided, sync it to next-themes
  React.useEffect(() => {
    if (value && value !== theme) {
      setTheme(value);
    }
  }, [value, theme, setTheme]);

  // Call onChange when theme changes
  React.useEffect(() => {
    if (onChange) {
      onChange(theme as "light" | "dark" | "system");
    }
  }, [theme, onChange]);

  if (!mounted) {
    return null;
  }

  // Use resolvedTheme for active state (handles system mode)
  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-sm bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;
        return (
          <button
            type="button"
            key={key}
            className="relative h-6 w-6 rounded-sm"
            onClick={() => setTheme(key as "light" | "dark" | "system")}
            aria-label={label}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-sm bg-secondary"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-4 w-4",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
