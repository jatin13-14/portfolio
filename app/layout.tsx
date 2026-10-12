import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AskPortfolio } from "@/components/ai-assistant/AskPortfolio";
import { profile, links } from "@/lib/data/profile";
import { isResumeAvailable } from "@/lib/resume";

const siteTitle = "Jatin Chaurasia — Full-Stack Software Engineer";
const siteDescription =
  "Full-Stack Software Engineer specializing in React, Python, Django REST Framework, Next.js, AWS, and AI-assisted product development.";

export const metadata: Metadata = {
  metadataBase: new URL(links.siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Jatin Chaurasia",
    "Full-Stack Software Engineer",
    "React Developer",
    "Django REST Framework",
    "Next.js Developer",
    "AI-assisted development",
    "Python Backend Engineer",
    "Bangalore Software Engineer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: links.siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const resumeAvailable = isResumeAvailable();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.positioning.primary,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    url: links.siteUrl,
    sameAs: [links.github, links.linkedin].filter(Boolean),
    knowsAbout: ["React", "Python", "Django REST Framework", "Next.js", "AWS", "AI-Assisted Development"],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar resumeAvailable={resumeAvailable} />
          <main id="main-content">{children}</main>
          <Footer />
          <AskPortfolio />
        </ThemeProvider>
      </body>
    </html>
  );
}
