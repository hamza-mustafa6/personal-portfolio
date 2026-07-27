"use client";
import { useState } from "react";

interface LightboxProps {
  src: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-8 cursor-zoom-out"
    >
      <div
        className="bg-white p-3 rounded shadow-2xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {broken ? (
          <p className="font-mono text-sm text-neutral-500 p-12 max-w-xs text-center">
            [ image not found — add {src} to public/ ]
          </p>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? caption ?? ""}
            onError={() => setBroken(true)}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded"
          />
        )}
        {caption && !broken && (
          <p className="font-mono text-sm text-center text-neutral-600 mt-2">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
