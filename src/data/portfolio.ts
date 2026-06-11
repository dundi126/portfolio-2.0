export type Project = {
  slug: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  context: string;
  device: "mobile" | "desktop";
  palette: string;
  metric: string;
  caseStudy: {
    overview: string;
    role: string;
    timeline: string;
    team: string;
    problem: string;
    process: { step: string; detail: string }[];
  };
};

export const experience = [
  { company: "Acme Design Studio", role: "Senior Product Designer", dates: "2023 — Present" },
  { company: "Bright Labs", role: "Product Designer", dates: "2021 — 2023" },
  { company: "Nova Agency", role: "Junior UX Designer", dates: "2019 — 2021" },
];

export const projects: Project[] = [
  {
    slug: "flowease",
    num: "01",
    title: "FlowEase",
    description: "A calmer way for remote teams to move work forward.",
    tags: ["Mobile", "Product Design", "UX Research"],
    year: "2024",
    context: "Client work",
    device: "mobile",
    palette: "#ff6846",
    metric: "40% fewer status messages",
    caseStudy: {
      overview: "FlowEase is a mobile task manager designed for remote teams who struggle with async communication and missed deadlines. I led the end-to-end design over 12 weeks.",
      role: "Lead Product Designer",
      timeline: "12 weeks, Q1 2024",
      team: "1 designer, 2 engineers, 1 PM",
      problem: "Remote teams were losing an average of four hours each week to unclear ownership and missed status updates. Existing tools felt too complex for non-technical teammates.",
      process: [
        { step: "Research", detail: "Ran eight interviews with remote team leads. The core frustration was not missing features, but unclear ownership." },
        { step: "Define", detail: "Turned findings into three principles: one owner per task, visible status at a glance, and zero setup cost." },
        { step: "Design", detail: "Created three directions, tested with five users, then refined the strongest idea into a high-fidelity prototype." },
        { step: "Outcome", detail: "Beta users reported 40% fewer status-update messages and a 28% improvement in task completion." },
      ],
    },
  },
  {
    slug: "wayfind",
    num: "02",
    title: "Wayfind",
    description: "Indoor navigation built around landmarks, not blue dots.",
    tags: ["Mobile", "Maps", "Accessibility"],
    year: "2023",
    context: "Personal project",
    device: "mobile",
    palette: "#24564a",
    metric: "100% first-attempt success",
    caseStudy: {
      overview: "Wayfind solves the frustrating experience of navigating large indoor venues. Accessibility is a core principle, not an afterthought.",
      role: "Solo designer — research, UX, visual design",
      timeline: "8 weeks, Q3 2023",
      team: "Solo project",
      problem: "Indoor navigation is often absent or buried in venue apps. People with mobility needs are especially underserved by vague routes.",
      process: [
        { step: "Observe", detail: "Observed 20 people navigating an airport and spoke with six frequent travelers, including wheelchair users." },
        { step: "Insight", detail: "People remembered landmarks far more easily than distances or compass directions." },
        { step: "Design", detail: "Built landmark-based directions and tested them with eight users across three iterations." },
        { step: "Outcome", detail: "Every test user found the destination on their first attempt, compared with 60% using standard directions." },
      ],
    },
  },
  {
    slug: "pulse-dashboard",
    num: "03",
    title: "Pulse",
    description: "A clear weekly health check for small businesses.",
    tags: ["Web", "Dashboard", "Data"],
    year: "2023",
    context: "Client work",
    device: "desktop",
    palette: "#5b52d6",
    metric: "2.5 hours → 15 minutes",
    caseStudy: {
      overview: "Pulse gives small business owners a single view of revenue, customers, and inventory without needing an analyst to interpret the data.",
      role: "Product Designer",
      timeline: "10 weeks, Q2 2023",
      team: "1 designer, 1 engineer",
      problem: "Owners spent hours exporting data from three separate tools and combining it in spreadsheets just to understand weekly performance.",
      process: [
        { step: "Research", detail: "Shadowed five owners during weekly reporting. Their spreadsheet workaround was universal." },
        { step: "Focus", detail: "Prioritized three questions: what changed, why it changed, and what needs attention now." },
        { step: "Design", detail: "Created a single-screen dashboard that puts three critical signals first and keeps detail available on demand." },
        { step: "Outcome", detail: "Reduced weekly reporting time from 2.5 hours to under 15 minutes, with an initial NPS of 72." },
      ],
    },
  },
  {
    slug: "budgetly",
    num: "04",
    title: "Budgetly",
    description: "Personal finance that starts with insight, not setup.",
    tags: ["Mobile", "Finance", "Onboarding"],
    year: "2022",
    context: "Academic project",
    device: "mobile",
    palette: "#d6ac2d",
    metric: "85% onboarding completion",
    caseStudy: {
      overview: "Budgetly makes personal finance approachable for people who have never tracked spending before.",
      role: "UX Designer — research, wireframes, prototype",
      timeline: "10 weeks, Fall 2022",
      team: "Team of 3 designers",
      problem: "Most budgeting apps assume financial literacy and make users complete tedious setup before showing anything useful.",
      process: [
        { step: "Research", detail: "Surveyed 40 students. Most had tried and abandoned a budgeting app because setup took too long." },
        { step: "Reframe", detail: "Changed onboarding from asking for information to immediately showing a useful view of last month's spending." },
        { step: "Design", detail: "Built a zero-setup flow where users connect an account, see a summary, then choose one achievable goal." },
        { step: "Outcome", detail: "Prototype testing showed an 85% onboarding completion rate, compared with a 34% category benchmark." },
      ],
    },
  },
];

export const smallProjects = [
  { title: "Icon System", description: "A flexible set of 120 product icons.", tags: ["Iconography", "Systems"], year: "2024" },
  { title: "Onboarding Redesign", description: "A three-step flow that reduced drop-off by 22%.", tags: ["UX", "Mobile"], year: "2023" },
  { title: "Design Tokens Workshop", description: "A hands-on systems workshop for a team of eight.", tags: ["Workshop"], year: "2023" },
  { title: "Portfolio v1", description: "My first coded personal website.", tags: ["Personal", "Web"], year: "2022" },
];
