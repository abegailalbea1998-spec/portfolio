import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education, experience } from "@/lib/site";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={
            <>
              Where the <em className="display-italic text-clay">discipline</em>{" "}
              comes from
            </>
          }
        />

        <div className="mt-14">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 100}>
              <article className="grid gap-3 border-t border-line py-10 lg:grid-cols-[1fr_1.8fr] lg:gap-10">
                <div>
                  <p className="eyebrow">{job.period}</p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {job.company}
                  </p>
                </div>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{job.role}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                    {job.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-paper-deep/50 px-6 py-5">
              <GraduationCap className="size-5 text-clay" strokeWidth={1.5} />
              <p className="text-sm">
                <span className="font-semibold">{education.degree}</span>
                <span className="text-ink-soft">
                  {" "}
                  — {education.school}, {education.year}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
