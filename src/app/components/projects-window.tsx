import type { ReactNode } from "react";
import SubWindow from "./sub-window";
import { Figure, Hl } from "./article";
import Carousel from "./carousel";

interface ProjectsWindowProps {
  onClose: () => void;
}

const statusStyle: Record<string, string> = {
  "In Progress": "text-highlight",
  Complete: "text-accent",
};

interface Project {
  name: string;
  status: string;
  tags: string[];
  image?: string;
  images?: string[];
  body: ReactNode;
  links: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    name: "ThriftBred",
    status: "In Progress",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "Stripe"],
    // image: "/projects/thriftbred.png",
    body: (
      <>
        A <Hl>thrifting marketplace</Hl> for Skidmore students, built around the
        school&apos;s <Hl>sustainability</Hl> values — authenticated listings,
        peer-to-peer purchases, and end-to-end <Hl>Stripe checkout</Hl> with
        reliable data persistence.
      </>
    ),
    links: [{ label: "GitHub", url: "https://github.com/hamza-mustafa6" }],
  },
  {
    name: "Shift2Sakura",
    status: "Complete",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    images: [
      "/projects/shift2sakura/1.png",
      "/projects/shift2sakura/2.png",
      "/projects/shift2sakura/3.png",
      "/projects/shift2sakura/4.png",
      "/projects/shift2sakura/5.png",
    ],
    body: (
      <>
        Built while studying abroad in Japan — takes a <Hl>foreign resume</Hl>{" "}
        and converts it into a proper Japanese-style <Hl>rirekisho</Hl> format.
      </>
    ),
    links: [
      {
        label: "GitHub",
        url: "https://github.com/hamza-mustafa6/shift2sakura",
      },
    ],
  },
  {
    name: "Checkers RL Agents",
    status: "Complete",
    tags: ["Java", "React"],
    image: "/projects/checkers.png",
    body: (
      <>
        A checkers engine built from scratch in <Hl>Java</Hl> with two agents: a{" "}
        <Hl>self-play</Hl> linear function approximator and a <Hl>minimax</Hl>{" "}
        agent with alpha-beta pruning — plus a head-to-head eval framework.
      </>
    ),
    links: [
      { label: "GitHub", url: "https://github.com/hamza-mustafa6/CheckersAI" },
    ],
  },
];

export default function ProjectsWindow({ onClose }: ProjectsWindowProps) {
  return (
    <SubWindow title="projects" onClose={onClose}>
      <div className="p-8 md:p-10 space-y-12">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`space-y-5 ${
              i !== projects.length - 1
                ? "border-b border-accent/10 pb-12"
                : ""
            }`}
          >
            <div className="flex items-baseline gap-5 flex-wrap">
              <h2 className="text-6xl text-foreground leading-none">{p.name}</h2>
              <span
                className={`font-mono text-sm uppercase tracking-widest ${statusStyle[p.status]}`}
              >
                ● {p.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-sm text-muted border border-accent/25 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.images ? (
              <Carousel images={p.images} caption={`${p.name} — walkthrough`} />
            ) : (
              <Figure src={p.image} caption={`${p.name} screenshot`} />
            )}

            <p className="text-3xl leading-snug text-foreground/90">{p.body}</p>

            <div className="flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono text-base border border-accent/30 rounded-full px-5 py-2 hover:border-accent hover:text-highlight transition-colors"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SubWindow>
  );
}
