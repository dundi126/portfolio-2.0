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
  presentation?: "laptop" | "browser" | "canvas" | "photo";
  image?: string;
  imagePosition?: string;
  imageFit?: "contain" | "cover";
  imageBackground?: string;
  repository?: string;
  repositoryNote?: string;
  evidence?: { src: string; alt: string; caption: string }[];
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
  {
    company: "Product Manager Accelerator",
    role: "Software Engineer Intern",
    dates: "May — Sept 2025",
  },
  {
    company: "Akcepted Tech",
    role: "Founding Software Developer",
    dates: "Nov 2023 — Jul 2024",
  },
  {
    company: "Flyers Soft Private Limited",
    role: "Software Developer Intern",
    dates: "Feb — May 2023",
  },
];

export const technicalGroups = [
  {
    label: "Languages",
    items: "Python · TypeScript · JavaScript · Java · SQL · C++",
  },
  {
    label: "AI & Backend",
    items: "OpenAI · LLaMA · Multi-Agent Systems · NEAT · EasyOCR · FastAPI",
  },
  {
    label: "Frontend",
    items: "React · Next.js · Flutter · Tailwind CSS · Livewire",
  },
  {
    label: "Data & Cloud",
    items: "PostgreSQL · MySQL · AWS · Kinesis · Docker · Apache Spark · HDFS",
  },
];

export const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued June 2026 · Expires June 2029",
    url: "/credentials/aws-certified-cloud-practitioner.pdf",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    date: "Course completed June 2026",
    url: "/credentials/anthropic-claude-101.pdf",
  },
];

