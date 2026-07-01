import type { Dictionary } from "@/lib/i18n";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section id="cta" style={{ scrollMarginTop: 74, padding: "30px 6vw 90px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          position: "relative",
          borderRadius: 26,
          overflow: "hidden",
          background: "var(--teal-900)",
          padding: "64px 6vw",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-30%",
            left: "10%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(79,196,173,.35),transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-40%",
            right: "5%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(244,123,94,.28),transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px,4.4vw,48px)",
              letterSpacing: "-.02em",
              color: "#fff",
              margin: "0 auto",
              maxWidth: "18ch",
              lineHeight: 1.08,
            }}
          >
            {dict.cta.title}
          </h2>
          <p
            style={{
              color: "var(--mint-300)",
              fontSize: 18,
              margin: "18px auto 30px",
              maxWidth: "50ch",
            }}
          >
            {dict.cta.sub}
          </p>
          <a
            href="#top"
            className="btn-coral-white"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 17,
              background: "var(--coral)",
              color: "var(--ink)",
              textDecoration: "none",
              padding: "16px 36px",
              borderRadius: 13,
              boxShadow: "0 10px 30px rgba(244,123,94,.4)",
              transition: "background .2s ease",
            }}
          >
            {dict.cta.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
