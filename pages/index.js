import { useEffect, useState, useRef } from "react";

import Head from "next/head";

import { scrollToSection } from "@/utils/tools.js";

import Navbar from "@/components/Navbar";
import ScrollArrows from "@/components/ScrollArrows";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

const sections = ["main", "skills", "projects", "contact"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [topArrowVisible, setTopArrowVisible] = useState(false);

  const [currentSection, setCurrentSection] = useState(0);

  const scrollTimeout = useRef();
  const scrolling = useRef(false);
  const noScroll = useRef(false);
  //const previousClientY = useRef(0);

  const handleWheel = (e) => {
    e.preventDefault();

    //clearTimeout(scrollTimeout.current);

    if (noScroll.current) {
      return;
    }

    if (scrolling.current) {
      scrollTimeout.current = setTimeout(() => {
        scrolling.current = false;
        noScroll.current = false;
      }, 400);
      noScroll.current = true;
    }

    if (scrolling.current) {
      return;
    }

    if (e.deltaY > 0) {
      // scroll down
      scrollToParam("next");
    } else {
      // scroll up
      scrollToParam("prev");
    }
  };

  // const handleTouchMove = (e) => {
  //   // e.preventDefault();
  // };

  const handleScrollOnlyMobile = (e) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 200) {
      isArrowVisible && // to limit setting state only the first time
        setIsArrowVisible(false);
    } else {
      setIsArrowVisible(true);
    }

    if (winScroll > 500) {
      setTopArrowVisible(true);
    } else {
      setTopArrowVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousewheel", handleWheel, { passive: false });
    // window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScrollOnlyMobile);
    return () => {
      window.removeEventListener("mousewheel", handleWheel);
      // window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScrollOnlyMobile);
    };
  });

  return (
    <>
      <Head>
        <title>Portfolio Facundo Venturi</title>
        <meta name="description" content="Portfolio Facundo Venturi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar open={open} setOpen={setOpen} scrollToParam={scrollToParam} />
      <main
        id="main"
        className="
        flex flex-col items-center justify-center
        w-full min-h-screen
        py-20 px-6
      "
      >
        <section
          id="hero"
          className="min-h-[calc(100vh-80px)] w-screen scroll-mt-0 text-center"
        >
          <Hero />
        </section>

        <section
          id="skills"
          className="min-h-[calc(100vh-80px)] w-screen scroll-mt-20 text-center mb-10"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="h-[calc(100vh-80px)] scroll-mt-20 text-center"
        >
          <h1 className="text-white text-3xl font-bold">Projects</h1>
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20 text-center">
          <h1 className="text-white text-3xl font-bold">Contact</h1>
        </section>

        <ScrollArrows
          isArrowVisible={isArrowVisible}
          topArrowVisible={topArrowVisible}
          setOpen={setOpen}
          scrollToParam={scrollToParam}
        />
      </main>
    </>
  );

  function scrollToParam(target) {
    switch (target) {
      case "next":
        //scroll down
        if (currentSection < sections.length - 1) {
          scrolling.current = true;
          setCurrentSection(currentSection + 1);
          scrollToSection(sections[currentSection + 1]);
        }
        break;
      case "prev":
        //scroll up
        if (currentSection > 0) {
          scrolling.current = true;
          setCurrentSection(currentSection - 1);
          scrollToSection(sections[currentSection - 1]);
        }
        break;
      case "top":
        if (noScroll.current) {
          break;
        }
        scrolling.current = true;
        setCurrentSection(0);
        scrollToSection(sections[0]);

        if (scrolling.current) {
          scrollTimeout.current = setTimeout(() => {
            scrolling.current = false;
            noScroll.current = false;
          }, 800);
          noScroll.current = true;
        }

        break;
      default:
        if (noScroll.current) {
          break;
        }
        scrolling.current = true;
        setCurrentSection(sections.indexOf(target));
        scrollToSection(target);

        if (scrolling.current) {
          scrollTimeout.current = setTimeout(() => {
            scrolling.current = false;
            noScroll.current = false;
          }, 800);
          noScroll.current = true;
        }

        break;
    }
  }
}
