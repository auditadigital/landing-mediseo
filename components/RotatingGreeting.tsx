"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "./icons";

export default function RotatingGreeting({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % words.length);
        setShown(true);
      }, 240);
    }, 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        background: "#fff",
        border: "1px solid var(--mist)",
        borderRadius: 999,
        padding: "7px 15px",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 14,
        color: "var(--teal-700)",
        boxShadow: "0 4px 16px rgba(20,32,30,.05)",
      }}
    >
      <Globe />
      <span
        ref={ref}
        style={{
          display: "inline-block",
          minWidth: 90,
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "translateY(-6px)",
          transition: "opacity .25s ease, transform .25s ease",
        }}
      >
        {words[i]}
      </span>
    </span>
  );
}
