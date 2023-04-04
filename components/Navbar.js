import React, { useEffect } from "react";
import { useState } from "react";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-20 left-0 h-screen w-2/3 bg-black/95 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out `}
    >
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 text-neutral-300"
          onClick={() => {
            scrollToSection("about");
            setOpen(false);
          }}
        >
          About
        </a>
        <a
          className="text-xl font-medium my-4 text-neutral-300"
          onClick={() => {
            scrollToSection("projects");
            setOpen(false);
          }}
        >
          Projects
        </a>
        <a
          className="text-xl font-medium my-4 text-neutral-300"
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

export default function Navbar({ open, setOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 flex filter bg-gradient-to-b from-neutral-950 backdrop-blur-lg px-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-full flex items-center justify-start">
        <a
          className="text-3xl font-semibold text-white whitespace-nowrap md:cursor-pointer"
          onClick={() => {
            scrollTo(0, 0);
            setOpen(false);
          }}
        >
          Facundo Venturi
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0 hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex md:space-x-6">
          <a
            className="text-xl text-neutral-300 md:cursor-pointer"
            onClick={() => {
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            className="text-xl text-neutral-300 md:cursor-pointer"
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            className="text-xl text-neutral-300 md:cursor-pointer pr-4"
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

function scrollToSection(e) {
  var targetSection = document.getElementById(e);
  targetSection.scrollIntoView({ behavior: "smooth" });
}
