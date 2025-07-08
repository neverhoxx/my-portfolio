import { notFound } from "next/navigation";
import { projectsList } from "@/data/projects";
import { AboutProjectPageClient } from "@/app/about-project-page-client";
import React from "react";

export async function generateStaticParams() {
    return projectsList.map((project) => ({
        slug: project.slug,
    }));
}

export default function AboutProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params)
    const project = projectsList.find((p) => p.slug === slug);

    if (!project) {
        notFound();
        return null;
    }

    return <AboutProjectPageClient project={project} />;
}
