import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  eyebrowVariant?: "accent" | "neutral" | "outline" | "surface" | "secondary";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
  eyebrowVariant = "accent",
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <Reveal variant="fadeInUp" amount={0.2} className="w-full">
      <div
        className={cn(
          "flex flex-col max-w-3xl mb-12 sm:mb-16",
          alignment[align],
          className
        )}
      >
        {eyebrow && (
          <Badge
            variant={eyebrowVariant}
            size="sm"
            dot
            className="mb-4"
          >
            {eyebrow}
          </Badge>
        )}

        <h2 className="font-heading text-display-lg font-bold tracking-tight text-foreground leading-[1.08]">
          {title}
          {highlight && (
            <span className="text-accent ml-2 inline-block">
              {highlight}
            </span>
          )}
        </h2>

        {description && (
          <p className="mt-4 text-body-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
