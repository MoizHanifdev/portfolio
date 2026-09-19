export interface Education {
  degree: string;
  institution: string;
  detail: string;
  note: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
}

export interface Language {
  name: string;
  proficiency: string;
  level: string;
}

export interface ResumeContent {
  title: string;
  caption: string;
  pdfUrl: string;
  thumbnail: string;
  downloadFilename: string;
}

export interface CredentialsContent {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  education: Education;
  certifications: Certification[];
  languages: Language[];
  resume: ResumeContent;
}

export const CREDENTIALS_CONTENT: CredentialsContent = {
  eyebrow: "03 // Academic & Credentials",
  title: "Education & Verified",
  highlight: "Credentials.",
  description:
    "Formal software engineering degree, specialized technical certifications, and multilingual communication capabilities.",
  education: {
    degree: "BS Software Engineering",
    institution: "Superior University Lahore, Gold Campus",
    detail: "CGPA 3.20/4.00 · 2022–2026",
    note: "Industry-integrated program combining academic study with a full year of market-facing experience.",
  },
  resume: {
    title: "Full Resume",
    caption: "One-page overview of experience, projects, and skills",
    pdfUrl: "/resume.pdf",
    thumbnail: "/images/resume-thumbnail.jpg",
    downloadFilename: "Abdul_Moiz_Hanif_Resume.pdf",
  },
  certifications: [
    {
      name: "Introduction to SQL",
      issuer: "SoloLearn",
      date: "May 2024",
      credentialId: "CC-Z6KV4OZN",
      image: "/images/certificates/sql-certificate.jpg",
    },
    {
      name: "CSS (Basic)",
      issuer: "HackerRank",
      date: "July 2025",
      credentialId: "41176C80EC73",
      image: "/images/certificates/css-certificate.jpg",
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      date: "July 2026",
      credentialId: "E3BA7DD30594",
      image: "/images/certificates/react-certificate.jpg",
    },
    {
      name: "Generative AI Mastermind",
      issuer: "Outskill",
      date: "2026",
      image: "/images/certificates/mastermind-ai-certificate.jpg",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Working Proficiency",
      level: "Professional",
    },
    {
      name: "Urdu",
      proficiency: "Native Speaker",
      level: "Native",
    },
  ],
};
