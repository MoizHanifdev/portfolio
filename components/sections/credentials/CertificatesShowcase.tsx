"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Certification, ResumeContent } from "@/content/credentials";
import { Badge } from "@/components/ui/Badge";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { StaggerReveal, StaggerItem } from "@/components/ui/StaggerReveal";
import { ResumeCard } from "./ResumeCard";
import { Award, Eye, CheckCircle2 } from "lucide-react";

export interface CertificatesShowcaseProps {
  certifications: Certification[];
  resume?: ResumeContent;
}

export function CertificatesShowcase({
  certifications,
  resume,
}: CertificatesShowcaseProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpen = (cert: Certification, index: number) => {
    setSelectedCert(cert);
  };

  const handleClose = () => {
    setSelectedCert(null);
  };

  const totalCount = (resume ? 1 : 0) + certifications.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/80">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent shadow-sm">
            <Award className="h-4 w-4" />
          </div>
          <h4 className="font-heading text-xs uppercase font-mono tracking-wider text-muted-foreground font-semibold">
            Verified Documents & Credentials (Click to inspect / view)
          </h4>
        </div>
        <Badge variant="accent" size="sm" dot>
          {totalCount} Verified Assets
        </Badge>
      </div>

      {/* 5-Column Responsive Staggered Grid */}
      <StaggerReveal
        stagger={0.08}
        amount={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6"
      >
        {/* 1. Resume Showcase Card (Featured) */}
        {resume && (
          <StaggerItem className="h-full">
            <ResumeCard
              title={resume.title}
              caption={resume.caption}
              pdfUrl={resume.pdfUrl}
              thumbnail={resume.thumbnail}
              downloadFilename={resume.downloadFilename}
            />
          </StaggerItem>
        )}

        {/* 2-5. Certificate Showcase Cards */}
        {certifications.map((cert, index) => (
          <StaggerItem key={cert.name} className="h-full">
            <div
              ref={(el) => {
                triggerRefs.current[index] = el;
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View certificate for ${cert.name} from ${cert.issuer}`}
              onClick={() => handleOpen(cert, index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(cert, index);
                }
              }}
              className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl h-full flex flex-col"
            >
              <div className="h-full p-0 overflow-hidden rounded-xl border border-border/80 hover:border-accent/60 hover:shadow-card-hover transition-all duration-300 shadow-card-ambient flex flex-col justify-between bg-surface group-hover:-translate-y-1">
                {/* 4:3 Aspect Ratio Edge-to-Edge Image Frame with dark viewport matting */}
                <div className="relative w-full aspect-[4/3] bg-[#121316] border-b border-border/60 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Hover Overlay with Inspect Hint */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 text-accent pointer-events-none">
                    <div className="h-9 w-9 rounded-full bg-surface-elevated/90 border border-accent/40 flex items-center justify-center shadow-accent-glow-sm">
                      <Eye className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-white">
                      Inspect
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h5 className="font-heading text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug tracking-tight">
                      {cert.name}
                    </h5>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                      <Award className="h-3.5 w-3.5 text-accent/80 shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Flexible Spacer to absorb extra height */}
                  <div className="flex-1" />

                  {/* Footer Metadata: Only Issue Date (Credential ID moved to Lightbox) */}
                  {cert.date && (
                    <div className="mt-auto pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Issued {cert.date}</span>
                      <span className="text-[10px] text-accent/70 font-mono flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-accent/70" />
                        <span>Verified</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>

      {/* Lightbox Modal for Certificates with Full Details & ID */}
      {selectedCert && (
        <ImageLightbox
          isOpen={Boolean(selectedCert)}
          onClose={handleClose}
          imageSrc={selectedCert.image}
          imageAlt={`${selectedCert.name} Certificate`}
          title={selectedCert.name}
          issuer={selectedCert.issuer}
          date={selectedCert.date}
          credentialId={selectedCert.credentialId}
        />
      )}
    </div>
  );
}
