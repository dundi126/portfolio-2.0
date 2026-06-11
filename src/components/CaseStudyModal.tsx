"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
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
          className="fixed inset-0 z-[100] bg-[#191a17]/45 p-3 backdrop-blur-md sm:p-[5vw] md:p-[7vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            className="modal-scrollbar relative mx-auto h-full max-w-[1120px] overflow-y-auto rounded-[22px] bg-paper shadow-soft"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button onClick={onClose} aria-label="Close case study" className="sticky right-4 top-4 z-20 float-right mr-4 mt-4 grid h-11 w-11 place-items-center rounded-full bg-white/85 shadow-lg backdrop-blur transition hover:rotate-90 hover:bg-white">
              <X size={18} />
            </button>
            <ProjectVisual project={project} large />
            <div className="mx-auto max-w-[820px] px-6 py-10 sm:px-10 md:py-16">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[.15em] text-muted">{project.tags.join(" · ")}</p>
              <h2 className="font-serif text-5xl leading-none sm:text-7xl">{project.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{project.caseStudy.overview}</p>
              <div className="my-12 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
                {[["Role", project.caseStudy.role], ["Timeline", project.caseStudy.timeline], ["Team", project.caseStudy.team]].map(([label, value]) => (
                  <div key={label}><p className="mb-2 text-[10px] uppercase tracking-[.14em] text-muted">{label}</p><p className="text-sm leading-6">{value}</p></div>
                ))}
              </div>
              <section className="mb-14 grid gap-6 md:grid-cols-[180px_1fr]">
                <p className="text-[11px] font-medium uppercase tracking-[.14em] text-muted">The problem</p>
                <p className="text-lg leading-8">{project.caseStudy.problem}</p>
              </section>
              <section>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[.14em] text-muted">How we got there</p>
                {project.caseStudy.process.map((item, index) => (
                  <div key={item.step} className="grid gap-3 border-t border-line py-6 md:grid-cols-[180px_1fr]">
                    <div className="flex gap-4"><span className="text-xs text-muted">0{index + 1}</span><h3 className="text-sm font-medium">{item.step}</h3></div>
                    <p className="text-sm leading-7 text-muted">{item.detail}</p>
                  </div>
                ))}
              </section>
              <div className="mt-14 rounded-2xl bg-ink p-8 text-paper sm:p-10">
                <p className="mb-8 text-[10px] uppercase tracking-[.16em] text-paper/55">Result</p>
                <p className="font-serif text-4xl sm:text-5xl">{project.metric}</p>
              </div>
              <button onClick={onClose} className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"><ArrowLeft size={15}/> Back to all work</button>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
