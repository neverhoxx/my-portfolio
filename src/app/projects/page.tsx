import { Container } from "@/components/shared/container";

import ProjectsHero from "@/components/shared/projects/hero";
import ProjectsListBlock from "@/components/shared/projects/projects";

export default function Projects() {
    return (
        <Container className="pt-40">
            <ProjectsHero />
            <ProjectsListBlock />
        </Container>
    );
}
