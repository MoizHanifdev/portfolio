import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { PageTransition } from "@/components/ui/PageTransition";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Abdul Moiz Hanif — Business Development & Growth",
    template: "%s | Abdul Moiz Hanif",
  },
  description:
    "Business development professional with a software engineering background. Proven ability to build, ship, and communicate technology to any audience. Based in Lahore, Pakistan.",
  keywords: [
    "Abdul Moiz Hanif",
    "Business Development",
    "Tech Growth",
    "Software Engineering",
    "Client Communication",
    "Market Outreach",
    "Lead Generation",
    "Lahore Pakistan",
    "Next.js",
    "React",
    "Product Strategy",
  ],
  authors: [{ name: "Abdul Moiz Hanif", url: SITE_CONFIG.url }],
  creator: "Abdul Moiz Hanif",
  publisher: "Abdul Moiz Hanif",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Moiz Hanif — Business Development & Growth",
    description:
      "Business development professional with a software engineering background. Proven ability to build, ship, and communicate technology to any audience. Based in Lahore, Pakistan.",
    url: SITE_CONFIG.url,
    siteName: "Abdul Moiz Hanif Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Moiz Hanif — Business Development & Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Moiz Hanif — Business Development & Growth",
    description:
      "Business development professional with a software engineering background. Proven ability to build, ship, and communicate technology to any audience.",
    images: ["/og-image.jpg"],
    creator: "@MoizHanifdev",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Moiz Hanif",
  alternateName: "Moiz Hanif",
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/images/profile-portrait.jpg`,
  jobTitle: "Business Development & Growth",
  description:
    "Business development professional with a software engineering background. Proven ability to build, ship, and communicate technology to any audience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Superior University Lahore, Gold Campus",
  },
  knowsAbout: [
    "Business Development",
    "Client Communication",
    "Market Research",
    "Lead Generation",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Generative AI",
  ],
  sameAs: [
    "https://linkedin.com/in/abdulmoizhanif",
    "https://github.com/MoizHanifdev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent relative flex flex-col w-full overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Accessible Skip to Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-accent focus:text-accent-foreground focus:font-semibold focus:rounded-lg focus:shadow-accent-glow-sm focus:outline-none transition-all"
          >
            Skip to main content
          </a>

          {/* Global Scroll Progress Bar */}
          <ScrollProgress />

          <SmoothScroll>
            <AmbientBackground />
            <Header />
            <PageTransition className="relative z-10 flex-1 flex flex-col w-full">
              {children}
            </PageTransition>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
