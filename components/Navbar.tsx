"use client";

import { useState } from "react";

function scrollToSection(section: string) {
  var targetSection = document.getElementById(section);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center h-20 px-4 filter bg-gradient-to-t from-neutral-950 backdrop-blur-md">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-start w-full">
        <a
          className="text-3xl font-semibold text-white whitespace-nowrap md:cursor-pointer"
          onClick={() => {
            scrollToSection("main");
            setOpen(false);
          }}
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
            className={`text-xl text-neutral-300 cursor-pointer h-20 text-center leading-[4]
             transition ease-in-out delay-150 duration-500 ${
               //    currentSection === 1
               false
                 ? "font-semibold text-white border-b-4 border-violet-700"
                 : "border-transparent"
             }`}
            onClick={() => {
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            className={`text-xl text-neutral-300 cursor-pointer h-20 text-center leading-[4]
             transition ease-in-out delay-150 duration-500 ${
               //    currentSection === 2
               false
                 ? "font-semibold text-white border-b-4 border-violet-700"
                 : "border-transparent"
             }`}
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            className={`text-xl text-neutral-300 cursor-pointer h-20 text-center leading-[4]
             transition ease-in-out delay-150 duration-500 ${
               //    currentSection === 3
               false
                 ? "font-semibold text-white border-b-4 border-violet-700"
                 : "border-transparent"
             }`}
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
