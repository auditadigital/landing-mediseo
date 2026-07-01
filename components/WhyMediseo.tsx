import type { Dictionary } from "@/lib/i18n";
import { BenefitIcon } from "./icons";

export default function WhyMediseo({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="why"
      style={{ scrollMarginTop: 74, padding: "90px 6vw", background: "var(--paper-2)" }}
    >
      <div data-reveal style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(28px,4vw,44px)",
            letterSpacing: "-.02em",
            margin: 0,
            textAlign: "center",
          }}
        >
          {dict.why.title}
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--slate)",
            fontSize: 18,
            margin: "12px auto 48px",
            maxWidth: "48ch",
          }}
        >
          {dict.why.sub}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 16,
          }}
        >
          {dict.why.items.map((b, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid var(--mist)",
                borderRadius: 16,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--mint-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 15,
                }}
              >
                <BenefitIcon i={i} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 18,
                  margin: "0 0 6px",
                }}
              >
                {b.t}
              </h3>
              <p style={{ margin: 0, color: "var(--slate)", fontSize: 15 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
