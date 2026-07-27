"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import SubWindow from "./sub-window";
import { SectionHeader, Figure, Hl } from "./article";

interface ResearchWindowProps {
  onClose: () => void;
}

interface Research {
  title: string;
  venue: string;
  period: string;
  blurb: string;
  paperUrl?: string;
  figures: { src?: string; caption: string }[];
  sections: { heading: string; body: ReactNode }[];
}

const research: Research[] = [
  {
    title: "Reinforcement Learning for Options Trading",
    venue: "Skidmore College · Faculty-Student Research",
    period: "May – Aug 2026",
    blurb:
      "Training a PPO agent to trade ETF options by learning the underlying asset's market behavior.",
    // paperUrl: "/papers/options-trading.pdf", // add the PDF to public/papers/ and uncomment
    figures: [{ caption: "training curves / trade signals" }],
    sections: [
      {
        heading: "Overview",
        body: (
          <>
            Training a <Hl>Proximal Policy Optimization (PPO)</Hl> agent under
            Professor <Hl>Wenlu Du</Hl> to trade <Hl>ETF options contracts</Hl>{" "}
            by learning market behavior on the underlying ETF itself. The
            model reads <Hl>OHLCV</Hl> (open, high, low, close, volume) data
            and outputs a buy, sell, or hold decision.
          </>
        ),
      },
      {
        heading: "Approach",
        body: (
          <>
            Comparing <Hl>daily</Hl> and <Hl>hourly</Hl> data granularity to
            evaluate which timeframe produces a more reliable trading policy.
          </>
        ),
      },
      {
        heading: "Impact",
        body: (
          <>
            Presenting the work at Skidmore&apos;s Summer Research Symposium
            to <Hl>120+ attendees</Hl>.
          </>
        ),
      },
    ],
  },
  {
    title: "Bipedal Locomotion in Quadrupedal Robots",
    venue: "Skidmore College × NVIDIA Isaac Lab",
    period: "Sep 2024 – Present",
    blurb:
      "Teaching four-legged robots to walk on two legs with deep reinforcement learning.",
    paperUrl: "/papers/bipedal-locomotion.pdf", // add the PDF to public/papers/ and uncomment
    figures: [
      {
        src: "/feature-skidmore.jpg",
        caption: "Commanding a robotic dog in Skidmore's AI lab",
      },
    ],
    sections: [
      {
        heading: "Overview",
        body: (
          <>
            Engineered <Hl>RL pipelines</Hl> for stable quadrupedal and bipedal
            locomotion using <Hl>NVIDIA Isaac Lab</Hl>, training across{" "}
            <Hl>4096 parallel environments</Hl>.
          </>
        ),
      },
      {
        heading: "Results",
        body: (
          <>
            Improved gait stability by <Hl>40%</Hl> over baseline controllers
            under external forces, and cut training time <Hl>30%</Hl> while
            increasing convergence reliability.
          </>
        ),
      },
      {
        heading: "Impact",
        body: (
          <>
            Presented the work to <Hl>120+ attendees</Hl>.
          </>
        ),
      },
    ],
  },
];

function PaperLink({ url }: { url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-2xl border-2 border-highlight bg-highlight/10 px-6 py-4 hover:bg-highlight/20 transition-colors"
      >
        <span className="font-mono text-xl text-highlight">
          📄 Read the paper
        </span>
        <span className="font-mono text-xl text-highlight">→</span>
      </a>
    );
  }
  return (
    <div className="rounded-2xl border-2 border-dashed border-accent/25 px-6 py-4">
      <span className="font-mono text-base text-muted">
        [ paper coming soon ]
      </span>
    </div>
  );
}

export default function ResearchWindow({ onClose }: ResearchWindowProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? research[selected] : null;

  return (
    <SubWindow title="research" onClose={onClose}>
      {!active ? (
        <div className="grid grid-cols-1 gap-6 p-8">
          {research.map((r, i) => (
            <button
              key={r.title}
              onClick={() => setSelected(i)}
              className="text-left rounded-2xl border-2 border-accent/20 p-8 flex flex-col gap-3 hover:border-accent/60 hover:bg-accent/5 transition-all group cursor-pointer"
            >
              <p className="font-mono text-sm uppercase tracking-widest text-highlight">
                {r.venue} · {r.period}
              </p>
              <p className="text-5xl text-foreground leading-none group-hover:text-highlight transition-colors">
                {r.title}
              </p>
              <p className="text-2xl text-muted leading-snug">{r.blurb}</p>
              <span className="font-mono text-base text-accent/60 mt-2">
                read more →
              </span>
            </button>
          ))}
        </div>
      ) : (
        <article className="p-8 md:p-10 space-y-8 max-w-4xl">
          <button
            onClick={() => setSelected(null)}
            className="font-mono text-base text-accent/70 hover:text-highlight transition-colors cursor-pointer"
          >
            ← research
          </button>

          <header className="space-y-2">
            <p className="font-mono text-sm uppercase tracking-widest text-highlight">
              {active.venue} · {active.period}
            </p>
            <h2 className="text-6xl text-foreground leading-none">
              {active.title}
            </h2>
          </header>

          <PaperLink url={active.paperUrl} />

          {active.figures.map((f, i) => (
            <Figure key={i} src={f.src} caption={f.caption} />
          ))}

          {active.sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <SectionHeader>{s.heading}</SectionHeader>
              <p className="text-3xl leading-snug text-foreground/90">
                {s.body}
              </p>
            </section>
          ))}
        </article>
      )}
    </SubWindow>
  );
}
