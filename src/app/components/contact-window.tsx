import SubWindow from "./sub-window";
import { Mail, Globe, Terminal, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ContactWindowProps {
  onClose: () => void;
}

interface ContactLink {
  label: string;
  value: string;
  href: string;
  Icon: LucideIcon;
}

const links: ContactLink[] = [
  {
    label: "Email",
    value: "hamza.a.mustafa@outlook.com",
    href: "mailto:hamza.a.mustafa@outlook.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-mustafa-5a2962297",
    href: "https://www.linkedin.com/in/hamza-mustafa-5a2962297/",
    Icon: Globe,
  },
  {
    label: "GitHub",
    value: "github.com/hamza-mustafa6",
    href: "https://github.com/hamza-mustafa6/",
    Icon: Terminal,
  },
  {
    label: "Phone",
    value: "518-316-2959",
    href: "tel:5183162959",
    Icon: Phone,
  },
];

export default function ContactWindow({ onClose }: ContactWindowProps) {
  return (
    <SubWindow title="Contact" onClose={onClose}>
      <div className="p-8 space-y-4">
        <p className="text-2xl text-muted mb-6">
          Open to internships, research, and coffee chats.
        </p>

        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-5 rounded-2xl border border-accent/15 hover:border-accent hover:bg-primary transition-all group"
          >
            <l.Icon size={32} strokeWidth={1.5} className="text-accent shrink-0" />
            <div>
              <p className="text-base text-muted">{l.label}</p>
              <p className="text-2xl text-foreground group-hover:text-accent transition-colors">
                {l.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </SubWindow>
  );
}
