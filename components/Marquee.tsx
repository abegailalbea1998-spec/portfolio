import { Asterisk } from "lucide-react";
import { tools } from "@/lib/site";

/** Infinite ticker of the tools she works in daily. */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {tools.map((tool) => (
        <li key={tool} className="flex items-center">
          <span className="display px-6 text-2xl text-paper sm:text-3xl">
            {tool}
          </span>
          <Asterisk className="size-5 text-clay" strokeWidth={1.5} />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Tools and platforms"
      className="marquee overflow-hidden border-y border-ink bg-ink py-5"
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
