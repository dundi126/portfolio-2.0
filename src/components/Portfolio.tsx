"use client";

import { ArrowDown, ArrowUpRight, Award, Clock3, MapPin, Menu, X } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { credentials, experience, projects, smallProjects, technicalGroups, type Project } from "@/data/portfolio";
import AnimateIn from "./AnimateIn";
import CaseStudyModal from "./CaseStudyModal";
import ProjectVisual from "./ProjectVisual";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-5 text-[10px] font-medium uppercase tracking-[.2em] ${
        dark ? "text-white/45" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}

function HeroGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 34, damping: 20, mass: 1.45 });
  const springY = useSpring(y, { stiffness: 34, damping: 20, mass: 1.45 });

  useEffect(() => {
    if (reduceMotion) return;

    let pointerX = 0;
    let pointerY = 0;
    let animationFrame = 0;

    const move = (event: PointerEvent) => {
      if (window.innerWidth < 640) return;
      pointerX = ((event.clientX / window.innerWidth) - 0.5) * 72;
      pointerY = ((event.clientY / window.innerHeight) - 0.5) * 52;
    };
    const reset = () => {
      pointerX = 0;
      pointerY = 0;
    };
    const drift = () => {
      if (window.innerWidth < 640) {
        x.set(0);
        y.set(0);
        animationFrame = window.requestAnimationFrame(drift);
        return;
      }

      const time = Date.now() / 1000;
      x.set(pointerX + Math.sin(time * 0.34) * 10 + Math.sin(time * 0.17) * 4);
      y.set(pointerY + Math.cos(time * 0.28) * 8);
      animationFrame = window.requestAnimationFrame(drift);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("blur", reset);
    animationFrame = window.requestAnimationFrame(drift);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", reset);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion, x, y]);

  return <motion.div aria-hidden className="hero-glow" style={{ x: springX, y: springY }} />;
}

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [navOnDark, setNavOnDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const updateNavTheme = () => {
      const work = document.getElementById("work");
      if (!work) return;
      const bounds = work.getBoundingClientRect();
      setNavOnDark(bounds.top <= 46 && bounds.bottom >= 46);
    };

    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);
    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, []);

  return (
    <div className="grain">
      <nav className="fixed left-0 right-0 top-3 z-40 px-3 sm:top-4 sm:px-4">
        <div className={`mx-auto flex h-14 max-w-[1100px] items-center justify-between rounded-full border px-4 shadow-[0_12px_45px_rgba(22,31,44,.1)] backdrop-blur-2xl transition-colors duration-500 sm:px-7 ${
          navOnDark
            ? "border-white/20 bg-white/15 text-paper"
            : "border-white/35 bg-white/45 text-ink"
        }`}>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold">
            Dundi Gutti<span className="text-accent">.</span>
          </a>
          <div className="hidden items-center gap-8 text-xs sm:flex">
            <a className="transition hover:opacity-50" href="#experience">Experience</a>
            <a className="transition hover:opacity-50" href="#work">Projects</a>
            <a className="transition hover:opacity-50" href="#about">About</a>
          </div>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full sm:hidden ${navOnDark ? "bg-white text-ink" : "bg-ink text-paper"}`}
          >
            {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
          <a href="/Dundi-Vignesh-Gutti-Resume.pdf" target="_blank" rel="noopener noreferrer" className={`hidden rounded-full px-4 py-2 text-[11px] font-medium transition hover:scale-[1.03] sm:block ${
            navOnDark ? "bg-white text-ink" : "bg-ink text-paper"
          }`}>
            Resume <ArrowUpRight className="ml-1 inline" size={11} />
          </a>
        </div>
        {mobileMenuOpen && (
          <div className={`mx-auto mt-2 grid max-w-[1100px] overflow-hidden rounded-2xl border p-2 text-sm shadow-[0_12px_45px_rgba(22,31,44,.14)] backdrop-blur-2xl sm:hidden ${
            navOnDark
              ? "border-white/20 bg-[#151614]/90 text-paper"
              : "border-white/50 bg-white/85 text-ink"
          }`}>
            {[
              ["Experience", "#experience"],
              ["Projects", "#work"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3.5 transition hover:bg-black/5">
                {label}
              </a>
            ))}
            <a href="/Dundi-Vignesh-Gutti-Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-black/5">
              Resume <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </nav>

      <header className="atmosphere relative min-h-[100svh] overflow-hidden">
        <HeroGlow />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-between px-5 pb-10 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24">
          <AnimateIn>
            <div className="flex items-center justify-between gap-3 border-b border-ink/40 pb-4 text-[11px] sm:pb-5 sm:text-xs">
              <span className="flex min-w-0 items-center gap-1.5 sm:gap-2"><MapPin className="shrink-0" size={13} /><span className="truncate">Detroit Metropolitan Area</span></span>
              <span className="flex items-center gap-2 font-medium"><Clock3 size={13} /><LiveClock /></span>
            </div>
          </AnimateIn>

          <div className="py-8 sm:py-12">
            <AnimateIn delay={0.08}>
              <p className="mb-5 max-w-[290px] text-[10px] uppercase leading-5 tracking-[.18em] sm:mb-7 sm:max-w-none sm:text-xs sm:tracking-[.2em]">Full-Stack AI Engineer · MS CS @ UM-Dearborn</p>
              <h1 className="max-w-[1000px] text-[clamp(3.3rem,16vw,4.75rem)] font-medium leading-[.96] tracking-[-.055em] sm:text-[92px] md:text-[122px]">
                Hi, this is Dundi.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-6 text-ink/70 sm:mt-8 sm:text-lg sm:leading-7">
                I build production-grade AI systems, scalable backends, and thoughtful full-stack products.
              </p>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.16}>
            <div className="grid grid-cols-2 border-y border-ink/30 text-ink/76 md:grid-cols-3 md:divide-x md:divide-ink/24">
              <div className="col-span-2 flex items-center gap-3 border-b border-ink/18 py-3.5 md:col-span-1 md:border-b-0 md:py-4 md:pr-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-45" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,.1)]" />
                </span>
                <span className="text-xs font-medium">Open to opportunities</span>
              </div>
              <div className="border-r border-ink/18 py-3.5 pr-3 text-[11px] font-medium leading-5 md:border-r-0 md:px-5 md:py-4 md:text-xs">Previously →<br className="md:hidden" /> <span className="font-semibold text-ink/82">PMA · Akcepted Tech</span></div>
              <a href="#work" className="flex items-center justify-between gap-2 py-3.5 pl-3 text-[11px] font-medium leading-5 transition hover:text-ink md:py-4 md:pl-5 md:text-xs">
                View projects <ArrowDown className="shrink-0" size={14} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </header>

      <main>
        <section id="experience" className="mx-auto max-w-[1100px] px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32">
          <AnimateIn>
            <div className="grid gap-7 md:grid-cols-[1fr_2fr] md:gap-8">
              <div>
                <Eyebrow>Experience</Eyebrow>
                <p className="max-w-[310px] font-serif text-[2.35rem] leading-[1.04] md:max-w-[240px] md:text-3xl md:leading-tight">Shipping reliable software from interface to infrastructure.</p>
              </div>
              <div className="grid gap-3 sm:gap-0">
                {experience.map((item, index) => (
                  <AnimateIn key={item.company} delay={index * 0.06}>
                    <div className="group grid gap-3 rounded-2xl border border-line/80 bg-white/45 p-4 transition sm:rounded-none sm:border-x-0 sm:border-b-0 sm:border-t sm:bg-transparent sm:px-0 sm:py-5 sm:grid-cols-[1.2fr_1fr_auto] sm:gap-6 sm:hover:pl-2">
                      <div className="flex items-start justify-between gap-3 sm:block">
                        <p className="text-sm font-semibold sm:font-medium">{item.company}</p>
                        <p className="shrink-0 text-[10px] uppercase tracking-[.08em] text-muted sm:hidden">{item.dates}</p>
                      </div>
                      <p className="text-sm text-muted">{item.role}</p>
                      <p className="hidden text-xs text-muted sm:block">{item.dates}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>
        </section>

        <section className="mx-auto max-w-[1100px] px-4 pb-14 sm:px-8 sm:pb-20">
          <AnimateIn>
            <Eyebrow>Technical toolkit</Eyebrow>
            <div className="grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2 sm:gap-0 sm:border-t sm:border-line md:grid-cols-2">
              {technicalGroups.map((group) => (
                <div key={group.label} className="min-w-0 rounded-2xl border border-line/80 bg-white/45 p-4 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:bg-transparent sm:py-5 md:odd:pr-8 md:even:border-l md:even:pl-8">
                  <p className="mb-2 text-[10px] uppercase tracking-[.16em] text-muted">{group.label}</p>
                  <p className="text-xs leading-5 sm:text-sm sm:leading-6">{group.items}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>

        <section className="mx-auto max-w-[1100px] px-4 pb-16 sm:px-8 sm:pb-20">
          <AnimateIn>
            <Eyebrow>Credentials</Eyebrow>
            {credentials.map((credential) => (
              <a
                key={credential.title}
                href={credential.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 rounded-2xl border border-line/80 bg-white/50 p-4 transition sm:rounded-none sm:border-x-0 sm:border-y sm:bg-transparent sm:px-0 sm:py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4 sm:hover:px-2"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper"><Award size={17} /></span>
                <div>
                  <p className="text-sm font-medium">{credential.title}</p>
                  <p className="mt-1 text-xs text-muted">{credential.issuer} · {credential.date}</p>
                </div>
                <span className="col-start-2 flex items-center gap-2 text-xs text-muted transition group-hover:text-ink sm:col-start-auto">View certificate <ArrowUpRight size={13} /></span>
              </a>
            ))}
          </AnimateIn>
        </section>

        <section id="work" className="bg-[#080908] py-20 text-paper sm:py-32">
          <div className="mx-auto max-w-[1240px] px-3 sm:px-8">
            <AnimateIn>
              <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-5 sm:mb-10 sm:pb-6">
                <div>
                  <Eyebrow dark>Gallery · Selected work</Eyebrow>
                  <h2 className="max-w-[310px] font-serif text-5xl leading-[.95] sm:max-w-none sm:text-7xl sm:leading-none">Systems built to ship.</h2>
                </div>
                <p className="hidden max-w-[220px] text-right text-xs leading-5 text-white/60 md:block">
                  AI systems, SaaS products, and developer tools built around measurable outcomes.
                </p>
              </div>
            </AnimateIn>

            <div className="grid gap-x-5 gap-y-12 sm:gap-y-14 md:grid-cols-2">
              {projects.map((project, index) => (
                <AnimateIn key={project.slug} delay={(index % 2) * 0.08} className="work-card border-b border-white/15 pb-10 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0">
                  <button
                    aria-label={`Open ${project.title} case study`}
                    onClick={() => setSelected(project)}
                    className="group w-full text-left"
                  >
                    <div className="project-art overflow-hidden rounded-xl sm:rounded-[6px]">
                      <div className="transition duration-700 group-hover:scale-[1.025]">
                        <ProjectVisual project={project} gallery />
                      </div>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3 px-1 sm:mt-5 sm:gap-4 sm:px-0">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold sm:text-xl">{project.title} <span className="mt-1 block text-sm font-normal text-white/55 sm:mt-0 sm:inline sm:text-xl"><span className="hidden sm:inline">| </span>{project.context}</span></h3>
                        <p className="mt-2 max-w-md text-[13px] leading-5 text-white/65 sm:text-sm sm:leading-6">{project.description}</p>
                      </div>
                      <ArrowUpRight size={20} className="mt-1 shrink-0 text-white/55 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                  </button>
                </AnimateIn>
              ))}
            </div>

            <div className="mt-20 rounded-2xl border border-white/10 bg-white/[.025] px-3 pt-5 sm:mt-24 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:pt-0">
              <AnimateIn><Eyebrow dark>Other explorations</Eyebrow></AnimateIn>
              {smallProjects.map((project, index) => (
                <AnimateIn key={project.title} delay={index * 0.05}>
                  <a
                    href={project.repository}
                    target={project.repository ? "_blank" : undefined}
                    rel={project.repository ? "noopener noreferrer" : undefined}
                    aria-label={project.repository ? `View ${project.title} repository` : undefined}
                    className={`group grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 border-t border-white/15 py-5 transition first:border-t-0 sm:first:border-t sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_5rem] sm:items-center sm:gap-6 sm:py-6 ${project.repository ? "hover:bg-white/[.025]" : "cursor-default"}`}
                  >
                    <p className="text-sm font-medium">{project.title}</p>
                    <div className="col-span-2 min-w-0 sm:col-span-1">
                      <p className="text-sm text-white/45">{project.description}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[.12em] text-white/30">{project.tags.join(" · ")}</p>
                    </div>
                    <div className="col-start-2 row-start-1 flex items-center justify-end gap-3 sm:col-start-auto sm:row-start-auto"><span className="text-xs text-white/35">{project.year}</span>{project.repository && <ArrowUpRight size={13} className="opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />}</div>
                  </a>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1100px] px-4 py-20 sm:px-8 sm:py-32">
          <AnimateIn><Eyebrow>About</Eyebrow></AnimateIn>
          <div className="grid gap-8 border-t border-line pt-7 md:grid-cols-[1.1fr_1fr] md:gap-20 md:pt-8">
            <AnimateIn>
              <h2 className="font-serif text-[2.4rem] leading-[1.05] sm:text-6xl sm:leading-[1.08]">
                I enjoy turning ambitious ideas into reliable products.
              </h2>
            </AnimateIn>
            <div className="space-y-5 text-sm leading-7 text-ink/70 sm:space-y-6 sm:text-base sm:leading-8">
              <AnimateIn>
                <p>
                  I’m a full-stack and AI engineer completing my MS in Computer Science at the University of Michigan-Dearborn. My work spans AI agents, machine learning, scalable backend systems, and thoughtful web experiences.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p>
                  I’m most energized by problems that require both experimentation and engineering discipline: understanding the user need, choosing a practical architecture, and carrying the product through to a dependable result.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p className="rounded-2xl border border-line bg-white/55 p-4 font-medium text-ink sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                  Currently seeking Software Engineer and AI/ML Engineer opportunities where I can learn quickly, contribute across the stack, and ship meaningful work.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-24 mx-auto max-w-[1100px] px-4 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-12">
          <AnimateIn>
            <p className="font-serif text-[2.7rem] leading-[.98] sm:text-7xl sm:leading-none">Let’s build something<br /><span className="text-muted">intelligent and reliable.</span></p>
            <div className="mt-10 grid gap-0 border-t border-line text-xs sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:pt-6">
              <div className="border-b border-line py-5 sm:border-0 sm:py-0"><p className="mb-2 text-muted">Status</p><p>Open to Software Engineer<br />and AI/ML Engineer roles.</p></div>
              <div className="border-b border-line py-5 sm:border-0 sm:py-0"><p className="mb-2 text-muted">Contact</p><a className="block py-1 hover:underline sm:py-0" href="mailto:dundi@umich.edu">dundi@umich.edu</a><a className="block py-1 hover:underline sm:py-0" href="https://www.linkedin.com/in/dundi" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="block py-1 hover:underline sm:py-0" href="https://github.com/dundi126" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
              <div className="py-5 sm:py-0 sm:text-right"><p className="mb-2 text-muted">Education</p><p>MS CS, UM-Dearborn · 2026<br />BE CS, NHCE · 2023</p></div>
            </div>
          </AnimateIn>
        </footer>
      </main>

      <CaseStudyModal project={selected} onClose={closeModal} />
    </div>
  );
}
