import Footer from "@/components/Footer";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center w-full min-h-screen px-6"
    >
      <section
        id="projects"
        className="flex flex-col justify-start items-center w-full 
        min-h-[calc(100vh-5rem)] h-fit pt-20 scroll-mt-0"
      >
        <h1 className="w-fit tracking-[3px] decoration-0 text-[2em] font-[Arial] text-white mb-10 mt-5 uppercase">
          Projects
        </h1>
      </section>

      <Footer />
    </main>
  );
}
