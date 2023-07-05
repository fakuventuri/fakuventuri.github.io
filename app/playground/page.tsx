import Boids from "@/components/Boids";
import Footer from "@/components/Footer";

export default function PlayGround() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center w-full h-screen px-6"
    >
      <section
        id="playground"
        className="flex flex-col justify-start items-center w-full 
            min-h-[calc(100vh-5rem)] h-full pt-20 scroll-mt-0"
      >
        <div className="w-full h-full bg-neutral-800 rounded mb-1">
          <Boids />
        </div>
      </section>

      <Footer />
    </main>
  );
}
