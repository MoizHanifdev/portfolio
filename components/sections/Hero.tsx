"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge, Tag } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { HERO_CONFIG } from "@/content/hero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";
import { EASING, DURATION } from "@/lib/animations";

export function Hero() {
  const leadWords = HERO_CONFIG.headline.lead.split(" ");
  const accentWords = HERO_CONFIG.headline.accent.split(" ");
  const trailWords = HERO_CONFIG.headline.trail.split(" ");

  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative Content & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start order-2 lg:order-1">
            {/* 1. Eyebrow Badge with Pulsing Status Indicator */}
            <Reveal variant="fadeInDown" delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-3">
                <Badge variant="accent" size="md" dot>
                  {HERO_CONFIG.eyebrow}
                </Badge>
              </div>
            </Reveal>

            {/* 2. Headline with Cinematic Word-by-Word Staggered Entrance */}
            <h1 className="font-heading text-display-lg sm:text-display-xl font-bold tracking-tight text-foreground leading-[1.06] max-w-4xl mb-6 sm:mb-8">
              {/* Lead words */}
              {leadWords.map((word, i) => (
                <motion.span
                  key={`lead-${i}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.base,
                    delay: 0.15 + i * 0.04,
                    ease: EASING.expo,
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}

              {/* Warm Amber Accent words */}
              <span className="text-accent inline-block">
                {accentWords.map((word, i) => (
                  <motion.span
                    key={`accent-${i}`}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: DURATION.base,
                      delay: 0.15 + (leadWords.length + i) * 0.04,
                      ease: EASING.expo,
                    }}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              {/* Trail words */}
              {trailWords.map((word, i) => (
                <motion.span
                  key={`trail-${i}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.base,
                    delay:
                      0.15 +
                      (leadWords.length + accentWords.length + i) * 0.04,
                    ease: EASING.expo,
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* 3. Subheadline Paragraph */}
            <Reveal variant="fadeInUp" delay={0.65}>
              <p className="text-body-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8 sm:mb-10 font-sans">
                {HERO_CONFIG.subheadline}
              </p>
            </Reveal>

            {/* 4. Action CTAs */}
            <Reveal variant="fadeInUp" delay={0.8}>
              <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
                <Button
                  variant="primary"
                  size="lg"
                  href={HERO_CONFIG.primaryCta.href}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {HERO_CONFIG.primaryCta.label}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={HERO_CONFIG.secondaryCta.href}
                  leftIcon={<Briefcase className="h-4 w-4" />}
                >
                  {HERO_CONFIG.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            {/* 5. Trust & Credibility Strip */}
            <Reveal variant="fadeInUp" delay={0.95}>
              <div className="pt-6 border-t border-border/80 w-full max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-mono">
                  <MapPin className="h-4 w-4 text-accent shrink-0" />
                  <span>{HERO_CONFIG.trust.location}</span>
                  <span className="text-border-strong">·</span>
                  <span className="text-foreground/90 font-medium">
                    {HERO_CONFIG.trust.statusText}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {HERO_CONFIG.trust.skills.map((skill) => (
                    <Tag key={skill} variant="neutral" size="sm">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Profile Photo Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: DURATION.slow,
                delay: 0.35,
                ease: EASING.expo,
              }}
              className="relative group"
            >
              {/* Atmospheric Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-accent/30 via-accent/5 to-accent-secondary/25 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 bg-surface/80 border border-accent/20 backdrop-blur-md shadow-card-ambient">
                <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-subtle border border-border">
                  <Image
                    src="/images/profile-square.jpg"
                    alt="Abdul Moiz Hanif"
                    width={400}
                    height={400}
                    priority
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 304px"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Role Pill Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-card-ambient">
                  <Badge variant="surface" size="sm" dot className="border-accent/40 bg-surface-elevated/95 backdrop-blur-md py-1 px-3">
                    Business Development
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* 6. Subtle Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-accent transition-colors select-none"
      >
        <Link
          href="#about"
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-4 w-4 text-accent" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
