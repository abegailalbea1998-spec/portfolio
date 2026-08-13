import {
  ArrowUpRight,
  Database,
  Globe,
  HeartHandshake,
  Inbox,
  Megaphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Inbox,
  Megaphone,
  Database,
  HeartHandshake,
  Globe,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="01"
          eyebrow="Services"
          title={
            <>
              Everything off your plate,{" "}
              <em className="display-italic text-clay">gracefully</em>
            </>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Inbox;
            return (
              <Reveal key={service.index} delay={(i % 3) * 90} className="h-full">
                <article className="group flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-ink">
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-full border border-line text-clay transition-colors duration-500 group-hover:border-paper/25">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span className="display-italic text-sm text-ink-soft transition-colors duration-500 group-hover:text-paper/50">
                      {service.index}
                    </span>
                  </div>
                  <h3 className="display mt-8 text-2xl transition-colors duration-500 group-hover:text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-3 grow text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70">
                    {service.description}
                  </p>
                  <ArrowUpRight
                    className="mt-6 size-5 text-clay opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
