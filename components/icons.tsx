import type { CSSProperties } from "react";

// Logo Seoul Pin (pin de ubicación con cruz médica en negativo).
export function Logo({
  size = 26,
  fill = "var(--teal-700)",
  cross = "#fff",
}: {
  size?: number;
  fill?: string;
  cross?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 2c-6 0-10.5 4.4-10.5 10.2C5.5 19.5 16 30 16 30s10.5-10.5 10.5-17.8C26.5 6.4 22 2 16 2z"
        fill={fill}
      />
      <rect x="14.4" y="7.4" width="3.2" height="10" rx="1.2" fill={cross} />
      <rect x="11" y="10.8" width="10" height="3.2" rx="1.2" fill={cross} />
    </svg>
  );
}

export function Globe({
  size = 15,
  stroke = "var(--mint-600)",
  width = 2,
}: {
  size?: number;
  stroke?: string;
  width?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function Check({
  size = 18,
  stroke = "var(--mint-600)",
  width = 2.5,
  style,
}: {
  size?: number;
  stroke?: string;
  width?: number;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ink)"
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="var(--mint-300)" aria-hidden="true">
      <path d="M10 7H6a2 2 0 0 0-2 2v4h4v-2H6V9h4zm8 0h-4a2 2 0 0 0-2 2v4h4v-2h-2V9h4z" />
    </svg>
  );
}

// Íconos de las tarjetas "Cómo funciona" y "Por qué" (index estable).
const STROKE = {
  fill: "none",
  stroke: "var(--teal-700)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function StepIcon({ i }: { i: number }) {
  const paths = [
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8" />
    </>,
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </>,
    <>
      <path d="M8 2v3M16 2v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M9 13l2 2 4-4" />
    </>,
  ];
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...STROKE}>
      {paths[i]}
    </svg>
  );
}

export function BenefitIcon({ i }: { i: number }) {
  const paths = [
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>,
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 13h5" />
    </>,
    <>
      <path d="M8 2v3M16 2v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="M9 13l2 2 4-4" />
    </>,
    <>
      <path d="M9 11l3 3 8-8" />
      <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
    </>,
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>,
    <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...STROKE}>
      {paths[i]}
    </svg>
  );
}
