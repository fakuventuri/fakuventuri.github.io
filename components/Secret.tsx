"use client";

import { useState, useEffect } from "react";

export default function Secret({ children }: { children: React.ReactNode }) {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      window.location.href = "/playground";
      setClickCount(0);
    }
  }, [clickCount]);

  return <div onClick={() => setClickCount(clickCount + 1)}>{children}</div>;
}
