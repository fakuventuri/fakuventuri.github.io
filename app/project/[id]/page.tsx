import Footer from "@/components/Footer";
import ScrollArrows from "@/components/ScrollArrows";

import ProjectView from "@/components/projectView";

import projects from "@/data/projectsData";

export function generateStaticParams() {
  const paths = projects.map((project) => {
    return { id: project.id.toString() };
  });

  return paths;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === Number(params.id));

  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center w-full h-screen px-6"
    >
      <section
        id="projects"
        className="flex flex-col justify-start items-center w-full 
        min-h-[calc(100vh-5rem)] h-full pt-20 scroll-mt-0"
      >
        {project && <ProjectView project={project} />}
      </section>

      <ScrollArrows onlyUp />
      <Footer />
    </main>
  );
}
