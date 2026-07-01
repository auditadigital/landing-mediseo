"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n/config";

type Status = "idle" | "sending" | "ok" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--mist)",
  borderRadius: 11,
  padding: "12px 14px",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "var(--ink)",
  background: "#fff",
  outline: "none",
};

export default function ContactForm({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "32px 28px",
          textAlign: "center",
          color: "var(--ink)",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        ✓ {dict.form.success}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        textAlign: "left",
        boxShadow: "0 20px 50px rgba(7,54,59,.25)",
      }}
    >
      {/* Web3Forms: campos ocultos */}
      <input type="hidden" name="access_key" value={accessKey ?? ""} />
      <input type="hidden" name="subject" value={dict.form.subject} />
      <input type="hidden" name="from_name" value="Mediseo landing" />
      <input type="hidden" name="lang" value={lang} />
      {/* honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input name="name" required placeholder={dict.form.name} style={inputStyle} autoComplete="name" />
        <input name="clinic" placeholder={dict.form.clinic} style={inputStyle} autoComplete="organization" />
      </div>
      <input
        name="email"
        type="email"
        required
        placeholder={dict.form.email}
        style={inputStyle}
        autoComplete="email"
      />
      <textarea
        name="message"
        placeholder={dict.form.message}
        rows={3}
        style={{ ...inputStyle, resize: "vertical", minHeight: 76 }}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-coral"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 16,
          background: "var(--coral)",
          color: "var(--ink)",
          border: "none",
          padding: "14px 20px",
          borderRadius: 12,
          cursor: status === "sending" ? "default" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          transition: "background .2s ease, color .2s ease",
          boxShadow: "0 8px 22px rgba(244,123,94,.32)",
        }}
      >
        {status === "sending" ? dict.form.sending : dict.form.submit}
      </button>

      {status === "error" && (
        <p style={{ margin: 0, color: "var(--coral-dark)", fontSize: 14, textAlign: "center" }}>
          {dict.form.error}
        </p>
      )}
    </form>
  );
}
