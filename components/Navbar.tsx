"use client";

import { useEffect, useState } from "react";

function scrollToSection(section: string) {
  var targetSection = document.getElementById(section);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

function findCurrentSection(sections: NodeListOf<HTMLElement>) {
  const scrollPosition = window.scrollY + 100;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section;
    }
  });

  return currentSection;
}

function MobileNav({ open, setOpen }: { open: boolean; setOpen: Function }) {
  return (
    <div
      className={`fixed top-20 left-0 h-screen w-full overflow-hidden bg-black/95 sm:hidden transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex flex-col ml-4">
        <a
          className="my-4 text-xl font-medium text-neutral-300"
          onClick={() => {
            scrollToSection("skills");
            setOpen(false);
          }}
        >
          Skills
        </a>
        <a
          className="my-4 text-xl font-medium text-neutral-300"
          onClick={() => {
            scrollToSection("projects");
            setOpen(false);
          }}
        >
          Projects
        </a>
        <a
          className="my-4 text-xl font-medium text-neutral-300"
          onClick={() => {
            scrollToSection("contact");
            setOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMainLink, setActiveMainLink] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleScroll = () => {
    const Sections = document.querySelectorAll("section");

    const currentSection = findCurrentSection(
      Sections as NodeListOf<HTMLElement>
    );

    const navLinks = document.querySelectorAll("#navLink");

    navLinks.forEach((navLink) => {
      if (navLink.innerHTML.toLowerCase() === currentSection.id) {
        navLink.classList.add("font-semibold");
        navLink.classList.add("text-white");
        navLink.classList.add("border-b-4");
        navLink.classList.add("border-violet-700");
        navLink.classList.remove("border-transparent");
      } else {
        navLink.classList.remove("font-semibold");
        navLink.classList.remove("text-white");
        navLink.classList.remove("border-b-4");
        navLink.classList.remove("border-violet-700");
        navLink.classList.add("border-transparent");
      }
    });

    // If the current section is the hero section, do something fancy with the #mainLink
    const mainLink = document.querySelector("#mainLink");
    if (currentSection.id === "hero") {
      mainLink?.classList.remove("text-white");
      mainLink?.classList.remove("animate-slide-up");
      mainLink?.classList.add("animate-slide-down");
      // mainLink?.classList.add("font-semibold");
    } else {
      setActiveMainLink(true);
      // mainLink?.classList.remove("font-semibold");
      mainLink?.classList.remove("animate-slide-down");
      mainLink?.classList.add("animate-slide-up");
      mainLink?.classList.add("text-white");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center h-20 px-4 filter bg-gradient-to-t from-neutral-950 backdrop-blur-md">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-start w-full">
        <a
          className={`text-3xl font-semibold text-white whitespace-nowrap md:cursor-pointer ${
            activeMainLink ? "animate-slide-down" : "hidden"
          }`}
          onClick={() => {
            scrollToSection("main");
            setOpen(false);
          }}
          id="mainLink"
        >
          Facundo Venturi
        </a>
      </div>
      <div className="flex items-center justify-end w-9/12">
        <div className="flex flex-row items-center justify-between gap-5 ">
          <div
            className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
        </div>

        <div className="hidden pr-4 md:flex md:space-x-6">
          <a
            className="h-20 text-xl text-center cursor-pointer text-neutral-300 
            leading-[4]"
            onClick={() => {
              scrollToSection("skills");
            }}
            id="navLink"
          >
            Skills
          </a>
          <a
            className="h-20 text-xl text-center cursor-pointer text-neutral-300 leading-[4]"
            onClick={() => {
              scrollToSection("projects");
            }}
            id="navLink"
          >
            Projects
          </a>
          <a
            className="h-20 text-xl text-center cursor-pointer text-neutral-300 leading-[4]"
            onClick={() => {
              scrollToSection("contact");
            }}
            id="navLink"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
