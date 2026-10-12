// ---------------------------------------------------------------------------
// Education, certifications, publications, AI workflow, and principles.
// ---------------------------------------------------------------------------

export const education = {
  degree: "Bachelor of Technology — Computer Science",
  school: "Dr. Ram Manohar Lohiya Awadh University, Ayodhya",
};

export type Certification = {
  title: string;
  issuer: string;
  detail?: string;
};

export const certifications: Certification[] = [
  { title: "Scientific Computing with Python", issuer: "freeCodeCamp" },
  {
    title: "Master in AI Tools",
    issuer: "Coursiv",
    detail: "GitHub Copilot, Claude AI, Cursor, ChatGPT, Midjourney",
  },
  { title: "Claude 101", issuer: "Anthropic" },
];

export type Publication = {
  title: string;
  venue: string;
  url?: string; // only set once a verified URL is provided — never invented
};

export const publications: Publication[] = [
  {
    title: "Smart Health Consultation and Record Management",
    venue: "IJSRP",
  },
];

export const aiWorkflowSteps = [
  "Understand",
  "Design",
  "Prototype with AI",
  "Implement",
  "Review",
  "Test",
  "Refactor",
  "Deploy",
];

export const aiTools = ["Claude", "ChatGPT", "Cursor", "GitHub Copilot"];

export const aiUseCases = [
  "Boilerplate",
  "Refactoring",
  "Debugging",
  "Test generation",
  "API scaffolding",
  "Documentation",
  "Exploring implementation approaches",
  "Automation workflows",
];

export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  { title: "Simple architecture", description: "Avoid unnecessary complexity." },
  { title: "Reliable data", description: "Good schemas, indexes, migrations, validation." },
  { title: "Production thinking", description: "Deployment, observability, testing, failure handling." },
  { title: "Automation", description: "Remove repetitive manual work wherever software can reliably do it." },
  { title: "AI-assisted velocity", description: "Use AI to move faster while reviewing and validating the output." },
  { title: "Product ownership", description: "Understand why something needs to exist, not just how to implement it." },
];

export const healthcareCaseStudy = {
  title: "Healthcare Engineering — Records, Pipelines & Infrastructure",
  subtitle:
    "A closer look at the backend systems, data pipelines, and infrastructure behind healthcare products I've built and operated.",
  context:
    "Healthcare workflows involve multiple roles, systems, reports, and operational processes — lab systems, sample tracking, reporting, and patient-facing records all need to stay in sync.",
  integrations: ["Crelio", "Sufalam", "Google Maps", "Razorpay", "MSG91"],
  architectureFlow: ["React", "Django REST Framework", "PostgreSQL"],
  architectureSupport: ["Celery", "Redis", "AWS EC2", "AWS S3", "NGINX", "External LIMS APIs"],
};

export const homepageStory = [
  { step: "01", label: "Who am I?", value: "Full-Stack Software Engineer" },
  { step: "02", label: "What do I build?", value: "Products and backend systems" },
  { step: "03", label: "What problems do I solve?", value: "Complex / manual workflows" },
  { step: "04", label: "How do I build?", value: "React + Python + Django + PostgreSQL + AWS + AI" },
  {
    step: "05",
    label: "What have I built?",
    value: "HealthBook, Audit Platform, YouTube Automation, Billing, Salary Management, Jobs Zone, Sports Platform",
  },
  { step: "06", label: "How do I work?", value: "AI-assisted + engineering judgment + testing + deployment" },
  { step: "07", label: "Let's build something", value: "Contact" },
];
