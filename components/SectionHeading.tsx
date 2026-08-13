import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
};

/** Editorial section header: index number, small-caps label, serif title. */
export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 border-b border-line pb-3">
        <span className="display-italic text-lg text-clay">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display mt-8 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
