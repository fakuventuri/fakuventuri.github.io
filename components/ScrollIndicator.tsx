"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="fixed top-0 left-0 w-full h-3 bg-none bg-opacity-50 z-10">
      <div
        className="h-full bg-neutral-600 bg-opacity-75 w-0 animate-scroll-indicator"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
