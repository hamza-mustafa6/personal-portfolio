import type { ReactNode } from "react";

/** Small monospace uppercase section header (e.g. "LANGUAGE PROFICIENCY"). */
export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mono uppercase tracking-[0.2em] text-lg text-accent/70">
      {children}
    </h3>
  );
}

/** Terracotta highlight for eye-catching keywords inside prose. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-highlight">{children}</span>;
}

/** Left-bordered blockquote paragraph with an optional smaller note underneath. */
export function Quote({
  children,
  note,
}: {
  children: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent/25 pl-6 space-y-3">
      <p className="text-3xl leading-snug text-foreground">{children}</p>
      {note && <p className="text-xl text-muted leading-snug">{note}</p>}
    </div>
  );
}

/** Image with caption, or a dashed placeholder box when no src is provided yet. */
export function Figure({ src, caption }: { src?: string; caption?: string }) {
  if (src) {
    return (
      <figure className="space-y-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption ?? ""}
          className="w-full rounded-xl border border-accent/15"
        />
        {caption && (
          <figcaption className="text-lg text-muted text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-accent/25 flex items-center justify-center">
      <span className="font-mono text-sm text-muted">
        {caption ?? "figure"}
      </span>
    </div>
  );
}
