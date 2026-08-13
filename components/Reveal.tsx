import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — only applies to mode="load" */
  delay?: number;
  className?: string;
  /**
   * "scroll" (default): scrubs in as it enters the viewport via CSS
   * scroll-driven animations — no JS, gracefully static in older browsers.
   * "load": time-based staggered entrance, for above-the-fold content.
   */
  mode?: "scroll" | "load";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  mode = "scroll",
}: RevealProps) {
  return (
    <div
      className={`${mode === "load" ? "reveal-load" : "reveal"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
