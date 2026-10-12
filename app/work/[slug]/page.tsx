import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Jatin Chaurasia`,
      description: project.subtitle,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <CaseStudyLayout project={project} />;
}
