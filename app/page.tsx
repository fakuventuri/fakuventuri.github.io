import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 "
    >
      <section id="hero" className="w-screen h-screen scroll-mt-0">
        <Hero />
      </section>

      <section
        id="skills"
        className="flex flex-col justify-start items-center w-full h-fit pt-20 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] text-[2em] font-[Arial] text-white mb-10 mt-5 uppercase">
          Skills
        </h1>
        <Skills />
      </section>

      <section
        id="projects"
        className="flex flex-col justify-start items-center w-screen h-screen pt-20 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] decoration-0 text-[2em] font-[Arial] text-white mb-10 mt-5 uppercase">
          Projects
        </h1>
        {/* <Skills /> */}
      </section>
    </main>
  );
}
