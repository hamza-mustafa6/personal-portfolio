export default function Decorations() {
  return (
    <div aria-hidden className="pointer-events-none">
      {/* Sparkle — top left, in the accent color for a pop */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="hidden md:block fixed top-[16%] left-[15%] z-10 w-10 h-10 text-highlight animate-pulse"
      >
        <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" />
      </svg>

      {/* Small sparkle — upper right */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="hidden md:block fixed top-[24%] right-[18%] z-10 w-6 h-6 text-highlight/70 animate-pulse"
      >
        <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" />
      </svg>

      {/* Little robot — bottom right, line art */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden md:block fixed bottom-8 right-10 z-10 w-28 h-28 text-accent/60"
      >
        {/* antenna */}
        <line x1="32" y1="6" x2="32" y2="14" />
        <circle cx="32" cy="5" r="2.5" fill="currentColor" stroke="none" />
        {/* ears */}
        <line x1="14" y1="26" x2="9" y2="26" />
        <line x1="50" y1="26" x2="55" y2="26" />
        {/* head */}
        <rect x="14" y="14" width="36" height="30" rx="9" />
        {/* eyes */}
        <circle cx="25" cy="28" r="3" fill="currentColor" stroke="none" />
        <circle cx="39" cy="28" r="3" fill="currentColor" stroke="none" />
        {/* smile */}
        <path d="M24 35 q8 6 16 0" />
      </svg>
    </div>
  );
}
