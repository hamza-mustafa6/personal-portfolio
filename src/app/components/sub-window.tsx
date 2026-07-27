"use client";
import { useState } from "react";

interface SubWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Keep in sync with the .animate-shrink duration in globals.css.
const CLOSE_MS = 300;

export default function SubWindow({ title, onClose, children }: SubWindowProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, CLOSE_MS);
  };

  return (
    <div
      className={`${
        closing ? "animate-shrink" : "animate-expand"
      } fixed top-[190px] left-[calc(50%+24px)] -translate-x-1/2 z-30 w-full max-w-5xl min-h-[500px] max-h-[78vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border-2 border-accent/60`}
    >
      <div className="bg-accent flex items-center justify-between px-8 py-4 shrink-0">
        <h2 className="text-white text-3xl font-mono lowercase tracking-tight">
          {title}
        </h2>
        <button
          onClick={handleClose}
          aria-label="Close"
          className="text-white/70 hover:text-white text-2xl font-mono transition-colors"
        >
          [x]
        </button>
      </div>
      <div className="bg-background flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
