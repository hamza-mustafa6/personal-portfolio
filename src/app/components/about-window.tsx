"use client";
import { useState } from "react";
import SubWindow from "./sub-window";
import { SectionHeader, Quote, Hl } from "./article";

interface AboutWindowProps {
  onClose: () => void;
}

const certificates = [
  { label: "ProgressSoft Internship", src: "/certificates/progresssoft.jpg" },
  {
    label: "Bloomberg Market Concepts", // confirm exact certificate title
    src: "/certificates/bloomberg-market-concepts.jpg",
  },
  {
    label: "Bloomberg Finance Fundamentals", // confirm exact certificate title
    src: "/certificates/bloomberg-finance-fundamentals.jpg",
  },
];

export default function AboutWindow({ onClose }: AboutWindowProps) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <SubWindow title="about" onClose={onClose}>
      <div className="p-8 md:p-10">
        {/* Header: avatar + name + roles */}
        <div className="flex items-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-accent shrink-0 flex items-center justify-center">
            {imgOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/avatar.jpg"
                alt="Hamza Mustafa"
                onError={() => setImgOk(false)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-mono text-4xl text-background">HM</span>
            )}
          </div>

          <div>
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="text-6xl text-highlight leading-none">
                Hamza Mustafa
              </h2>
              <span className="text-3xl text-muted" dir="rtl">
                حمزة مصطفى
              </span>
            </div>
            <p className="text-2xl text-foreground/70 mt-3">
              CS + Math @ Skidmore College
            </p>
            <p className="text-2xl text-foreground/70">
              Reinforcement Learning Researcher at{" "}
              <a
                href="https://www.skidmore.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight underline"
              >
                Skidmore College
              </a>
            </p>
          </div>
        </div>

        <hr className="my-8 border-accent/15" />

        {/* Sections */}
        <div className="space-y-10">
          <section className="space-y-4">
            <SectionHeader>About Me</SectionHeader>
            <Quote note="i care about software that works at scale and research that actually ships.">
              i&apos;m a rising senior building things that move — from{" "}
              <Hl>backend services</Hl> handling real{" "}
              <Hl>financial transactions</Hl> to <Hl>robots</Hl> learning to
              walk on their own.
            </Quote>
          </section>

          <section className="space-y-4">
            <SectionHeader>Education</SectionHeader>
            <Quote note="Aug 2023 – May 2027">
              <Hl>B.A. Computer Science</Hl>, minor in <Hl>Mathematics</Hl> at
              Skidmore College — <Hl>3.95 GPA</Hl>.
            </Quote>
          </section>

          <section className="space-y-4">
            <SectionHeader>Stack</SectionHeader>
            <Quote>
              <Hl>Java</Hl>, <Hl>Python</Hl>, <Hl>TypeScript</Hl>, Spring Boot,
              Next.js, React, PyTorch, NVIDIA Isaac Lab, PostgreSQL, Docker, AWS.
            </Quote>
          </section>

          <section className="space-y-4">
            <SectionHeader>Certificates</SectionHeader>
            <div className="flex flex-wrap gap-3">
              {certificates.map((c) => (
                <a
                  key={c.label}
                  href={c.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg border-2 border-accent/30 rounded-full px-6 py-3 hover:border-accent hover:bg-accent/5 hover:text-highlight transition-colors cursor-pointer"
                >
                  {c.label} ↗
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SubWindow>
  );
}
