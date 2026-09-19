"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { EASING, DURATION } from "@/lib/animations";

export interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  issuer,
  date,
  credentialId,
  triggerRef,
}: ImageLightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      // Simple focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus to triggering element
      triggerRef?.current?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} certificate from ${issuer || "Issuer"}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Dimmed & Frosted Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASING.expo }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl -z-10"
          />

          {/* Modal Content Frame */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: DURATION.base, ease: EASING.expo }}
            className="relative w-full max-w-4xl bg-surface-elevated border border-accent/30 rounded-2xl shadow-card-hover overflow-hidden flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-surface/80">
              <div className="flex items-center gap-3 pr-2">
                <div className="h-8 w-8 rounded-lg bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent shrink-0">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground leading-tight">
                    {title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-muted-foreground font-mono">
                    {issuer && <span>{issuer}</span>}
                    {date && (
                      <>
                        <span className="text-border-strong">·</span>
                        <span>{date}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close certificate preview"
                className="h-11 w-11 min-h-[44px] min-w-[44px] rounded-full bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate High-Res Image Display */}
            <div className="relative w-full bg-black/50 p-2 sm:p-6 flex items-center justify-center overflow-hidden aspect-[4/3] max-h-[70vh]">
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-border/80 shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 95vw, 1000px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer with Verification Info */}
            <div className="p-4 sm:p-5 border-t border-border bg-surface/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2 text-muted-foreground font-mono">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Verified Achievement</span>
                {date && (
                  <>
                    <span className="text-border-strong">·</span>
                    <span>Issued {date}</span>
                  </>
                )}
                {credentialId && (
                  <>
                    <span className="text-border-strong">·</span>
                    <span>Credential ID: <strong className="text-foreground">{credentialId}</strong></span>
                  </>
                )}
              </div>

              <span className="text-[11px] text-muted-foreground font-mono shrink-0">
                Press <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-foreground font-bold">Esc</kbd> or click outside to dismiss
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
