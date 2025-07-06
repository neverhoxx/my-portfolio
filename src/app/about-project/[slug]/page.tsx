import { notFound } from "next/navigation";
import { projectsList } from "@/data/projects";
import { AboutProjectPageClient } from "@/app/about-project-page-client";

export async function generateStaticParams() {
    return projectsList.map((project) => ({ slug: project.slug }));
}

export default function AboutProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsList.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return <AboutProjectPageClient project={project} />;
}
