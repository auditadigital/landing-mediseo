import type { Dictionary } from "@/lib/i18n";
import { StepIcon } from "./icons";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how" style={{ scrollMarginTop: 74, padding: "90px 6vw" }}>
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
          {dict.how.title}
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
          {dict.how.sub}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 18,
          }}
        >
          {dict.how.steps.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: 30,
                position: "relative",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--mint-600)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "#fff",
                  border: "1px solid var(--mist)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "14px 0 16px",
                }}
              >
                <StepIcon i={i} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 20,
                  margin: "0 0 8px",
                }}
              >
                {s.t}
              </h3>
              <p style={{ margin: 0, color: "var(--slate)", fontSize: 15.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
