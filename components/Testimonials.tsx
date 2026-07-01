import type { Dictionary } from "@/lib/i18n";
import { Logo, QuoteMark } from "./icons";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section style={{ padding: "90px 6vw" }}>
      <div data-reveal style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(28px,4vw,44px)",
            letterSpacing: "-.02em",
            margin: "0 0 44px",
            textAlign: "center",
          }}
        >
          {dict.testimonials.title}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 18,
          }}
        >
          {dict.testimonials.items.map((t, i) => (
            <div
              key={i}
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <QuoteMark />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: 19,
                  lineHeight: 1.4,
                  margin: "14px 0 20px",
                  color: "var(--ink)",
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "var(--mint-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Logo size={22} />
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--slate)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
