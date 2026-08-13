import { BadgeCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { aiSkills, site } from "@/lib/site";

const highlights = [
  "Detail-oriented with strong organizational skills",
  "Proficient in AI — from prompt-crafting to advanced image generation",
  "Excellent communication — and a fast learner",
  "Confidentiality you can rely on, always",
  "Adaptable and able to work independently",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          index="03"
          eyebrow="About"
          title={
            <>
              The person <em className="display-italic text-clay">behind</em> the
              calm
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft">
                Hi, I&apos;m {site.name}, a highly organized and detail-oriented
                administrative professional from {site.location}, with over
                three years of experience as an{" "}
                <strong className="font-semibold text-ink">
                  Assistant Branch Manager at M Lhuillier Pawnshop
                </strong>
                . I ran the branch day to day: operations, customer service,
                cash handling, report preparation, record management, and team
                supervision.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Now I bring that same discipline to business owners as a virtual
                assistant. I&apos;m proficient in Microsoft Office, Google
                Workspace, Canva, Trello, Zoom and Google Meet, and I work
                AI-first with Claude, ChatGPT, Gemini and Midjourney. You get
                the diligence of a branch manager at the speed of modern tools.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <BadgeCheck
                      className="mt-0.5 size-4.5 shrink-0 text-sage"
                      strokeWidth={1.8}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow mb-3">Video introduction</p>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-ink">
                <iframe
                  src={site.videoEmbedUrl}
                  title={`Video introduction — ${site.legalName}, Virtual Assistant`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10">
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <Sparkles className="size-3.5 text-clay" strokeWidth={2} />
                  AI proficiency
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {aiSkills.map((ai) => (
                    <li
                      key={ai.name}
                      className="rounded-full border border-line bg-paper px-4 py-2 text-sm"
                    >
                      <span className="font-semibold">{ai.name}</span>
                      <span className="text-ink-soft"> · {ai.use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
