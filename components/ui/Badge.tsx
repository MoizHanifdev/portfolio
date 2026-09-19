import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "neutral" | "outline" | "surface" | "secondary";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "accent",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    accent:
      "bg-accent-subtle text-accent border border-accent/25 shadow-sm shadow-accent/5",
    secondary:
      "bg-accent-secondary-subtle text-accent-secondary border border-accent-secondary/25 shadow-sm",
    neutral:
      "bg-surface text-muted-foreground border border-border",
    outline:
      "bg-transparent text-foreground/80 border border-border hover:border-border-strong",
    surface:
      "bg-surface-elevated text-foreground/90 border border-border/80",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-caption",
    md: "px-3.5 py-1 text-xs sm:text-sm font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-mono uppercase transition-colors select-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "accent"
              ? "bg-accent animate-pulse"
              : variant === "secondary"
              ? "bg-accent-secondary animate-pulse"
              : "bg-muted-foreground"
          )}
        />
      )}
      {children}
    </span>
  );
}

export const Tag = Badge;
