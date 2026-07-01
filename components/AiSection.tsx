import type { Dictionary } from "@/lib/i18n";
import { Check } from "./icons";

const CHAT = [
  { side: "p", t: "임플란트 상담 가능한가요?" },
  { side: "b", t: "네! 한국어로 도와드릴게요. 원하시는 날짜를 알려주세요 😊" },
  { side: "p", t: "Hi, can you switch to English?" },
  { side: "b", t: "Of course — let's find a time that works for you. 📅" },
] as const;

export default function AiSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="ai" style={{ scrollMarginTop: 74, padding: "90px 6vw" }}>
      <div
        data-reveal
        className="ai-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mint-600)",
            }}
          >
            {dict.ai.eyebrow}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px,3.6vw,42px)",
              letterSpacing: "-.02em",
              margin: "12px 0 14px",
            }}
          >
            {dict.ai.title}
          </h2>
          <p style={{ color: "var(--slate)", fontSize: 18, margin: "0 0 26px", maxWidth: "46ch" }}>
            {dict.ai.sub}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {dict.ai.features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--success-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 auto",
                    marginTop: 1,
                  }}
                >
                  <Check size={14} stroke="var(--success)" width={3} />
                </span>
                <span style={{ fontSize: 16.5 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: -30,
              background: "radial-gradient(circle at 60% 40%,var(--mint-100),transparent 70%)",
              filter: "blur(30px)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: "var(--teal-900)",
              borderRadius: 22,
              padding: 30,
              color: "#fff",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["🇪🇸 ES", "🇬🇧 EN", "🇰🇷 KR"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    background: "rgba(255,255,255,.12)",
                    padding: "5px 11px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CHAT.map((m, i) => (
                <span
                  key={i}
                  style={{
                    alignSelf: m.side === "p" ? "flex-end" : "flex-start",
                    background: m.side === "p" ? "var(--mint-500)" : "rgba(255,255,255,.1)",
                    color: m.side === "p" ? "var(--teal-900)" : "#fff",
                    padding: "11px 15px",
                    borderRadius:
                      m.side === "p" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    fontSize: 14.5,
                    maxWidth: m.side === "p" ? "82%" : "88%",
                    fontWeight: m.side === "p" ? 500 : 400,
                  }}
                >
                  {m.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
