"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const [displayLoading, setDisplayLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    setTimeout(() => {
      setDisplayLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {displayLoading && (
        <div
          className={`fixed inset-0 z-[100] w-screen h-screen bg-black flex justify-center items-center transition-opacity duration-[500ms] ease-in-out
           ${
             loading
               ? "opacity-100 pointer-events-auto overflow-hidden"
               : "opacity-0 pointer-events-none"
           }
        }`}
        >
          <LoadingSpinner />
        </div>
      )}
      {children}
    </>
  );
}
