"use client";

import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<
    HTMLMotionProps<"button">,
    "children" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
  > {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled = false,
      children,
      href,
      target,
      rel,
      download,
      ...props
    },
    ref
  ) => {
    // Base interactive styles
    const baseStyles =
      "group relative inline-flex items-center justify-center font-medium select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-full whitespace-nowrap";

    const variants = {
      primary:
        "bg-accent text-accent-foreground font-semibold hover:bg-accent-hover hover:shadow-accent-glow border border-accent/20",
      secondary:
        "bg-surface-elevated text-foreground border border-border hover:border-border-strong hover:bg-surface-hover shadow-card-ambient",
      outline:
        "bg-transparent text-foreground border border-border hover:border-accent/50 hover:text-accent hover:bg-accent-subtle",
      ghost:
        "bg-transparent text-foreground/80 hover:text-foreground hover:bg-surface-hover",
      link:
        "bg-transparent text-accent hover:text-accent-hover p-0 h-auto rounded-none font-medium min-h-[44px]",
    };

    const sizes = {
      sm: "min-h-[44px] sm:min-h-[38px] px-4 text-xs sm:text-xs gap-1.5",
      md: "min-h-[44px] sm:min-h-[44px] px-6 text-sm gap-2",
      lg: "min-h-[50px] sm:min-h-[52px] px-8 text-base gap-2.5",
      icon: "min-h-[44px] min-w-[44px] p-0",
    };

    // Text link variant with animated underline
    if (variant === "link") {
      const linkContent = (
        <span className="relative inline-flex items-center gap-1.5 py-1">
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
          <span className="absolute bottom-1 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
        </span>
      );

      if (href) {
        return (
          <a
            href={href}
            target={target}
            rel={rel}
            download={download}
            className={cn(baseStyles, variants.link, className)}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {linkContent}
          </a>
        );
      }

      return (
        <button
          ref={ref}
          disabled={disabled || isLoading}
          className={cn(baseStyles, variants.link, className)}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {linkContent}
        </button>
      );
    }

    const buttonBody = (
      <>
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon
        )}
        <span className="truncate">{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          whileHover={disabled || isLoading ? undefined : { y: -2, scale: 1.025 }}
          whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
          transition={springTransition}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement> as any)}
        >
          {buttonBody}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={disabled || isLoading ? undefined : { y: -2, scale: 1.025 }}
        whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
        transition={springTransition}
        {...props}
      >
        {buttonBody}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
