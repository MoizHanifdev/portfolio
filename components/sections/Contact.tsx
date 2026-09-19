"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";
import { CONTACT_CONTENT } from "@/content/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative border-t border-border/60"
    >
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={CONTACT_CONTENT.eyebrow}
          title={CONTACT_CONTENT.title}
          highlight={CONTACT_CONTENT.highlight}
          description={CONTACT_CONTENT.supportingLine}
          align="left"
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-6">
            <Reveal variant="fadeInUp" delay={0.1}>
              <ContactInfo />
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <Reveal variant="fadeInUp" delay={0.25}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
