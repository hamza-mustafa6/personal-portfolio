"use client";
import { useState } from "react";
import Lightbox from "./lightbox";

interface Frame {
  src: string;
  caption: string;
  position: string; // fixed placement in the blue gutter
  rotate: string;
  width: string;
  delay: string;
}

const frames: Frame[] = [
  {
    src: "/feature-skidmore.jpg",
    caption: "Skidmore College · ’25",
    position: "top-[19%] left-[3%]",
    rotate: "-6deg",
    width: "165px",
    delay: "0s",
  },
  {
    src: "/feature-alliz.jpg",
    caption: "ALLIZ Pitch Day · Tokyo",
    position: "top-[34%] right-[3%]",
    rotate: "5deg",
    width: "150px",
    delay: "1.5s",
  },
];

function FrameItem({
  frame,
  onOpen,
}: {
  frame: Frame;
  onOpen: () => void;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;

  return (
    // Outer: fixed position + static tilt
    <div
      className={`group fixed z-10 cursor-zoom-in pointer-events-auto ${frame.position}`}
      style={{ transform: `rotate(${frame.rotate})`, width: frame.width }}
      onClick={onOpen}
    >
      {/* Middle: the drifting motion */}
      <div className="animate-float" style={{ animationDelay: frame.delay }}>
        {/* Inner: the paper frame + hover lift */}
        <div className="bg-white p-2 pb-1 rounded-sm shadow-xl transition-transform duration-200 group-hover:scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frame.src}
            alt={frame.caption}
            onError={() => setOk(false)}
            className="w-full h-auto rounded-sm"
          />
          <p className="font-mono text-[10px] text-center text-neutral-500 mt-1">
            {frame.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PhotoFrames() {
  const [open, setOpen] = useState<Frame | null>(null);

  return (
    <>
      <div aria-hidden className="hidden xl:block">
        {frames.map((f) => (
          <FrameItem key={f.src} frame={f} onOpen={() => setOpen(f)} />
        ))}
      </div>

      {open && (
        <Lightbox src={open.src} caption={open.caption} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
