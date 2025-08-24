"use client";
import { useEffect, useState } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until *everything* is loaded (fonts, css, images, videos, etc.)
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-screen flex flex-center noisy !bg-black h-dvh z-[100]">
          <p className="text-5xl">Loading</p>
        </div>
      )}
      {children}
    </>
  );
}
