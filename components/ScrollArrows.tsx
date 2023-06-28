"use client";

import { useState, useEffect } from "react";

function scrollToSection(section: string) {
  var targetSection = document.getElementById(section);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ScrollArrows({ onlyUp = false }) {
  const [activeBackToTopButton, setActiveBackToTopButton] = useState(false);
  const [scrollTrigger, setScrollTrigger] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 275) {
      setScrollTrigger(true);
      setActiveBackToTopButton(true);
    } else {
      setScrollTrigger(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!onlyUp && (
        <div
          className={"fixed justify-center bottom-4 right-1/2 left-1/2 group"}
        >
          <div
            className={`bg-neutral-950 hover:bg-neutral-900 duration-200 p-2
           w-8 h-8 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg 
          rounded-full flex items-center justify-center md:cursor-pointer ${
            !scrollTrigger ? "animate-bounce" : "animate-slide-down"
          }`}
            onClick={() => {
              scrollToSection("skills");
              window.location.hash = "skills";
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
      )}

      <div
        className={
          "fixed justify-center bottom-4 right-4 hover:scale-110 duration-200 group"
        }
      >
        <div
          className={`bg-neutral-950 group-hover:bg-neutral-900 duration-200 
          p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer transition-all ${
            scrollTrigger
              ? " animate-slide-up "
              : ` ${activeBackToTopButton ? "animate-slide-down" : " hidden"}`
          }`}
          onClick={() => {
            scrollToSection("main");
            window.location.hash = "";
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
    </>
  );
}
