import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { workSamples } from "@/lib/site";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="02"
          eyebrow="Work samples"
          title={
            <>
              Proof, not <em className="display-italic text-clay">promises</em>
            </>
          }
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          {workSamples.map((sample, i) => (
            <Reveal key={sample.title} delay={i * 120}>
              <figure>
                <a
                  href={sample.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-line bg-paper-deep/50 p-3 transition-colors hover:border-line-strong"
                  aria-label={`View ${sample.title} at full size`}
                >
                  <Image
                    src={sample.src}
                    alt={sample.title}
                    width={sample.width}
                    height={sample.height}
                    loading="eager"
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </a>
                <figcaption className="mt-5 flex items-start justify-between gap-6 px-1">
                  <div>
                    <h3 className="display text-xl">{sample.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                      {sample.caption}
                    </p>
                    <p className="eyebrow mt-3">{sample.tools}</p>
                  </div>
                  <a
                    href={sample.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-clay transition-colors hover:bg-clay hover:text-paper"
                    aria-label={`Open ${sample.title} in a new tab`}
                  >
                    <ArrowUpRight className="size-4" strokeWidth={1.8} />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
