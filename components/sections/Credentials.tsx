"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { EducationCard } from "./credentials/EducationCard";
import { LanguagesList } from "./credentials/LanguagesList";
import { CertificatesShowcase } from "./credentials/CertificatesShowcase";
import { CREDENTIALS_CONTENT } from "@/content/credentials";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="section-padding relative border-t border-border/60"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={CREDENTIALS_CONTENT.eyebrow}
          title={CREDENTIALS_CONTENT.title}
          highlight={CREDENTIALS_CONTENT.highlight}
          description={CREDENTIALS_CONTENT.description}
          align="left"
        />

        {/* Top: Education & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
          <div className="lg:col-span-7 h-full">
            <EducationCard education={CREDENTIALS_CONTENT.education} />
          </div>

          <div className="lg:col-span-5 h-full">
            <LanguagesList languages={CREDENTIALS_CONTENT.languages} />
          </div>
        </div>

        <Divider glow className="my-10 sm:my-14" />

        {/* Bottom: 5-Column Documents & Certificates Showcase with Lightbox and Resume */}
        <CertificatesShowcase
          certifications={CREDENTIALS_CONTENT.certifications}
          resume={CREDENTIALS_CONTENT.resume}
        />
      </Container>
    </section>
  );
}
