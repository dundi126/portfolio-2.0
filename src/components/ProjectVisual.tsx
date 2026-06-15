import type { Project } from "@/data/portfolio";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import Image from "next/image";

function PlaceholderDashboard({ palette }: { palette: string }) {
  return (
    <div className="grid h-full grid-cols-[22%_1fr] gap-2 bg-[#f6f6f2] p-3">
      <div className="rounded-md bg-[#e5e6df] p-2">
        <div className="mb-5 h-2 w-9 rounded bg-black/70" />
        {[1,2,3,4].map((n) => <div key={n} className="mb-2 h-1.5 rounded bg-black/10" />)}
      </div>
      <div className="rounded-md bg-white p-3">
        <div className="mb-3 flex justify-between"><span className="h-2 w-16 rounded bg-black/70" /><span className="h-4 w-8 rounded" style={{ backgroundColor: `${palette}30` }} /></div>
        <div className="grid grid-cols-3 gap-2">
          {[42,65,52].map((height, index) => (
            <div key={index} className="flex h-20 items-end rounded bg-[#f0f0eb] p-2">
              <span className="w-full rounded-t opacity-75" style={{ height, backgroundColor: palette }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenContent({ project, large }: { project: Project; large: boolean }) {
  return project.image ? (
    <div className="relative h-full w-full" style={{ backgroundColor: project.imageBackground ?? "white" }}>
      <Image
        src={project.image}
        alt={`${project.title} project interface`}
        fill
        sizes={large ? "(max-width: 768px) 84vw, 980px" : "(max-width: 768px) 86vw, 540px"}
        className={project.imageFit === "cover" ? "object-cover" : "object-contain"}
        style={{ objectPosition: project.imagePosition ?? "center" }}
      />
    </div>
  ) : (
    <PlaceholderDashboard palette={project.palette} />
  );
}

export default function ProjectVisual({ project, large = false, gallery = false }: { project: Project; large?: boolean; gallery?: boolean }) {
  const visualHeight = large
    ? "h-[270px] sm:h-[360px] md:h-[500px]"
    : gallery
      ? "h-[220px] sm:h-[300px] md:h-[330px]"
      : "h-56";

  if (project.device === "desktop") {
    const presentation = project.presentation ?? "browser";
    const laptopWidth = large ? "w-[92%] sm:w-[88%] md:w-[82%]" : gallery ? "w-[92%] sm:w-[90%]" : "w-[86%]";
    const screenHeight = large ? "h-[190px] sm:h-[270px] md:h-[385px]" : gallery ? "h-[150px] sm:h-[220px] md:h-[242px]" : "h-40";

    return (
      <div className={`project-grid relative flex items-center justify-center overflow-hidden ${visualHeight}`} style={{ backgroundColor: project.palette }}>
        <div className="absolute left-3 top-3 z-10 text-[9px] uppercase tracking-[.16em] text-white/70 sm:left-5 sm:top-5 sm:text-[10px] sm:tracking-[.18em]">Case study · {project.year}</div>

        {presentation === "laptop" && (
          <div className={`relative mt-8 sm:mt-10 ${laptopWidth}`}>
            <div className="relative rounded-[10px] border border-white/25 bg-[#171816] p-[5px] shadow-[0_25px_55px_rgba(0,0,0,.38)] sm:rounded-[14px] sm:p-[7px]">
              <div className="absolute left-1/2 top-[5px] z-10 h-[6px] w-[34px] -translate-x-1/2 rounded-b-md bg-[#171816] sm:top-[7px] sm:h-[8px] sm:w-[48px]" />
              <div className={`overflow-hidden rounded-[6px] bg-white sm:rounded-[9px] ${screenHeight}`}>
                <ScreenContent project={project} large={large} />
              </div>
            </div>
            <div className="mx-auto h-[7px] w-[108%] -translate-x-[4%] rounded-b-[55%] bg-gradient-to-b from-[#e9e9e6] to-[#979994] shadow-[0_10px_16px_rgba(0,0,0,.25)] sm:h-[10px]">
              <div className="mx-auto h-[3px] w-[18%] rounded-b-full bg-[#c3c4bf]" />
            </div>
          </div>
        )}

        {presentation === "browser" && (
          <div className={`mt-8 overflow-hidden rounded-xl border border-white/15 bg-[#e7e7e3] p-1 shadow-[0_22px_45px_rgba(0,0,0,.3)] sm:mt-10 ${large ? "w-[92%] sm:w-[88%]" : gallery ? "w-[92%] sm:w-[90%]" : "w-[86%]"}`}>
            <div className="mb-1 flex h-4 items-center gap-1 rounded-md bg-white/90 px-2">
              <i className="h-1.5 w-1.5 rounded-full bg-[#ff715e]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#ffbe3f]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#44c966]" />
              <span className="mx-auto h-1.5 w-[38%] rounded-full bg-black/10" />
            </div>
            <div className={`overflow-hidden rounded-md ${screenHeight}`} style={{ backgroundColor: project.imageBackground ?? "white" }}>
              <ScreenContent project={project} large={large} />
            </div>
          </div>
        )}

        {presentation === "canvas" && (
          <div className={`relative mt-8 overflow-hidden rounded-lg border border-white/15 bg-white p-1 shadow-[0_22px_45px_rgba(0,0,0,.28)] sm:mt-10 ${large ? "h-[210px] w-[92%] sm:h-[300px] sm:w-[88%] md:h-[410px]" : gallery ? "h-[170px] w-[92%] sm:h-[250px] sm:w-[90%] md:h-[270px]" : "h-44 w-[86%]"}`}>
            <ScreenContent project={project} large={large} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
            {project.slug === "ai-car-simulation" && (
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 rounded-md border border-black/10 bg-white/90 px-2 py-1.5 text-[6px] font-medium uppercase tracking-[.08em] text-black/65 shadow-sm backdrop-blur sm:px-2.5 sm:text-[8px] sm:tracking-[.12em]">
                <span>NEAT training</span>
                <span className="hidden min-[360px]:inline">Generation 07</span>
                <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 3 cars active</span>
              </div>
            )}
          </div>
        )}

        {presentation === "photo" && (
          <div className={`relative mt-8 sm:mt-10 ${large ? "h-[210px] w-[94%] sm:h-[300px] sm:w-[92%] md:h-[410px]" : gallery ? "h-[170px] w-[94%] sm:h-[245px] sm:w-[92%] md:h-[265px]" : "h-44 w-[88%]"}`}>
            <div className="relative mx-auto aspect-[8/5] h-full max-w-full overflow-hidden rounded-[10px] shadow-[0_20px_32px_rgba(0,0,0,.34)]">
              <Image
                src={project.image!}
                alt={`${project.title} product mockup`}
                fill
                priority={project.slug === "therapy-ai"}
                sizes={large ? "(max-width: 768px) 88vw, 1050px" : "(max-width: 768px) 90vw, 600px"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                style={{ objectPosition: project.imagePosition ?? "center" }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`project-grid relative flex items-end justify-center overflow-hidden ${visualHeight}`} style={{ backgroundColor: project.palette }}>
      <div className="absolute left-3 top-3 text-[9px] uppercase tracking-[.16em] text-white/70 sm:left-5 sm:top-5 sm:text-[10px] sm:tracking-[.18em]">Case study · {project.year}</div>
      <div className={`translate-y-7 rounded-[28px] border-[5px] border-[#171813] bg-[#f9f9f5] p-2 shadow-2xl ${large ? "h-[390px] w-[190px] md:h-[470px] md:w-[230px]" : gallery ? "h-[280px] w-[142px] sm:h-[310px] sm:w-[158px]" : "h-[245px] w-[126px]"}`}>
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
