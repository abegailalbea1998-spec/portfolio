import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow text-paper/50!">Next step</p>
          <h2 className="display mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            Let&apos;s clear your{" "}
            <em className="display-italic text-clay">plate.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            If you&apos;re looking for a reliable, organized and proactive
            virtual assistant, I&apos;d love to help your business grow.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-clay px-7 py-3.5 font-medium text-paper transition-colors hover:bg-clay-deep"
            >
              <Mail className="size-4" strokeWidth={2} />
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/30 px-7 py-3.5 font-medium transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              <Phone className="size-4" strokeWidth={2} />
              {site.phone}
            </a>
            {/* PLACEHOLDER: point resumeUrl at the PDF once it's added to /public */}
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/30 px-7 py-3.5 font-medium transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              <FileText className="size-4" strokeWidth={2} />
              View resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-20 flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-paper/50">
              © {new Date().getFullYear()} {site.legalName} · {site.role}
            </p>
            <ul className="flex items-center gap-6">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group inline-flex items-center gap-1 text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
