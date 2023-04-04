import { useEffect, useState } from "react";

import Head from "next/head";

import Navbar from "@/components/Navbar";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [topArrowVisible, setTopArrowVisible] = useState(false);
  const [forceHidden, setForceHidden] = useState(false);

  const hideArrowOnOpen = (hide) => {
    if (hide) {
      setForceHidden(hide);
      setIsArrowVisible(false);
    } else {
      setForceHidden(false);
      if (window.scrollY < 200) {
        setIsArrowVisible(true);
      }
    }
  };

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 200) {
      isArrowVisible && // to limit setting state only the first time
        setIsArrowVisible(false);
    } else {
      !forceHidden && setIsArrowVisible(true);
    }

    if (winScroll > 500) {
      setTopArrowVisible(true);
    } else {
      setTopArrowVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  useEffect(() => {
    hideArrowOnOpen(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <Head>
        <title>Portfolio Facundo Venturi</title>
        <meta name="description" content="Portfolio Facundo Venturi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar open={open} setOpen={setOpen} />
      <main
        id="main"
        className="
        flex flex-col items-center justify-center
        w-full min-h-screen
        py-20 px-6
      "
      >
        <section className="min-h-screen text-center">
          <h1 className="text-white text-3xl font-bold mt-5">Lorem ipsum</h1>
          <p className="text-white text-2xl font-bold mt-5">
            Ullamco dolore elit fugiat nisi reprehenderit sit ullamco amet
            laboris enim culpa. Velit laboris ullamco esse sunt commodo commodo
            proident. Anim ullamco commodo sunt cupidatat anim id nisi non
            laboris id. Enim aliqua deserunt velit elit. Amet irure qui in enim
            amet enim reprehenderit ad aliqua esse pariatur laboris est ea.
            Consectetur laboris sint eiusmod dolore do exercitation. Nulla
            ullamco ex irure enim irure.
          </p>

          <div
            className={"flex justify-center absolute bottom-5 right-0 left-0"}
          >
            <div
              className={`bg-neutral-950 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer ${
                isArrowVisible ? "animate-bounce" : "animate-fadeOut"
              }`}
              onClick={() => {
                scrollToSection("about");
              }}
            >
              <svg
                className="w-6 h-6 text-violet-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen scroll-mt-20">
          <h1 className="text-white text-3xl font-bold">About</h1>
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20">
          <h1 className="text-white text-3xl font-bold">Projects</h1>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20">
          <h1 className="text-white text-3xl font-bold">Contact</h1>
        </section>

        <div className={"fixed justify-center bottom-5 right-5"}>
          <div
            className={`animate-bounce bg-neutral-950 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer ${
              topArrowVisible ? "animate-fadeIn" : "invisible"
            }`}
            onClick={() => {
              scrollTo(0, 0);
              setOpen(false);
            }}
          >
            <svg
              className="w-6 h-6 text-violet-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M15.5 16.5L12 13L8.5 16.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M15.5 10.5L12 7L8.5 10.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

function scrollToSection(e) {
  var targetSection = document.getElementById(e);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
