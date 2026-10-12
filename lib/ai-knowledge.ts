// ---------------------------------------------------------------------------
// "Ask my portfolio" — a local, static knowledge base. No API key, no
// network calls, nothing exposed to the client beyond this file. Matching is
// simple keyword scoring, which is enough for a fixed set of portfolio
// questions and keeps this feature honest about what it is: a smart FAQ, not
// a real LLM.
//
// To wire this up to a real LLM later, add a server route (e.g.
// app/api/ask/route.ts) that keeps the API key server-side only, and swap
// the call inside AskPortfolio.tsx — see the comment there.
// ---------------------------------------------------------------------------

import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { experience } from "@/lib/data/experience";
import { skillCategories } from "@/lib/data/skills";
import { aiTools, aiUseCases } from "@/lib/data/misc";

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

const projectEntries: KnowledgeEntry[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  keywords: [project.title.toLowerCase(), ...project.slug.split("-"), "project", "built"],
  answer: `${project.title} — ${project.subtitle}. ${project.solution}`,
}));

const experienceEntries: KnowledgeEntry[] = experience.map((entry) => ({
  id: `experience-${entry.id}`,
  keywords: [entry.org.toLowerCase(), entry.role.toLowerCase(), "experience", "worked"],
  answer: `${entry.role} at ${entry.org} (${entry.period}). ${entry.summary}`,
}));

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "specialize",
    keywords: ["specialize", "specialise", "focus", "expert", "good at", "stack"],
    answer: `${profile.name} specializes in ${profile.specialization}. The core positioning: ${profile.positioning.primary}`,
  },
  {
    id: "who",
    keywords: ["who is jatin", "who are you", "about jatin", "introduce"],
    answer: profile.about.paragraphs.join(" "),
  },
  {
    id: "ai-usage",
    keywords: ["ai", "how does jatin use ai", "ai-assisted", "copilot", "cursor", "chatgpt", "claude"],
    answer: `AI is used as an acceleration layer across ${aiUseCases.join(", ").toLowerCase()}, using tools like ${aiTools.join(", ")}. Engineering judgment — architecture, validation, and final code quality — stays human-owned.`,
  },
  {
    id: "backend-tech",
    keywords: ["backend", "server", "django", "python api"],
    answer: `Backend skills include: ${skillCategories.find((c) => c.id === "backend")?.items.join(", ")}.`,
  },
  {
    id: "frontend-tech",
    keywords: ["frontend", "react", "next.js", "ui"],
    answer: `Frontend skills include: ${skillCategories.find((c) => c.id === "frontend")?.items.join(", ")}.`,
  },
  {
    id: "products",
    keywords: ["products", "what has jatin built", "portfolio projects", "work"],
    answer: `Products built include: ${projects.map((p) => p.title).join(", ")}.`,
  },
  {
    id: "location",
    keywords: ["location", "based", "where", "bangalore"],
    answer: `${profile.name} is based in ${profile.location}.`,
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "hire"],
    answer: `You can reach out at ${profile.email}, or use the contact section at the bottom of this page.`,
  },
  ...projectEntries,
  ...experienceEntries,
];

export const suggestedQuestions = [
  "What does Jatin specialize in?",
  "Tell me about HealthBook.",
  "What backend technologies does Jatin use?",
  "How does Jatin use AI?",
  "What was his experience at Fastest Healtech?",
  "What products has he built?",
];

export function answerQuestion(question: string): string {
  const normalized = question.toLowerCase();
  if (!normalized.trim()) {
    return "Ask me about Jatin's projects, experience, stack, or how he uses AI in his workflow.";
  }

  let best: { entry: KnowledgeEntry; score: number } | null = null;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword)) {
        score += keyword.split(" ").length; // longer/more-specific matches score higher
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  if (best) return best.entry.answer;

  return `I don't have a direct answer for that yet — try asking about a specific project (${projects
    .slice(0, 3)
    .map((p) => p.title)
    .join(", ")}), the tech stack, or Jatin's experience. You can also email ${profile.email} directly.`;
}
