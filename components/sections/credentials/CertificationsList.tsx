"use client";

import React from "react";
import { Certification } from "@/content/credentials";
import { CertificatesShowcase } from "./CertificatesShowcase";

export interface CertificationsListProps {
  certifications: Certification[];
}

export function CertificationsList({ certifications }: CertificationsListProps) {
  return <CertificatesShowcase certifications={certifications} />;
}
