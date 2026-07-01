import type { Dictionary } from "@/lib/i18n";
import RotatingGreeting from "./RotatingGreeting";
import ChatDemo from "./ChatDemo";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="top"
      style={{ position: "relative", padding: "70px 6vw 90px", overflow: "hidden" }}
    >
      {/* aurora */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle,var(--mint-300),transparent 65%)",
            filter: "blur(70px)",
            opacity: 0.55,
            animation: "drift1 24s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "-8%",
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle,var(--mint-100),transparent 60%)",
            filter: "blur(80px)",
            opacity: 0.8,
            animation: "drift2 28s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "30%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(244,123,94,.28),transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.5,
            animation: "drift3 30s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* left */}
        <div>
          <RotatingGreeting words={dict.hero.greetings} />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px,5.2vw,62px)",
              lineHeight: 1.02,
              letterSpacing: "-.03em",
              margin: "22px 0 0",
              color: "var(--ink)",
              textWrap: "balance",
            }}
          >
            {dict.hero.h1}
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "var(--slate)",
              margin: "22px 0 0",
              maxWidth: "54ch",
              textWrap: "pretty",
            }}
          >
            {dict.hero.sub}
          </p>
          <div style={{ display: "flex", gap: 13, flexWrap: "wrap", marginTop: 32 }}>
            <a
              href="#cta"
              className="btn-coral"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 16.5,
                background: "var(--coral)",
                color: "var(--ink)",
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: 12,
                boxShadow: "0 8px 22px rgba(244,123,94,.32)",
                transition: "background .2s ease, color .2s ease",
              }}
            >
              {dict.hero.cta1}
            </a>
            <a
              href="/demo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 16.5,
                background: "var(--teal-500)",
                color: "#fff",
                textDecoration: "none",
                padding: "15px 26px",
                borderRadius: 12,
                transition: "background .2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" />
                <path d="M10 8.5l5 3.5-5 3.5z" fill="#fff" />
              </svg>
              {dict.hero.ctaDemo}
            </a>
            <a
              href="#how"
              className="btn-ghost"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 16.5,
                background: "#fff",
                color: "var(--teal-700)",
                border: "1.5px solid var(--mist)",
                textDecoration: "none",
                padding: "13.5px 26px",
                borderRadius: 12,
                transition: "border-color .2s ease",
              }}
            >
              {dict.hero.cta2}
            </a>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--slate)",
              margin: "22px 0 0",
            }}
          >
            {dict.hero.trust}
          </p>
        </div>

        {/* right · chat demo */}
        <ChatDemo
          steps={dict.chatDemo}
          status={dict.hero.chatStatus}
          inputPh={dict.hero.chatInputPh}
        />
      </div>

      {/* stats */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "64px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: 14,
        }}
      >
        {dict.stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              border: "1px solid var(--mist)",
              borderRadius: 16,
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 34,
                color: "var(--teal-700)",
                lineHeight: 1,
              }}
            >
              {s.v}
            </div>
            <div style={{ fontSize: 14, color: "var(--slate)", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
