import SubWindow from "./sub-window";

interface ResumeWindowProps {
  onClose: () => void;
}

export default function ResumeWindow({ onClose }: ResumeWindowProps) {
  return (
    <SubWindow title="Resume" onClose={onClose}>
      <div className="flex h-full flex-col gap-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-muted">A quick look at what I&apos;ve done.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-accent hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full flex-1 min-h-[520px] rounded-xl border border-accent/20 bg-white"
        />
      </div>
    </SubWindow>
  );
}
