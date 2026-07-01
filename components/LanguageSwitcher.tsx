"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, type Lang } from "@/lib/i18n/config";

const LABEL: Record<Lang, string> = { es: "ES", en: "EN", kr: "KR" };

export default function LanguageSwitcher({ current }: { current: Lang }) {
  const pathname = usePathname();

  // Reemplaza el prefijo de idioma manteniendo el resto de la ruta.
  const rest = pathname.replace(/^\/(es|en|kr)/, "") || "";

  return (
    <span
      style={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        background: "var(--paper-2)",
        border: "1px solid var(--mist)",
        borderRadius: 999,
        padding: 3,
      }}
    >
      {LANGS.map((l) => {
        const on = l === current;
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            aria-current={on ? "true" : undefined}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 500,
              textDecoration: "none",
              background: on ? "var(--teal-700)" : "transparent",
              color: on ? "#fff" : "var(--slate)",
              padding: "5px 10px",
              borderRadius: 999,
            }}
          >
            {LABEL[l]}
          </Link>
        );
      })}
    </span>
  );
}
