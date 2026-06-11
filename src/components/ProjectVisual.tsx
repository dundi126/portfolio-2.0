import type { Project } from "@/data/portfolio";
import { ArrowUpRight, Check, MapPin } from "lucide-react";

export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.device === "desktop") {
    return (
      <div className={`project-grid relative flex items-end justify-center overflow-hidden ${large ? "h-[360px] md:h-[460px]" : "h-56"}`} style={{ backgroundColor: project.palette }}>
        <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[.18em] text-white/70">Case study · {project.year}</div>
        <div className={`translate-y-5 rounded-t-xl bg-[#f9f9f5] p-2 shadow-2xl ${large ? "w-[82%]" : "w-[84%]"}`}>
          <div className="mb-2 flex h-3 items-center gap-1 rounded-sm bg-white px-1.5">
            <i className="h-1 w-1 rounded-full bg-red-300" /><i className="h-1 w-1 rounded-full bg-yellow-300" /><i className="h-1 w-1 rounded-full bg-green-300" />
          </div>
          <div className="grid grid-cols-[22%_1fr] gap-2">
            <div className="rounded-md bg-[#eaebe5] p-2">
              <div className="mb-5 h-2 w-9 rounded bg-black/70" />
              {[1,2,3,4].map((n) => <div key={n} className="mb-2 h-1.5 rounded bg-black/10" />)}
            </div>
            <div className="rounded-md bg-white p-3">
              <div className="mb-3 flex justify-between"><span className="h-2 w-16 rounded bg-black/70" /><span className="h-4 w-8 rounded bg-[#5b52d6]/20" /></div>
              <div className="grid grid-cols-3 gap-2">
                {[42,65,52].map((h,n) => <div key={n} className="flex h-20 items-end rounded bg-[#f0f0eb] p-2"><span className="w-full rounded-t bg-[#5b52d6]/70" style={{height:h}} /></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-grid relative flex items-end justify-center overflow-hidden ${large ? "h-[360px] md:h-[460px]" : "h-56"}`} style={{ backgroundColor: project.palette }}>
      <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[.18em] text-white/70">Case study · {project.year}</div>
      <div className={`translate-y-7 rounded-[28px] border-[5px] border-[#171813] bg-[#f9f9f5] p-2 shadow-2xl ${large ? "h-[390px] w-[190px] md:h-[450px] md:w-[220px]" : "h-[245px] w-[126px]"}`}>
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-[#171813]" />
        {project.slug === "wayfind" ? (
          <div className="relative h-full overflow-hidden rounded-[18px] bg-[#e9e3cf] p-3">
            <div className="mb-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[6px] text-black/50"><MapPin size={7}/> Gate A12</div>
            <div className="absolute bottom-0 left-0 h-2/3 w-full rotate-12 border-l-[5px] border-dashed border-[#24564a]/50" />
            <div className="absolute bottom-4 left-3 right-3 rounded-xl bg-[#24564a] p-2 text-[7px] text-white">Past the blue wall <ArrowUpRight size={8} className="float-right"/></div>
          </div>
        ) : (
          <div className="h-full overflow-hidden rounded-[18px] bg-white p-3">
            <div className="mb-4 flex items-center justify-between"><div className="h-2 w-10 rounded bg-black/70"/><div className="h-4 w-4 rounded-full" style={{backgroundColor:project.palette}}/></div>
            <div className="mb-3 rounded-xl p-3 text-white" style={{backgroundColor:project.palette}}><div className="mb-2 h-1.5 w-10 rounded bg-white/70"/><div className="text-[14px] font-medium">{project.slug === "budgetly" ? "$1,840" : "Today"}</div></div>
            {[1,2,3].map((n) => <div key={n} className="mb-2 flex items-center gap-2 rounded-lg bg-[#f0f0eb] p-2"><span className="grid h-4 w-4 place-items-center rounded-full bg-white"><Check size={8}/></span><span className="h-1.5 flex-1 rounded bg-black/15"/></div>)}
          </div>
        )}
      </div>
    </div>
  );
}
