"use client";

import { useEffect } from "react";

// Añade .is-visible a los [data-reveal] al entrar en viewport.
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    // Activa el modo reveal solo con JS: antes todo está visible (no-JS safe).
    document.body.classList.add("reveal-ready");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
