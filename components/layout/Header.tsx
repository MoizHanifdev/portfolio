"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_CONFIG } from "@/content/nav";
import { SITE_PROFILE } from "@/content/site";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll listener for header background blur and active section tracking
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 25);

    const sections = ["contact", "credentials", "projects", "about", "home"];
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of sections) {
      if (sectionId === "home") {
        if (window.scrollY < 300) {
          setActiveSection("home");
          break;
        }
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo",
          isScrolled
            ? "bg-background/85 backdrop-blur-lg border-b border-border py-3.5 shadow-card-ambient"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Link
              href="#top"
              className="group inline-flex items-center gap-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label={`${SITE_PROFILE.name} - Home`}
            >
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight group-hover:text-accent transition-colors">
                {SITE_PROFILE.shortName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-1.5 rounded-full bg-surface/60 border border-border/80 px-3 py-1.5 backdrop-blur-md"
              aria-label="Main Navigation"
            >
              {NAV_CONFIG.links.map((link) => {
                const sectionKey =
                  link.href === "#top" || link.href === "#"
                    ? "home"
                    : link.href.replace("#", "");
                const isActive = activeSection === sectionKey;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "text-accent font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-hover/60"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-accent-subtle border border-accent/25 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                href={NAV_CONFIG.cta.href}
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                {NAV_CONFIG.cta.label}
              </Button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 sm:p-8 pt-28"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-4 my-auto">
              {NAV_CONFIG.links.map((link, index) => {
                const sectionKey =
                  link.href === "#top" || link.href === "#"
                    ? "home"
                    : link.href.replace("#", "");
                const isActive = activeSection === sectionKey;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 * (index + 1),
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "block font-heading text-3xl font-bold py-2 transition-colors",
                        isActive ? "text-accent" : "text-foreground hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA & Quick Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="space-y-4 pt-6 border-t border-border"
            >
              <Button
                variant="primary"
                size="lg"
                href={NAV_CONFIG.cta.href}
                onClick={closeMobileMenu}
                className="w-full justify-center"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {NAV_CONFIG.cta.label}
              </Button>
              <p className="text-caption text-muted-foreground text-center">
                {SITE_PROFILE.location} · {SITE_PROFILE.email}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
