import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n/config";
import { Logo } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const links = [
    { href: "#how", label: dict.nav.how },
    { href: "#why", label: dict.nav.benefits },
    { href: "#ai", label: dict.nav.ai },
    { href: "#pricing", label: dict.nav.pricing },
  ];
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(250,251,250,.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--mist)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "13px 6vw",
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            textDecoration: "none",
            marginRight: "auto",
          }}
        >
          <Logo size={26} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 19,
              letterSpacing: "-.01em",
              color: "var(--ink)",
            }}
          >
            medi<span style={{ color: "var(--teal-700)" }}>seo</span>
          </span>
        </a>

        <span
          className="nav-desktop"
          style={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            fontFamily: "var(--font-display)",
            fontSize: 14.5,
            fontWeight: 500,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                textDecoration: "none",
                color: "var(--slate)",
                padding: "7px 11px",
                borderRadius: 8,
              }}
            >
              {l.label}
            </a>
          ))}
        </span>

        <LanguageSwitcher current={lang} />

        <a
          href="#cta"
          className="btn-teal"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 14.5,
            background: "var(--teal-700)",
            color: "#fff",
            textDecoration: "none",
            padding: "10px 18px",
            borderRadius: 10,
            transition: "background .2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {dict.nav.cta}
        </a>
      </div>
    </nav>
  );
}
