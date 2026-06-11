"use client";

import { ArrowDown, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { experience, projects, smallProjects, type Project } from "@/data/portfolio";
import AnimateIn from "./AnimateIn";
import CaseStudyModal from "./CaseStudyModal";
import ProjectVisual from "./ProjectVisual";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).format(new Date()));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[10px] font-medium uppercase tracking-[.18em] text-muted">{children}</p>;
}

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="grain">
      <nav className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8">
          <a href="#" className="text-sm font-medium">Alex Carter<span className="text-accent">.</span></a>
          <div className="hidden items-center gap-7 text-xs text-muted sm:flex">
            <a className="transition hover:text-ink" href="#experience">Experience</a>
            <a className="transition hover:text-ink" href="#work">Work</a>
            <a className="transition hover:text-ink" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="rounded-full border border-ink px-4 py-2 text-xs font-medium transition hover:bg-ink hover:text-paper">Resume <ArrowUpRight className="ml-1 inline" size={12}/></a>
        </div>
      </nav>

      <main className="mx-auto max-w-container px-5 sm:px-8">
        <section className="flex min-h-[calc(100vh-64px)] flex-col justify-between py-8 sm:py-12">
          <AnimateIn>
            <div className="flex items-center justify-between text-[11px] text-muted">
              <span className="flex items-center gap-2"><MapPin size={12}/> Detroit, MI</span>
              <span className="flex items-center gap-2"><Clock3 size={12}/><LiveClock /></span>
            </div>
          </AnimateIn>
          <div className="py-16">
            <AnimateIn delay={0.08}>
              <p className="mb-6 max-w-lg text-xs uppercase tracking-[.18em] text-muted">Product designer · curious builder</p>
              <h1 className="max-w-[850px] font-serif text-[52px] leading-[.94] tracking-[-.02em] sm:text-[76px] md:text-[102px]">
                I design things<br/><span className="text-muted">that feel right.</span>
              </h1>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.16}>
            <div className="grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
              <div className="flex items-center gap-3 border-b border-line py-4 md:border-b-0 md:pr-5"><span className="relative flex h-2.5 w-2.5"><span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-70"/><span className="relative h-2.5 w-2.5 rounded-full bg-green-500"/></span><span className="text-xs">Open to opportunities</span></div>
              <div className="py-4 text-xs text-muted md:px-5">Previously <span className="text-ink">Acme · Bright Labs</span></div>
              <a href="#work" className="flex items-center justify-between py-4 text-xs text-muted md:pl-5">Explore selected work <ArrowDown size={14}/></a>
            </div>
          </AnimateIn>
        </section>

        <section id="experience" className="py-20 sm:py-28">
          <AnimateIn><Eyebrow>Experience</Eyebrow></AnimateIn>
          <div>
            {experience.map((item, index) => (
              <AnimateIn key={item.company} delay={index * .06}>
                <div className="grid gap-1 border-t border-line py-5 transition hover:pl-2 sm:grid-cols-[1.2fr_1fr_auto] sm:gap-6">
                  <p className="text-sm font-medium">{item.company}</p><p className="text-sm text-muted">{item.role}</p><p className="text-xs text-muted">{item.dates}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        <section id="work" className="py-20 sm:py-28">
          <AnimateIn>
            <div className="mb-5 flex items-end justify-between"><Eyebrow>Selected work</Eyebrow><p className="mb-5 hidden text-xs text-muted sm:block">Click a project to read the case study</p></div>
          </AnimateIn>
          <div className="grid overflow-hidden rounded-2xl border border-line bg-line gap-px md:grid-cols-2">
            {projects.map((project, index) => (
              <AnimateIn key={project.slug} delay={(index % 2) * .08} className="h-full">
                <button aria-label={`Open ${project.title} case study`} onClick={() => setSelected(project)} className="group h-full w-full bg-paper p-3 text-left transition hover:bg-white">
                  <div className="overflow-hidden rounded-xl"><div className="transition duration-500 group-hover:scale-[1.02]"><ProjectVisual project={project}/></div></div>
                  <div className="p-3 pb-5 pt-5">
                    <div className="mb-3 flex items-center justify-between"><span className="text-[10px] text-muted">{project.num}</span><ArrowUpRight size={15} className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"/></div>
                    <h2 className="mb-2 font-serif text-3xl">{project.title}</h2>
                    <p className="max-w-xs text-sm leading-6 text-muted">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded-full bg-surface px-2.5 py-1 text-[9px] uppercase tracking-wide text-muted">{tag}</span>)}</div>
                  </div>
                </button>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-20">
            <AnimateIn><Eyebrow>Other explorations</Eyebrow></AnimateIn>
            {smallProjects.map((project, index) => (
              <AnimateIn key={project.title} delay={index * .05}>
                <div className="group grid gap-2 border-t border-line py-5 transition hover:px-2 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center sm:gap-6">
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-sm text-muted">{project.description}</p>
                  <div className="flex items-center gap-3"><span className="text-xs text-muted">{project.year}</span><ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100"/></div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-line pb-10 pt-20 sm:pt-28">
          <AnimateIn>
            <p className="font-serif text-5xl leading-none sm:text-7xl">Let’s make something<br/><span className="text-muted">useful together.</span></p>
            <div className="mt-16 grid gap-8 border-t border-line pt-6 text-xs sm:grid-cols-3">
              <div><p className="mb-2 text-muted">Status</p><p>Available for full-time roles<br/>and select freelance projects.</p></div>
              <div><p className="mb-2 text-muted">Contact</p><a className="block hover:underline" href="mailto:alex@email.com">alex@email.com</a><a className="block hover:underline" href="#">LinkedIn ↗</a></div>
              <div className="sm:text-right"><p className="mb-2 text-muted">Credits</p><p>Designed & coded by Alex Carter.<br/>All rights reserved.</p></div>
            </div>
          </AnimateIn>
        </footer>
      </main>
      <CaseStudyModal project={selected} onClose={closeModal}/>
    </div>
  );
}
