"use client";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Volume2, VolumeX } from "lucide-react";
import Window from "./components/window";
import ExperienceWindow from "./components/experience-window";
import ResearchWindow from "./components/research-window";
import ProjectsWindow from "./components/projects-window";
import ContactWindow from "./components/contact-window";
import AboutWindow from "./components/about-window";
import ResumeWindow from "./components/resume-window";
import SocialBar from "./components/social-bar";
import Decorations from "./components/decorations";
import PhotoFrames from "./components/photo-frames";
import { playClick } from "./lib/click-sound";

export default function Home() {
  const [openWindow, setOpenWindow] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [dark, setDark] = useState(false);
  const mutedRef = useRef(false);

  // Keep the click handler reading the latest mute value.
  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  // Play a synthesized click on every click, unless muted.
  useEffect(() => {
    const handler = () => {
      if (!mutedRef.current) playClick();
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Restore saved theme on load.
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);

  // Apply + persist theme.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      {/* Landing screen — fades out and lets the main window expand over the name. */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-landing transition-opacity duration-700 ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setEntered(true)}
          className="text-white text-6xl md:text-8xl tracking-tight transition-all duration-200 hover:text-primary active:scale-90 cursor-pointer"
        >
          Hamza Mustafa
        </button>
        <p className="text-white/40 text-2xl mt-8 tracking-[0.3em] uppercase animate-pulse">
          click me
        </p>
      </div>

      {/* Top-left controls: theme + sound */}
      <div className="fixed top-6 left-6 z-40 flex gap-2">
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="p-2 rounded-lg text-accent hover:text-highlight hover:bg-background/60 transition-colors cursor-pointer"
        >
          {dark ? <Sun size={26} /> : <Moon size={26} />}
        </button>
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label="Toggle sound"
          className="p-2 rounded-lg text-accent hover:text-highlight hover:bg-background/60 transition-colors cursor-pointer"
        >
          {muted ? <VolumeX size={26} /> : <Volume2 size={26} />}
        </button>
      </div>

      <Decorations />
      <PhotoFrames />

      {/* Main site */}
      <main className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-16 px-4 overflow-x-hidden gap-10">
        <div
          className={`z-20 w-full max-w-5xl ${entered ? "animate-expand" : ""}`}
        >
          <Window onIconClick={setOpenWindow} activeWindow={openWindow} />
        </div>

        <SocialBar />

        {openWindow === "experience" && (
          <ExperienceWindow onClose={() => setOpenWindow(null)} />
        )}
        {openWindow === "research" && (
          <ResearchWindow onClose={() => setOpenWindow(null)} />
        )}
        {openWindow === "projects" && (
          <ProjectsWindow onClose={() => setOpenWindow(null)} />
        )}
        {openWindow === "contact" && (
          <ContactWindow onClose={() => setOpenWindow(null)} />
        )}
        {openWindow === "about" && (
          <AboutWindow onClose={() => setOpenWindow(null)} />
        )}
        {openWindow === "resume" && (
          <ResumeWindow onClose={() => setOpenWindow(null)} />
        )}
      </main>
    </>
  );
}
