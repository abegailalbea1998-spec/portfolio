import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="05"
          eyebrow="How it works"
          title={
            <>
              From overwhelmed to{" "}
              <em className="display-italic text-clay">organized</em> in a week
            </>
          }
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 120}>
              <li className="relative border-t-2 border-ink pt-6">
                <span className="display-italic absolute -top-5 right-0 text-4xl text-clay/25">
                  {step.index}
                </span>
                <h3 className="display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