export const projects: Project[] = [
  {
    slug: "therapy-ai",
    num: "01",
    title: "meet.ai",
    description: "An AI-powered video meeting platform with realtime agents, transcription, and intelligent post-call insights.",
    tags: ["Next.js", "OpenAI", "Stream Video", "Inngest"],
    year: "2026",
    context: "AI meeting platform",
    device: "desktop",
    palette: "#3f66d4",
    metric: "Realtime AI agents + automated summaries",
    presentation: "photo",
    image: "/project-images/mockups/therapy-ai-dashboard-product-mockup-v2.png",
    imagePosition: "center",
    repository: "https://github.com/dundi126/therapy-ai",
    evidence: [
      {
        src: "/project-images/therapy-ai/login.png",
        alt: "meet.ai authentication screen with Google and GitHub sign-in",
        caption: "Branded authentication flow with email, Google, and GitHub sign-in options.",
      },
      {
        src: "/project-images/therapy-ai/meetings-dashboard.png",
        alt: "meet.ai meetings dashboard",
        caption: "The real meetings workspace for filtering sessions, managing agents, and starting new meetings.",
      },
    ],
    caseStudy: {
      overview: "meet.ai is a full-stack AI meeting platform where configurable OpenAI agents can join live Stream Video calls, followed by automated transcription and AI-powered summaries.",
      role: "Full-Stack AI Engineer",
      timeline: "Independent project",
      team: "Architecture, AI, backend, and frontend",
      problem: "Video meetings generate valuable conversations, but participants still need to manually capture notes, identify insights, and turn the discussion into useful follow-up.",
      process: [
        { step: "Connect", detail: "Integrated Stream Video and webhooks so an OpenAI Realtime agent can join when a live call session starts." },
        { step: "Architect", detail: "Designed a type-safe tRPC API with TanStack Query and PostgreSQL through Drizzle ORM on Neon serverless." },
        { step: "Automate", detail: "Built an event-driven Inngest pipeline that processes recordings and transcripts into AI-powered meeting summaries." },
        { step: "Productize", detail: "Added Better Auth with GitHub and Google OAuth, Stream Chat, free-tier limits, and Polar subscription upgrade flows." },
      ],
    },
  },
  {
    slug: "nutrilens-ai",
    num: "02",
    title: "NutriLensAI",
    description: "A hybrid AI system that reads nutrition labels and explains whether a product is healthy, cautionary, or best avoided.",
    tags: ["EasyOCR", "Neural Networks", "Explainable AI", "Python"],
    year: "2025",
    context: "Advanced AI project",
    device: "desktop",
    palette: "#27352f",
    metric: "84%+ validation accuracy across three classes",
    presentation: "photo",
    image: "/project-images/mockups/nutrilens-product-mockup.png",
    imagePosition: "center",
    evidence: [
      {
        src: "/project-images/nutrilens-loss.png",
        alt: "NutriLensAI training and validation loss chart",
        caption: "Training loss decreased from approximately 1.1 to 0.24 while validation loss stabilized near 0.43.",
      },
      {
        src: "/project-images/nutrilens-confusion-matrix.png",
        alt: "NutriLensAI confusion matrix",
        caption: "The final model produced balanced results across Healthy, Caution, and Avoid classifications.",
      },
    ],
    caseStudy: {
      overview: "NutriLensAI combines OCR, nutrition-domain rules, and a rule-augmented neural network to turn difficult food labels into understandable health guidance.",
      role: "AI / Machine Learning Developer",
      timeline: "CIS 585 Advanced Artificial Intelligence · Winter 2025",
      team: "3-person academic team",
      problem: "Nutrition labels contain useful health information, but interpreting their terminology and values requires time and nutritional knowledge that many consumers do not have.",
      process: [
        { step: "Extract", detail: "Used EasyOCR with grayscale preprocessing and text-region detection to extract calories, sugar, sodium, fat, fiber, and other nutrition values." },
        { step: "Explain", detail: "Encoded nutrition-domain rules as transparent signals, including thresholds for sugar, sodium, fat, and fiber." },
        { step: "Classify", detail: "Designed a rule-augmented multi-layer perceptron with weighted cross-entropy to classify labels as Healthy, Caution, or Avoid." },
        { step: "Validate", detail: "Applied early stopping and best-model checkpointing, then evaluated performance through loss curves and a three-class confusion matrix." },
      ],
    },
  },
  {
    slug: "oishii",
    num: "03",
    title: "Oishii",
    description: "A deployed restaurant ordering platform with menu management, checkout, and four role-based user journeys.",
    tags: ["PHP", "MySQL", "REST APIs", "Stripe"],
    year: "2025",
    context: "Team full-stack project",
    device: "desktop",
    palette: "#d05c3d",
    metric: "Guest, customer, staff, and admin workflows",
    presentation: "photo",
    image: "/project-images/mockups/oishii-product-mockup.png",
    imagePosition: "center",
    repository: "https://github.com/dundi126/Oishii-Restaurant",
    caseStudy: {
      overview: "Oishii is a deployed Japanese restaurant platform that connects a responsive ordering experience with menu, cart, payment, staff, and administrative workflows.",
      role: "Backend and REST API Developer",
      timeline: "CIS 525 term project · Fall 2025",
      team: "3-person academic team",
      problem: "Small restaurants need an organized digital experience that helps customers discover food and place orders while giving staff practical tools to manage menu and order data.",
      process: [
        { step: "Define", detail: "Mapped guest, customer, staff, and admin permissions across menu browsing, checkout, order updates, and content management." },
        { step: "Build", detail: "Led REST API development, backend logic, and controller and service implementation for the ordering workflows." },
        { step: "Model", detail: "Connected the application to a normalized MySQL schema covering users, menu items, customizations, orders, and categories." },
        { step: "Test", detail: "Validated cart operations, CRUD behavior, role access, responsive layouts, browser compatibility, and frontend-backend integration." },
      ],
    },
  },
  {
    slug: "safe-ui",
    num: "04",
    title: "SafeUI",
    description: "A reusable TypeScript package that keeps interfaces stable when APIs fail.",
    tags: ["Next.js", "TypeScript", "Resilience", "DX"],
    year: "2025",
    context: "Developer tooling",
    device: "desktop",
    palette: "#d6ac2d",
    metric: "Automatic timeout, retry, and recovery",
    presentation: "photo",
    image: "/project-images/mockups/safe-ui-product-mockup.png",
    imagePosition: "center",
    repository: "https://github.com/dundi126/Safe-UI",
    caseStudy: {
      overview: "SafeUI is a reusable TypeScript package designed to prevent interface crashes during API failures and make resilient states easy to implement.",
      role: "Package Author",
      timeline: "Independent project",
      team: "API design and component engineering",
      problem: "API failures often leave users with broken or ambiguous interfaces, while development teams repeatedly rebuild loading, empty, and error states.",
      process: [
        { step: "Standardize", detail: "Designed a consistent API handling layer with automatic timeouts, retries, and standardized errors." },
        { step: "Design", detail: "Created configurable loading, empty, and error components with single-click retry behavior." },
        { step: "Package", detail: "Added complete TypeScript definitions for predictable integration into Next.js applications." },
        { step: "Protect", detail: "Turned common failure scenarios into reusable UI states that keep products responsive and understandable." },
      ],
    },
  },
  {
    slug: "ai-car-simulation",
    num: "05",
    title: "AI Car Simulation",
    description: "An autonomous driving simulation that evolves neural networks to navigate a track without human input.",
    tags: ["Python", "NEAT", "Pygame", "Machine Learning"],
    year: "2024",
    context: "CIS 579 AI project",
    device: "desktop",
    palette: "#29705d",
    metric: "Five-sensor navigation evolved over generations",
    presentation: "photo",
    image: "/project-images/mockups/ai-car-product-mockup.png",
    imagePosition: "center",
    repository: "https://github.com/dundi126/AI-Car-Simulator-Using-NEAT-Algorithm",
    caseStudy: {
      overview: "An autonomous driving simulation using NeuroEvolution of Augmenting Topologies to train a car to navigate a track through repeated genetic evolution.",
      role: "Machine Learning Developer",
      timeline: "CIS 579 Artificial Intelligence · Fall 2024",
      team: "4-person academic team",
      problem: "Autonomous navigation requires a decision-making system that can improve from feedback without relying on manually programmed driving rules.",
      process: [
        { step: "Sense", detail: "Equipped each simulated car with five live sensors measuring obstacle distance, speed, and track position." },
        { step: "Evolve", detail: "Used NEAT to evolve both neural-network structure and weights through selection, crossover, mutation, and species diversity." },
        { step: "Reward", detail: "Designed a fitness function around efficient, collision-free navigation across tracks with tight turns and narrow lanes." },
        { step: "Evaluate", detail: "Tracked fitness, survival, speed, and steering behavior across generations through simulation logs and visualizations." },
      ],
    },
  },
  {
    slug: "multi-agent-consensus",
    num: "06",
    title: "Multi-Agent Consensus Engine",
    description: "Five LLaMA-powered agents collaborate to produce faster, confidence-weighted responses.",
    tags: ["Python", "FastAPI", "LLaMA", "React"],
    year: "2026",
    context: "Private AI prototype",
    device: "desktop",
    palette: "#5b52d6",
    metric: "68% lower inference latency",
    presentation: "photo",
    image: "/project-images/mockups/multi-agent-product-mockup.png",
    imagePosition: "center",
    repositoryNote: "Private prototype · repository available on request",
    caseStudy: {
      overview: "A multi-agent AI prototype that orchestrates five LLaMA-powered agents and visualizes their real-time consensus in a React dashboard.",
      role: "Full-Stack AI Engineer",
      timeline: "Independent project",
      team: "AI orchestration, API, and frontend",
      problem: "Single-model responses can lack diversity and confidence signals, while sequential multi-agent workflows introduce too much latency for an interactive product.",
      process: [
        { step: "Orchestrate", detail: "Designed role-specific generator, critic, and validator prompts to improve response quality, diversity, and accuracy." },
        { step: "Accelerate", detail: "Implemented parallel asynchronous execution through FastAPI, reducing end-to-end inference latency from eight seconds to 2.5 seconds." },
        { step: "Decide", detail: "Built a confidence-weighted voting algorithm to turn multiple agent perspectives into a clear consensus response." },
        { step: "Validate", detail: "Developed a React dashboard for real-time consensus and reached 85% pytest coverage for backend validation and error handling." },
      ],
    },
  },
];

