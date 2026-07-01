"use client";

import { useEffect, useRef, useState } from "react";
import type { ChatStep } from "@/lib/i18n/types";
import { Logo, Arrow } from "./icons";

type Msg = { who: "p" | "b"; t: string };

export default function ChatDemo({
  steps,
  status,
  inputPh,
}: {
  steps: ChatStep[];
  status: string;
  inputPh: string;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let idx = 0;

    const tick = () => {
      if (idx >= steps.length) return;
      const s = steps[idx++];

      if (s.who === "restart") {
        timers.push(
          setTimeout(() => {
            setMsgs([]);
            setTyping(false);
            idx = 0;
            tick();
          }, s.d),
        );
        return;
      }
      if (s.who === "p" || s.who === "b") {
        const msg: Msg = { who: s.who, t: s.t };
        setMsgs((prev) => [...prev, msg]);
        timers.push(setTimeout(tick, s.d));
        return;
      }
      // typing
      setTyping(true);
      timers.push(
        setTimeout(() => {
          setTyping(false);
          tick();
        }, s.d),
      );
    };

    tick();
    return () => timers.forEach(clearTimeout);
  }, [steps]);

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  return (
    <div
      className="hero-chat"
      style={{
        position: "relative",
        justifySelf: "center",
        width: "100%",
        maxWidth: 380,
        animation: "floaty 5s ease-in-out infinite alternate",
      }}
    >
      <div
        style={{
          border: "1px solid var(--mist)",
          borderRadius: 22,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 30px 70px rgba(7,54,59,.18)",
        }}
      >
        {/* header */}
        <div
          style={{
            background: "var(--teal-700)",
            padding: "15px 18px",
            display: "flex",
            alignItems: "center",
            gap: 11,
          }}
        >
          <span
            style={{
              position: "relative",
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <Logo size={20} />
          </span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 15.5,
              }}
            >
              Mediseo
            </div>
            <div
              style={{
                color: "var(--mint-300)",
                fontSize: 12.5,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "var(--mint-300)",
                    animation: "pulse 2s ease-out infinite",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "var(--mint-300)",
                  }}
                />
              </span>
              <span>{status}</span>
            </div>
          </div>
        </div>

        {/* thread */}
        <div
          ref={threadRef}
          style={{
            background: "var(--paper-2)",
            padding: 18,
            height: 316,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 11,
          }}
        >
          {msgs.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "10px 14px",
                fontSize: 14,
                maxWidth: "82%",
                lineHeight: 1.4,
                alignSelf: m.who === "p" ? "flex-end" : "flex-start",
                background: m.who === "p" ? "var(--teal-700)" : "#fff",
                color: m.who === "p" ? "#fff" : "var(--ink)",
                border: m.who === "p" ? "none" : "1px solid var(--mist)",
                borderRadius:
                  m.who === "p" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              }}
            >
              {m.t}
            </div>
          ))}
          {typing && (
            <div
              style={{
                alignSelf: "flex-start",
                background: "#fff",
                border: "1px solid var(--mist)",
                borderRadius: "14px 14px 14px 4px",
                padding: "13px 16px",
                display: "flex",
                gap: 5,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--slate)",
                    animation: "blink 1.2s infinite",
                    animationDelay: `${i * 0.18}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* input (decorativo) */}
        <div
          style={{
            padding: "13px 15px",
            display: "flex",
            gap: 9,
            borderTop: "1px solid var(--mist)",
          }}
        >
          <input
            placeholder={inputPh}
            readOnly
            aria-hidden="true"
            tabIndex={-1}
            style={{
              flex: 1,
              border: "1px solid var(--mist)",
              borderRadius: 999,
              padding: "10px 16px",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              outline: "none",
            }}
          />
          <span
            style={{
              background: "var(--coral)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <Arrow />
          </span>
        </div>
      </div>
    </div>
  );
}
