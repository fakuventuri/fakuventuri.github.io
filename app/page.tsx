import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/skillsSection/Skills";
import Projects from "@/components/sections/projectsSection/Projects";

import ScrollArrows from "@/components/ScrollArrows";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center w-full min-h-screen px-6"
    >
      <section id="hero" className="w-screen h-screen scroll-mt-0">
        <Hero />
      </section>

      <section
        id="skills"
        className="flex flex-col justify-start items-center w-full h-fit pt-16 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] text-[2em] font-[Arial] text-white mb-6 mt-6 uppercase">
          Skills
        </h1>
        <Skills />
      </section>

      <section
        id="projects"
        className="flex flex-col justify-start items-center w-full 
        min-h-[calc(100vh-4rem)] h-fit pt-16 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] decoration-0 text-[2em] font-[Arial] text-white mb-6 mt-6 uppercase">
          Projects
        </h1>
        <Projects />
      </section>

      {/* <section
        id="contact"
        className="flex flex-col justify-start items-center w-full h-screen pt-16 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] decoration-0 text-[2em] font-[Arial] text-white mb-6 mt-6 uppercase">
          Contact
        </h1>
      </section> */}

      <ScrollArrows />
      <Footer />
    </main>
  );
}
