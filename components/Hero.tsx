import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Oversized ghost initial in the background */}
      <span
        aria-hidden
        className="display pointer-events-none absolute -right-10 -top-6 select-none text-[22rem] leading-none text-ink/4 sm:text-[30rem]"
      >
        {site.name.charAt(0)}
      </span>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-10">
        <div>
          <Reveal mode="load">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-deep/70 px-4 py-2 text-xs font-medium tracking-wide text-ink-soft">
              <span className="pulse-dot relative inline-block size-2 rounded-full bg-sage" />
              {site.availability}
            </p>
          </Reveal>

          <Reveal mode="load" delay={100}>
            <h1 className="display mt-8 text-6xl sm:text-7xl lg:text-[6.5rem]">
              {site.headline.line1}{" "}
              <em className="display-italic text-clay">{site.headline.accent}</em>
            </h1>
          </Reveal>

          <Reveal mode="load" delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.subheadline}
            </p>
          </Reveal>

          <Reveal mode="load" delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={site.calendarUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 font-medium text-paper transition-colors hover:bg-clay-deep"
              >
                Book a discovery call
                <ArrowDownRight
                  className="size-4 transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#services"
                className="link-underline py-3.5 font-medium text-ink"
              >
                See what I take off your plate
              </a>
            </div>
          </Reveal>

          <Reveal mode="load" delay={400}>
            <dl className="mt-16 grid grid-cols-3 divide-x divide-line border-y border-line">
              {site.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-6 first:pl-0">
                  <dt className="order-last mt-2 text-xs leading-snug text-ink-soft">
                    {stat.label}
                  </dt>
                  <dd className="display text-3xl sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Portrait — arch frame, editorial signature shape */}
        <Reveal mode="load" delay={250} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-full rounded-b-3xl border border-line">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 90vw"
                className="object-cover"
              />
            </div>
            <p className="absolute -left-3 bottom-8 flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium shadow-sm">
              <MapPin className="size-3.5 text-clay" strokeWidth={2} />
              {site.location}
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-ink-soft">{site.timezone}</p>
        </Reveal>
      </div>
    </section>
  );
}
