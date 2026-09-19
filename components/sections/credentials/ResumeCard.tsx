"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Download, FileText, Eye } from "lucide-react";

export interface ResumeCardProps {
  title?: string;
  caption?: string;
  pdfUrl?: string;
  thumbnail?: string;
  downloadFilename?: string;
}

export function ResumeCard({
  title = "Full Resume",
  caption = "One-page overview of experience, projects, and skills",
  pdfUrl = "/resume.pdf",
  thumbnail = "/images/resume-thumbnail.jpg",
  downloadFilename = "Abdul_Moiz_Hanif_Resume.pdf",
}: ResumeCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-surface border border-accent/30 hover:border-accent/70 hover:shadow-card-hover transition-all duration-300 shadow-card-ambient flex flex-col justify-between h-full group before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:via-accent-hover before:to-accent before:z-20">
      {/* 4:3 Aspect Ratio Edge-to-Edge Image Frame with Link */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View full resume PDF in a new tab"
        className="relative w-full aspect-[4/3] bg-surface-subtle overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group/thumb"
      >
        <Image
          src={thumbnail}
          alt="Abdul Moiz Hanif Resume Preview"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover/thumb:scale-105 group-hover:scale-105"
        />

        {/* Soft Gradient Overlay at bottom of thumbnail for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-85 pointer-events-none" />

        {/* Floating Semi-Transparent PDF Badge */}
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-surface-elevated/90 backdrop-blur-md border border-border/80 text-accent shadow-sm">
            PDF · 1 Page
          </span>
        </div>

        {/* Hover Overlay with Open PDF Hint */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-accent pointer-events-none">
          <div className="h-9 w-9 rounded-full bg-surface-elevated/90 border border-accent/40 flex items-center justify-center shadow-accent-glow-sm">
            <Eye className="h-4 w-4 text-accent" />
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-foreground">
            Open PDF
          </span>
        </div>
      </a>

      {/* Resume Details & Action Buttons */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <FileText className="h-3 w-3" />
            </div>
            <h5 className="font-heading text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug tracking-tight">
              {title}
            </h5>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-sans">
            {caption}
          </p>
        </div>

        {/* Flexible Spacer */}
        <div className="flex-1" />

        {/* Action Buttons: Pinned to bottom via mt-auto */}
        <div className="mt-auto pt-3.5 border-t border-border/70 flex flex-col gap-2 w-full">
          <Button
            variant="primary"
            size="sm"
            href={pdfUrl}
            download={downloadFilename}
            leftIcon={<Download className="h-3.5 w-3.5 shrink-0" />}
            aria-label="Download resume as PDF"
            className="w-full justify-center text-xs font-semibold py-2.5 h-auto shadow-accent-glow-sm"
          >
            Download
          </Button>

          <Button
            variant="outline"
            size="sm"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<ExternalLink className="h-3.5 w-3.5 shrink-0" />}
            aria-label="View full resume PDF in a new tab"
            className="w-full justify-center text-xs font-semibold py-2 h-auto hover:text-accent"
          >
            View Online
          </Button>
        </div>
      </div>
    </div>
  );
}
