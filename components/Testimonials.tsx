import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="06"
          eyebrow="Kind words"
          title={
            <>
              Clients call it a <em className="display-italic text-clay">relief</em>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                <Quote className="size-6 text-clay" strokeWidth={1.5} />
                <blockquote className="mt-5 grow font-display text-lg leading-relaxed">
                  <p className="display-italic font-normal">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                  <span className="font-semibold">{t.author}</span>
                  <span className="block text-ink-soft">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
