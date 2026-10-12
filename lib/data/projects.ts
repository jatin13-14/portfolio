// ---------------------------------------------------------------------------
// Project + case study content. This is the single source of truth for the
// "Selected Work" grid and every /work/[slug] case study page.
//
// To add a project link, fill in `links.github` / `links.demo`. Leave a
// field empty/undefined to hide that button — links are never invented.
// ---------------------------------------------------------------------------

export type ArchitectureStep = {
  label: string;
  detail?: string;
};

export type ArchitectureBranch = {
  label: string;
  detail?: string;
};

export type ProjectArchitecture = {
  flow: ArchitectureStep[];
  branches?: ArchitectureBranch[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  weight: "primary" | "secondary";
  tech: string[];
  motif: string; // "manual workflow -> software product" framing
  problem: string;
  context?: string;
  solution: string;
  whatIBuilt: string[];
  myRole: string[];
  challenge: string;
  keyFeatures: string[];
  technicalDecisions?: string[];
  architecture: ProjectArchitecture;
  links: {
    github?: string;
    demo?: string;
  };
  caveats?: string[];
};

export const projects: Project[] = [
  {
    slug: "healthbook",
    title: "HealthBook",
    subtitle: "AI-powered personal health record & healthcare platform",
    tagline: "Manual healthcare workflows → a single digital platform",
    weight: "primary",
    tech: ["React", "TypeScript", "Django REST Framework", "Python", "PostgreSQL", "AI", "ETL Pipelines"],
    motif: "Manual healthcare workflows → digital platform",
    problem: "Healthcare information is fragmented across reports, documents, and systems.",
    context:
      "A full electronic health record platform designed to organize health information, ingest medical reports, generate AI-powered health summaries, provide analytics, and automate health-report workflows.",
    solution:
      "I designed and built a platform that centralizes health records, ingests unstructured medical reports through ETL pipelines, and layers AI-generated summaries and analytics on top of a structured PostgreSQL data model.",
    whatIBuilt: [
      "Health record management",
      "Medical report ingestion",
      "Python ETL pipelines",
      "AI-powered health summaries",
      "Analytics dashboards",
      "Automated report generation",
      "REST APIs",
      "PostgreSQL data model",
      "React frontend",
    ],
    myRole: [
      "Requirements",
      "Architecture",
      "Database design",
      "Backend",
      "Frontend",
      "AI integrations",
      "Deployment",
      "Testing",
    ],
    challenge:
      "Designing a system that could combine structured and unstructured health data while keeping the architecture extensible.",
    keyFeatures: [
      "Centralized health record storage across reports and visits",
      "Ingestion pipeline that normalizes medical report data",
      "AI-generated summaries layered on structured health data",
      "Analytics dashboards for tracking health trends over time",
      "Automated report generation workflows",
    ],
    technicalDecisions: [
      "Separated ingestion (ETL) from presentation so new report formats can be added without touching the API layer",
      "Modeled health data relationally in PostgreSQL to keep AI summaries traceable back to source records",
      "Kept AI summarization as an augmentation layer on top of structured data, not a replacement for it",
    ],
    architecture: {
      flow: [
        { label: "User", detail: "Patients and record owners" },
        { label: "React / Next.js", detail: "Frontend application" },
        { label: "Django REST API", detail: "Business logic & auth" },
        { label: "PostgreSQL", detail: "Structured health data" },
      ],
      branches: [
        { label: "AI Services", detail: "Health summaries, layered on the backend" },
        { label: "ETL Pipelines", detail: "Report ingestion, feeding the backend" },
        { label: "AWS Infrastructure", detail: "Hosting for the application" },
      ],
    },
    links: {},
    caveats: ["Not a clinically validated system — AI summaries are not a substitute for medical advice."],
  },
  {
    slug: "audit-clearance-platform",
    title: "Audit Clearance Platform",
    subtitle: "Turning large-scale manual workflows into a platform",
    tagline: "Manual audit/clearance workflows → structured platform",
    weight: "primary",
    tech: ["Python", "Django REST Framework", "PostgreSQL", "React"],
    motif: "Manual audit/clearance workflows → structured platform",
    problem:
      "Large amounts of manual operational work required coordination, tracking, verification, and status management.",
    context:
      "A platform designed to transform large sets of manual audit/clearance activities into structured, trackable, software-driven workflows.",
    solution:
      "I designed and built a platform that converted these manual processes into structured digital workflows. The goal was to replace fragmented manual work with a centralized, trackable workflow.",
    whatIBuilt: [
      "Workflow management",
      "Structured data capture",
      "Status tracking",
      "Role-based operations",
      "Validation rules",
      "Auditability",
      "Dashboards",
      "Automated processing",
      "Scalable backend APIs",
    ],
    myRole: [
      "Product understanding",
      "Architecture",
      "Backend APIs",
      "Database design",
      "Frontend workflows",
      "Automation",
      "Testing",
    ],
    challenge:
      "Modeling a wide variety of manual clearance steps as a single, coherent workflow engine — without hard-coding every case-specific exception into the core system.",
    keyFeatures: [
      "Structured intake replacing paper- or spreadsheet-based tracking",
      "Role-based operations so each participant sees only their step",
      "Status tracking across every stage of a clearance",
      "Validation rules that enforce completeness before progression",
      "Dashboards giving an at-a-glance view of what's outstanding",
      "Auditability — every status change is traceable",
    ],
    technicalDecisions: [
      "Modeled clearance stages as data, not code, so new workflow steps don't require redeployment",
      "Built role-based access at the API layer so the frontend never has to guess what a user can act on",
    ],
    architecture: {
      flow: [
        { label: "Manual Process", detail: "Fragmented, spreadsheet & paper-driven" },
        { label: "Structured Workflow", detail: "Digitized stages & ownership" },
        { label: "Automated Processing", detail: "Validation & status transitions" },
        { label: "Trackable Output", detail: "Auditable, reportable outcome" },
      ],
    },
    links: {},
  },
  {
    slug: "youtube-automation-pipeline",
    title: "YouTube Automation Pipeline",
    subtitle: "End-to-end AI content generation and publishing",
    tagline: "Manual content production → automated pipeline",
    weight: "primary",
    tech: ["Python", "LLM APIs", "Text-to-Speech", "YouTube Data API", "Automation"],
    motif: "Manual content production → automated pipeline",
    problem: "Producing content end-to-end manually — research, scripting, voicing, editing, publishing — doesn't scale.",
    context: "An automated pipeline that takes a content topic and handles the content production workflow end-to-end.",
    solution:
      "I built a pipeline that coordinates multiple asynchronous services — an LLM for research and scripting, text-to-speech for voiceover, video assembly, and the YouTube Data API for publishing — into a single automated flow from topic to published video.",
    whatIBuilt: [
      "Script generation",
      "LLM integration",
      "Text-to-speech voiceover",
      "Video assembly",
      "Automated publishing",
      "API integrations",
      "Workflow automation",
    ],
    myRole: ["Architecture", "Pipeline orchestration", "API integrations", "Automation", "Testing"],
    challenge: "Coordinating multiple asynchronous services — LLM generation, TTS, and video rendering — into one reliable pipeline.",
    keyFeatures: [
      "Topic-to-script generation via LLM APIs",
      "Automated text-to-speech voiceover generation",
      "Programmatic video assembly",
      "Automated upload and publishing via the YouTube Data API",
      "Pipeline coordination across independent, asynchronous steps",
    ],
    architecture: {
      flow: [
        { label: "Topic" },
        { label: "Research / Data" },
        { label: "Script", detail: "LLM-generated" },
        { label: "AI Processing" },
        { label: "Voiceover", detail: "Text-to-speech" },
        { label: "Video Assembly" },
        { label: "Upload", detail: "YouTube Data API" },
      ],
    },
    links: {},
    caveats: ["Personal/experimental project — no claims made about views, revenue, or production scale."],
  },
  {
    slug: "billing-system",
    title: "Billing System",
    subtitle: "Production-style billing backend",
    tagline: "Manual billing workflows → software system",
    weight: "secondary",
    tech: ["Python", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Docker"],
    motif: "Manual billing workflows → software system",
    problem: "Billing workflows spanning customers, products, invoices, and payment status are hard to track manually.",
    solution:
      "A complete billing/business management system covering customer management, products and services, invoices, billing records, and payment-status tracking, backed by an API-driven architecture.",
    whatIBuilt: [
      "Customer management",
      "Products & services catalog",
      "Invoices",
      "Billing records",
      "Payment/status tracking",
      "API-based architecture",
      "Background processing",
      "Database-driven workflows",
    ],
    myRole: ["Architecture", "Backend APIs", "Database design", "Background processing", "Containerization"],
    challenge: "Keeping invoice and payment-status state consistent while background jobs process billing events asynchronously.",
    keyFeatures: [
      "Customer & product/service management",
      "Invoice generation and billing records",
      "Payment/status tracking",
      "Background task processing for billing events",
      "Dockerized local infrastructure",
    ],
    architecture: {
      flow: [
        { label: "React / API Client" },
        { label: "Django REST API" },
        { label: "PostgreSQL" },
      ],
      branches: [
        { label: "Celery + Redis", detail: "Background tasks" },
        { label: "Docker", detail: "Local infrastructure" },
      ],
    },
    links: {},
    caveats: ["No specific transaction volumes are claimed."],
  },
  {
    slug: "salary-management-system",
    title: "Salary Management System",
    subtitle: "Payroll and employee compensation workflow",
    tagline: "Manual salary workflows → structured management system",
    weight: "secondary",
    tech: ["Python", "Django REST Framework", "PostgreSQL"],
    motif: "Manual salary workflows → structured management system",
    problem: "Salary-related workflows — records, compensation structures, calculations, payslips — are error-prone when handled manually.",
    solution:
      "A software system designed to manage salary-related workflows, covering employee records, salary structures, compensation components, payroll calculations, deductions, payslip generation, and salary history.",
    whatIBuilt: [
      "Employee records",
      "Salary structures",
      "Compensation components",
      "Payroll calculations",
      "Deductions",
      "Payslip generation",
      "Salary history",
      "Reporting",
    ],
    myRole: ["Backend design", "Data modeling", "Workflow logic", "Reporting"],
    challenge: "Modeling salary structures and compensation components flexibly enough to support recurring payroll calculations without hard-coding rules.",
    keyFeatures: [
      "Employee and compensation records",
      "Configurable salary structures",
      "Payroll calculation logic",
      "Deduction handling",
      "Payslip generation",
      "Salary history and reporting",
    ],
    architecture: {
      flow: [
        { label: "Employee & Salary Data" },
        { label: "Django REST API" },
        { label: "PostgreSQL" },
        { label: "Payslip / Reporting Output" },
      ],
    },
    links: {},
    caveats: [
      "Positioned primarily as a backend/data/workflow engineering project.",
      "No compliance certifications, tax integrations, employee counts, or financial metrics are claimed.",
    ],
  },
  {
    slug: "jobs-zone",
    title: "Jobs Zone",
    subtitle: "AI-enhanced job matching platform",
    tagline: "Manual job discovery → AI-assisted matching",
    weight: "secondary",
    tech: ["Next.js", "Django REST Framework", "Python", "LLMs", "PostgreSQL", "CI/CD"],
    motif: "Manual job discovery → AI-assisted matching",
    problem: "Matching candidates to relevant roles manually across scattered job sources is slow and imprecise.",
    solution:
      "An intelligent job-matching platform that uses LLM-driven data processing to help match candidates with relevant roles, backed by a REST API and automated CI/CD pipeline.",
    whatIBuilt: [
      "Job ingestion",
      "Candidate/job data processing",
      "LLM-assisted matching",
      "REST API",
      "Filtering",
      "Automated processing",
      "CI/CD",
    ],
    myRole: ["Backend architecture", "LLM integration", "API design", "CI/CD setup"],
    challenge: "Using LLM-driven processing for matching while keeping the pipeline fast, predictable, and testable.",
    keyFeatures: [
      "Job ingestion from multiple sources",
      "LLM-assisted candidate-to-job matching",
      "Filtering and ranking via the REST API",
      "Automated CI/CD pipeline",
    ],
    architecture: {
      flow: [
        { label: "Job Sources" },
        { label: "Data Processing" },
        { label: "LLM Matching" },
        { label: "API" },
        { label: "Web Application" },
      ],
    },
    links: {},
  },
  {
    slug: "corporate-sports-platform",
    title: "Corporate Sports Platform",
    subtitle: "Event data management at scale",
    tagline: "Manual event operations → backend platform",
    weight: "secondary",
    tech: ["Python", "Django REST Framework", "PostgreSQL"],
    motif: "Manual event coordination → backend platform",
    problem: "Corporate sports events involve registration, participant management, and reporting across many concurrent participants.",
    solution:
      "A backend platform for managing corporate sports events — registration, participant management, event data processing, reporting, and aggregation, backed by scalable APIs.",
    whatIBuilt: [
      "Event registration",
      "Participant management",
      "Event data processing",
      "Reporting",
      "Aggregation",
      "Backend APIs",
    ],
    myRole: ["Backend architecture", "Data pipeline design", "API design"],
    challenge: "Keeping data pipelines responsive under concurrent load during live events.",
    keyFeatures: [
      "Event registration and participant management",
      "Real-time-friendly data processing during live events",
      "Reporting and aggregation across events",
    ],
    architecture: {
      flow: [
        { label: "Registration & Event Data" },
        { label: "Django REST API" },
        { label: "PostgreSQL" },
        { label: "Reporting & Aggregation" },
      ],
    },
    links: {},
    caveats: ["Python data pipelines documented to handle 800+ concurrent users during live events."],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredOrder = projects; // display order == array order above
