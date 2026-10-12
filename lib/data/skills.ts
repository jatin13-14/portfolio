export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST API Design",
      "Authentication",
      "SSO",
      "Secure API Design",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Normalization", "Indexing", "Query Optimization", "Migrations"],
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    items: ["AWS EC2", "AWS S3", "NGINX", "Linux", "Cloud Deployment", "Infrastructure Management"],
  },
  {
    id: "async",
    label: "Async / Distributed",
    items: ["Celery", "Redis", "Task Queues", "Event-Driven Processing", "Real-Time Synchronization"],
  },
  {
    id: "devops",
    label: "DevOps",
    items: ["Git", "GitHub Actions", "CI/CD", "Docker"],
  },
  {
    id: "testing",
    label: "Testing",
    items: ["TDD", "Unit Testing", "Postman", "Manual QA", "Automated Testing"],
  },
  {
    id: "ai",
    label: "AI-Assisted Development",
    items: ["GitHub Copilot", "Claude AI", "ChatGPT", "Cursor", "LLM APIs", "Prompt Engineering", "AI-Powered Automation"],
  },
];
