import { ImageIcon, Play } from "lucide-react";

type MediaPlaceholderProps = {
  label: string;
  hint?: string;
  kind?: "image" | "video";
  className?: string;
};

/**
 * PLACEHOLDER frame for photos / video.
 * Replace the inner content with <Image> or an embedded video
 * once the real assets are added to /public.
 */
export default function MediaPlaceholder({
  label,
  hint,
  kind = "image",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-line-strong bg-paper-deep/60 text-center ${className}`}
    >
      <span className="flex size-14 items-center justify-center rounded-full border border-line-strong bg-paper text-ink-soft">
        {kind === "video" ? (
          <Play className="size-5 translate-x-px" strokeWidth={1.5} />
        ) : (
          <ImageIcon className="size-5" strokeWidth={1.5} />
        )}
      </span>
      <p className="px-6 text-sm font-medium text-ink">{label}</p>
      {hint && <p className="px-6 text-xs text-ink-soft">{hint}</p>}
    </div>
  );
}
