import SubWindow from "./sub-window";

interface ExperienceWindowProps {
  onClose: () => void;
}

const jobs = [
  {
    role: "Backend Software Engineer",
    org: "ProgressSoft · 2025",
    blurb:
      "Built a transaction-processing engine simulating the bank's real cheque workflow — Spring Boot, Maven, JWT auth, and Docker.",
  },
  {
    role: "Software & Legal Intern",
    org: "Tamatem Games · May – Aug 2024",
    blurb:
      "Rotated through every link in the org chart — engineering, DevOps, design, QA, product, and the C-suite — then flagged a store-policy fix projected to lift sales 30%.",
  },
  {
    role: "Computer Science Captain",
    org: "Skidmore PAC · Jan 2025 – Present",
    blurb:
      "Lead 4 coaches teaching data structures, algorithms, and software development to 150+ students, plus the program's social media.",
  },
];

export default function ExperienceWindow({ onClose }: ExperienceWindowProps) {
  return (
    <SubWindow title="experience" onClose={onClose}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {jobs.map((job) => (
          <div
            key={job.role}
            className="group rounded-2xl border-2 border-accent/20 p-8 flex flex-col gap-4 cursor-default transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:shadow-xl hover:scale-[1.04]"
          >
            <p className="font-mono text-sm uppercase tracking-widest text-muted">
              {job.org}
            </p>
            <p className="text-4xl text-highlight leading-tight transition-colors">
              {job.role}
            </p>
            <p className="text-xl text-muted leading-snug">{job.blurb}</p>
          </div>
        ))}
      </div>
    </SubWindow>
  );
}
