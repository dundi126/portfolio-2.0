"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Github, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/data/portfolio";
import ProjectVisual from "./ProjectVisual";

export default function CaseStudyModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#11120f]/70 p-1.5 backdrop-blur-xl sm:p-[5vw] md:p-[7vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            className="modal-scrollbar relative mx-auto h-full max-w-[1200px] overflow-y-auto rounded-[18px] bg-[#080908] text-paper shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:rounded-[28px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none sticky top-2 z-20 flex h-0 justify-end px-2 sm:top-4 sm:px-4">
              <button onClick={onClose} aria-label="Close case study" className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:rotate-90">
                <X size={18} />
              </button>
            </div>
            <ProjectVisual project={project} large />
            <div className="mx-auto max-w-[900px] px-5 py-9 sm:px-10 md:py-20">
              <p className="mb-4 text-[10px] font-medium uppercase leading-5 tracking-[.13em] text-paper/60 sm:mb-5 sm:text-[11px] sm:tracking-[.15em]">{project.tags.join(" · ")}</p>
              <h2 className="font-serif text-[2.65rem] leading-[.95] sm:text-7xl sm:leading-none">{project.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-paper/78 sm:mt-6 sm:text-xl sm:leading-9">{project.caseStudy.overview}</p>
              <div className="my-9 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-white/15 py-6 sm:my-12 sm:grid-cols-3 sm:gap-6 sm:py-7">
                {[["Role", project.caseStudy.role], ["Timeline", project.caseStudy.timeline], ["Team", project.caseStudy.team]].map(([label, value]) => (
                  <div key={label} className={label === "Team" ? "col-span-2 sm:col-span-1" : ""}><p className="mb-2 text-[10px] uppercase tracking-[.14em] text-paper/55">{label}</p><p className="text-sm leading-6 text-paper/90">{value}</p></div>
                ))}
              </div>
              <section className="mb-12 grid gap-4 md:mb-14 md:grid-cols-[180px_1fr] md:gap-6">
                <p className="text-[11px] font-medium uppercase tracking-[.14em] text-paper/55">The problem</p>
                <p className="text-base leading-7 text-paper/90 sm:text-lg sm:leading-8">{project.caseStudy.problem}</p>
              </section>
              <section>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[.14em] text-paper/55">How we got there</p>
                {project.caseStudy.process.map((item, index) => (
                  <div key={item.step} className="grid gap-3 border-t border-white/15 py-5 md:grid-cols-[180px_1fr] md:py-7">
                    <div className="flex gap-4"><span className="text-xs text-paper/50">0{index + 1}</span><h3 className="text-sm font-medium">{item.step}</h3></div>
                    <p className="pl-7 text-sm leading-6 text-paper/78 md:pl-0 md:leading-7">{item.detail}</p>
                  </div>
                ))}
              </section>
              {project.evidence && project.evidence.length > 0 && (
                <section className="mt-14">
                  <p className="mb-5 text-[11px] font-medium uppercase tracking-[.14em] text-paper/55">Evidence and evaluation</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.evidence.map((item) => (
                      <figure key={item.src} className="overflow-hidden rounded-xl border border-white/15 bg-white sm:rounded-2xl">
                        <div className="relative aspect-[4/3]">
                          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 90vw, 420px" className="object-contain p-3" />
                        </div>
                        <figcaption className="border-t border-black/10 px-5 py-4 text-xs leading-5 text-ink/65">{item.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
              <div className="mt-12 rounded-2xl bg-white p-6 text-ink sm:mt-14 sm:p-10">
                <p className="mb-6 text-[10px] uppercase tracking-[.16em] text-muted sm:mb-8">Result</p>
                <p className="font-serif text-3xl leading-tight sm:text-5xl">{project.metric}</p>
              </div>
              <div className="mt-10 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <button onClick={onClose} className="inline-flex items-center gap-2 text-sm text-paper/70 transition hover:text-paper"><ArrowLeft size={15}/> Back to all work</button>
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm text-paper/80 transition hover:border-white/50 hover:text-paper sm:w-auto sm:py-2">
                    <Github size={15}/> View repository
                  </a>
                )}
                {!project.repository && project.repositoryNote && (
                  <p className="inline-flex items-center gap-2 text-xs text-paper/45">
                    <Github size={14}/> {project.repositoryNote}
                  </p>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
