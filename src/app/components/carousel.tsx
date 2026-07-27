"use client";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  caption?: string;
  interval?: number;
}

export default function Carousel({
  images,
  caption,
  interval = 3000,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState<number[]>([]);

  const allFailed = failed.length === images.length;

  // Auto-advance unless paused or hovered.
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, images.length, interval]);

  if (allFailed) {
    return (
      <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-accent/25 flex items-center justify-center">
        <span className="font-mono text-sm text-muted">
          {caption ?? "screenshots"}
        </span>
      </div>
    );
  }

  return (
    <figure className="space-y-2">
      <div
        className="relative w-full aspect-[16/9] rounded-xl border border-accent/15 overflow-hidden bg-background"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={caption ?? ""}
            onError={() => setFailed((f) => (f.includes(i) ? f : [...f, i]))}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full border transition-colors ${
                i === index
                  ? "bg-highlight border-highlight"
                  : "bg-transparent border-white hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
      {caption && (
        <figcaption className="text-lg text-muted text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
