// ---------------------------------------------------------------------------
// Professional experience timeline, newest first.
// ---------------------------------------------------------------------------

export type ArchitectureNote = {
  flow: string[];
  note?: string;
};

export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  location: string;
  period: string;
  focus: string;
  summary: string;
  highlights: string[];
  callout?: string;
  architecture?: ArchitectureNote[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    role: "Freelance / Self-Directed",
    org: "Self-Employed",
    location: "Bangalore, India",
    period: "Jul 2025 — Present",
    focus: "AI-assisted product development and independent product engineering.",
    summary:
      "Independently designed, built, and shipped end-to-end products using AI-assisted development tools including Cursor, Claude AI, and ChatGPT — spanning HealthBook, the YouTube Automation Pipeline, and other experimental software products.",
    highlights: [
      "Owned requirements, product thinking, and architecture independently",
      "Designed databases and built backend + frontend for each product",
      "Integrated AI directly into the development workflow, not just the product",
      "Handled testing and deployment end-to-end",
    ],
    callout:
      "Owned the entire development lifecycle independently, using AI as a pair-programming and acceleration layer while retaining human ownership of architecture, validation, testing, and final code quality.",
  },
  {
    id: "fastest-healtech",
    role: "Software Engineer",
    org: "Fastest Healtech Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Oct 2024 — Jul 2025",
    focus: "Backend systems, healthcare data pipelines, integrations, cloud infrastructure.",
    summary:
      "Built the backend systems and data pipelines behind a healthcare operations platform — from lab-data ingestion to infrastructure and real-time tracking.",
    highlights: [
      "Designed Python backend services and ETL pipelines for lab data ingestion and synchronization with Crelio and Sufalam LIMS",
      "Designed PostgreSQL schemas using normalization, indexing, and query optimization",
      "Built GitHub Actions CI/CD workflows",
      "Managed AWS EC2 and S3 infrastructure",
      "Implemented SSO authentication and secure REST APIs",
      "Built Celery + Redis event-driven processing",
      "Supported real-time Google Maps tracking",
      "Built barcode-based sample tracking workflows",
      "Delivered 20+ automated Excel data export/reporting pipelines",
      "Used AI-assisted development with GitHub Copilot and Claude AI",
    ],
    architecture: [
      { flow: ["LIMS", "ETL", "Django / Python", "PostgreSQL", "APIs", "Frontend"] },
      { flow: ["Celery", "Redis", "Async Processing"], note: "Event-driven processing layer" },
    ],
  },
  {
    id: "samby",
    role: "Software Development Engineer I",
    org: "Samby Innovations",
    location: "Bangalore, India",
    period: "Feb 2024 — Oct 2024",
    focus: "Backend architecture from scratch, database design, and delivery discipline.",
    summary:
      "Architected a Python/Django REST backend from scratch and paired disciplined engineering practice — TDD, automated quality checks, CI/CD — with measurable improvement in solution effectiveness.",
    highlights: [
      "Architected a Python/Django REST backend from scratch",
      "Designed MySQL relational schema, with query and index optimization",
      "Achieved a documented 70% improvement in solution effectiveness",
      "Applied Test-Driven Development and built automated quality checks",
      "Deployed on AWS EC2 and configured NGINX",
      "Maintained CI/CD pipelines",
      "Used GitHub Copilot and Cursor for AI-assisted development",
      "Designed SQL queries and database migrations",
      "Collaborated with product and analytics stakeholders",
    ],
  },
  {
    id: "meeraq",
    role: "Software Development Engineer I",
    org: "Meeraq",
    location: "Bangalore, India",
    period: "Nov 2022 — Feb 2024",
    focus: "Unified backend data ecosystem, integrations at scale, product launches.",
    summary:
      "Built a unified backend data ecosystem powering live coaching/event products — integrating calendars, messaging, and video infrastructure while scaling data pipelines for concurrent live events.",
    highlights: [
      "Built a unified backend data ecosystem",
      "Designed Python data pipelines supporting 800+ concurrent users during live events",
      "Integrated Google Calendar and Outlook Calendar",
      "Integrated WhatsApp / MSG91 for messaging",
      "Integrated 100ms video SDK REST APIs",
      "Launched CAAS and COD product lines",
      "Contributed to a documented 30% revenue growth",
      "Internalized backend data pipelines to reduce third-party dependency",
      "Improved data governance",
    ],
  },
];
