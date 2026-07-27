interface WindowProps {
  onIconClick?: (name: string) => void;
  activeWindow?: string | null;
}

const tiles = [
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

export default function Window({ onIconClick, activeWindow }: WindowProps) {
  return (
    <div className="w-full rounded-xl border-2 border-accent/60 shadow-2xl overflow-hidden">
      <div className="w-full bg-accent flex items-center px-8 py-4">
        <h2 className="text-white text-2xl font-mono tracking-tight">~/hamza</h2>
      </div>

      <div className="w-full bg-background px-8 py-14 flex flex-col items-center">
        <h1 className="text-7xl text-foreground text-center leading-none">
          hi! i&apos;m <span className="text-highlight">Hamza</span>
        </h1>
        <p className="text-3xl text-muted mt-4 mb-12 text-center">
          Software Engineer · ML Researcher · Builder
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          {tiles.map((tile) => {
            const isActive = activeWindow === tile.id;
            return (
              <button
                key={tile.id}
                onClick={() => onIconClick?.(tile.id)}
                className={`
                  flex items-center justify-center
                  rounded-2xl border-2 py-7 px-4
                  text-3xl text-foreground tracking-wide
                  transition-all duration-150 cursor-pointer
                  ${
                    isActive
                      ? "border-accent bg-accent/10 shadow-inner scale-95"
                      : "border-accent/30 bg-primary/50 hover:border-accent hover:bg-accent/5 hover:scale-105 hover:shadow-md"
                  }
                `}
              >
                {tile.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
