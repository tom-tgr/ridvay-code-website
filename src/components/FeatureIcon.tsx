import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  generate: (
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16z" />
  ),
  refactor: <path d="M4 7h11l-3-3m3 3-3 3M20 17H9l3-3m-3 3 3 3" />,
  debug: (
    <>
      <rect x="7" y="8" width="10" height="12" rx="5" />
      <path d="M9 6l-1-2m8 2 1-2M4 12h3m10 0h3M4.5 17l2.5-1m13 1-2.5-1M12 8v12" />
    </>
  ),
  test: (
    <>
      <path d="M12 3l7 3.5V12c0 4-3 7.2-7 9-4-1.8-7-5-7-9V6.5L12 3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  docs: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  explain: (
    <>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
      <path d="M9.6 9.2a2.5 2.5 0 0 1 4.7 1.1c0 1.7-2.3 2-2.3 3.4M12 16.5h.01" />
    </>
  ),
};

export function FeatureIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name] ?? ICONS.generate}
    </svg>
  );
}
