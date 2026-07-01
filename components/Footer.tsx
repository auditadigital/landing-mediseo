import type { Dictionary } from "@/lib/i18n";
import { Logo } from "./icons";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer
      style={{
        background: "var(--teal-900)",
        color: "#fff",
        padding: "46px 6vw",
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={26} fill="#fff" cross="var(--teal-900)" />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>
            mediseo
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 15,
            color: "var(--mint-300)",
          }}
        >
          {dict.footer.tag}
        </span>
      </div>
    </footer>
  );
}
