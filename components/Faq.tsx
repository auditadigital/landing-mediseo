import type { Dictionary } from "@/lib/i18n";

export default function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section style={{ padding: "20px 6vw 90px" }}>
      <div data-reveal style={{ maxWidth: 820, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(26px,3.4vw,38px)",
            letterSpacing: "-.02em",
            margin: "0 0 32px",
            textAlign: "center",
          }}
        >
          {dict.faq.title}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {dict.faq.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid var(--mist)",
                borderRadius: 14,
                padding: "22px 24px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 17,
                  margin: "0 0 7px",
                }}
              >
                {item.q}
              </h3>
              <p style={{ margin: 0, color: "var(--slate)", fontSize: 15.5 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
