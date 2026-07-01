import type { Dictionary } from "@/lib/i18n";
import { Check } from "./icons";

export default function Pricing({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="pricing"
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
          {dict.pricing.title}
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--slate)",
            fontSize: 18,
            margin: "12px auto 44px",
            maxWidth: "48ch",
          }}
        >
          {dict.pricing.sub}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {dict.pricing.plans.map((plan, i) => {
            const popular = i === 1;
            return (
              <div
                key={i}
                style={{
                  background: popular ? "var(--teal-900)" : "#fff",
                  border: popular ? "1px solid var(--teal-900)" : "1px solid var(--mist)",
                  borderRadius: 20,
                  padding: 30,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: popular ? "0 24px 50px rgba(7,54,59,.25)" : "none",
                }}
              >
                {popular && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 12.5,
                      background: "var(--coral)",
                      color: "var(--ink)",
                      padding: "5px 14px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {dict.pricing.popular}
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 20,
                    margin: 0,
                    color: popular ? "#fff" : "var(--ink)",
                  }}
                >
                  {plan.name}
                </h3>
                <div style={{ margin: "14px 0 4px", display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 34,
                      color: popular ? "#fff" : "var(--ink)",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.per && (
                    <span style={{ color: popular ? "var(--mint-300)" : "var(--slate)", fontSize: 15 }}>
                      {plan.per}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    height: 1,
                    background: popular ? "rgba(255,255,255,.15)" : "var(--mist)",
                    margin: "20px 0",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                    flex: 1,
                    color: popular ? "#fff" : "inherit",
                  }}
                >
                  {plan.features.map((f, j) => (
                    <span key={j} style={{ display: "flex", gap: 10, fontSize: 15 }}>
                      <Check
                        size={18}
                        stroke={popular ? "var(--mint-300)" : "var(--mint-600)"}
                        width={2.5}
                        style={{ flex: "0 0 auto" }}
                      />
                      <span>{f}</span>
                    </span>
                  ))}
                </div>
                <a
                  href="#cta"
                  className={popular ? "btn-coral" : "btn-outline"}
                  style={{
                    marginTop: 24,
                    textAlign: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 15.5,
                    textDecoration: "none",
                    padding: popular ? 13 : 12,
                    borderRadius: 11,
                    background: popular ? "var(--coral)" : "#fff",
                    color: popular ? "var(--ink)" : "var(--teal-700)",
                    border: popular ? "none" : "1.5px solid var(--teal-700)",
                    transition: "background .2s ease, color .2s ease",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--slate)",
            margin: "24px 0 0",
          }}
        >
          {dict.pricing.note}
        </p>
      </div>
    </section>
  );
}