export const smallProjects = [
  {
    title: "Automatic License Plate Recognition",
    description: "Computer-vision and OCR pipeline with preprocessing, result grading, and failure analysis.",
    tags: ["OpenCV", "OCR", "Computer Vision"],
    year: "2025",
    repository: "https://github.com/dundi126/ALPR-Using-OpenCV",
  },
  {
    title: "Smart Door Authentication System",
    description: "Serverless access-control pipeline using live facial recognition, expiring OTPs, and visitor onboarding.",
    tags: ["AWS Rekognition", "Kinesis", "Lambda", "DynamoDB"],
    year: "2025",
  },
  {
    title: "Distributed PageRank on Spark",
    description: "Deployed Hadoop and Spark across a Docker Swarm, implemented PageRank, and tested partitioning, persistence, and worker failures.",
    tags: ["Apache Spark", "HDFS", "Scala", "Docker Swarm"],
    year: "2025",
  },
  {
    title: "Serverless Product Search Chatbot",
    description: "AWS Lex chatbot that searches eBay through an event-driven pipeline using Lambda, SQS, DynamoDB, and SNS.",
    tags: ["AWS Lex", "Lambda", "SQS", "DynamoDB"],
    year: "2026",
  },
  {
    title: "Vending Machine Microservices",
    description: "Course prototype connecting beverage, weather, and ordering services through Thrift RPC, Docker, and Nginx.",
    tags: ["C++", "Thrift RPC", "Docker", "Nginx"],
    year: "2025",
    repository: "https://github.com/dundi126/Umich_cis578_vending-machine-microservices",
  },
];
