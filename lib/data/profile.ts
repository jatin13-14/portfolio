// ---------------------------------------------------------------------------
// Core profile data. Edit this file to update contact details, positioning
// copy, and social/resume links. Links pull from environment variables so
// nothing here is ever a fabricated URL — see .env.example.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jatin Chaurasia",
  logoMark: "JATIN.",
  title: "Full-Stack Software Engineer",
  specialization: "React • Python • Django REST Framework • Next.js • AWS • AI-Assisted Development",
  location: "Bangalore, India",
  yearsExperience: "2+ years",
  email: "jatinkumarchaurasia97@gmail.com",
  phone: "+91-7275789794",
  status: "Open to building interesting products",
  positioning: {
    primary:
      "I build products end-to-end, from idea and architecture to deployment, using modern full-stack engineering and AI-assisted development.",
    secondary: "I turn complex and manual workflows into scalable software products.",
  },
  hero: {
    headline: "I build products that turn complex workflows into simple software.",
    subline:
      "Full-Stack Software Engineer building production-ready products with Python, Django, React, Next.js, AWS, and AI-assisted development.",
    stack: ["React", "Django", "PostgreSQL", "AWS", "AI"],
  },
  statement: {
    lead: "I enjoy taking messy real-world processes and turning them into reliable, scalable products.",
    body:
      "My work spans backend systems, frontend applications, data pipelines, automation, cloud infrastructure, and AI-assisted product development.",
  },
  about: {
    paragraphs: [
      "I'm Jatin, a Full-Stack Software Engineer based in Bangalore. I work across Python, Django, React, Next.js, PostgreSQL, AWS, and AI-assisted development.",
      "I've worked on healthcare systems, data pipelines, workflow automation, event platforms, billing systems, and AI-powered products.",
      "What I enjoy most is taking a complicated process and turning it into a product that people can actually use.",
    ],
  },
} as const;

// Links resolved from environment variables, with the configured defaults
// below as a fallback so the site works out of the box. Override either via
// NEXT_PUBLIC_GITHUB_URL / NEXT_PUBLIC_LINKEDIN_URL in .env.local if these
// ever change. Empty string = not configured (renders a disabled placeholder).
export const links = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/jatin13-14",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/chaurasiajatin/",
  resume: process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf",
  email: `mailto:${profile.email}`,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jatinchaurasia.dev",
} as const;

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Writing / Lab", href: "/#lab" },
  { label: "Contact", href: "/#contact" },
] as const;
