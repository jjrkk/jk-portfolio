export interface ProcessCard {
  title: string
  description: string
  image: string
}

export interface ProcessCategory {
  id: string
  heading: string
  accent: string // the word after the slash
  description: string
  cards: ProcessCard[]
}

export const processCategories: ProcessCategory[] = [
  {
    id: "strategy",
    heading: "Strategy",
    accent: "discovery",
    description:
      "Comfort across the product design spectrum—from high level strategy to low level tactics & execution.",
    cards: [
      {
        title: "User Interviews & Shadowing",
        description: "Gather insights via on-site observation & user interviews",
        image: "/images/case-studies/synaptive/user-shadowing.png",
      },
      {
        title: "Research Synthesis Workshop",
        description: "Cluster findings into themes & opportunity areas",
        image: "/images/case-studies/accenture/06-synthesis.png",
      },
      {
        title: "User Journey & Workflow Mapping",
        description: "Visualise current vs. ideal flows to uncover friction",
        image: "/images/case-studies/synaptive/workflow-mapping.png",
      },
      {
        title: "User Personas & Mindsets",
        description: "Craft evidence-backed archetypes that guide design priorities",
        image: "/images/case-studies/accenture/05-research-findings.png",
      },
      {
        title: "HMW & Opportunity Framing",
        description: 'Turn gut-feel problems into "How Might We…?" statements',
        image: "/images/case-studies/accenture/07-concept-posters.png",
      },
      {
        title: "Feature Definition & User Stories",
        description:
          "Specs & stories translate user & business value into scoped dev work",
        image: "/images/case-studies/accenture/09-backlog.png",
      },
      {
        title: "Strategy & Roadmap Planning",
        description: "Translate insights into product & sprint roadmaps",
        image: "/images/case-studies/accenture/08-blueprint.png",
      },
    ],
  },
  {
    id: "design",
    heading: "Design",
    accent: "prototype",
    description:
      "Extensive experience in full stack product design & prototyping, combining technical skills & creativity. I aim to create intuitive user experiences that are both functional & visually engaging.",
    cards: [
      {
        title: "Design with Figma, Accelerate with AI",
        description: "Interactive prototypes to share & gather feedback",
        image: "/images/case-studies/future-fertility/cap-app/cover.png",
      },
      {
        title: "Iterative Prototyping & User Flows",
        description: "Build testable flows to reduce risk",
        image: "/images/case-studies/future-fertility/cap-app/user-workflow-mapping.png",
      },
      {
        title: "High Fidelity Design",
        description:
          "Polished visual designs based on brand palette & creative explorations",
        image: "/images/case-studies/future-fertility/ff-reports/magenta.png",
      },
      {
        title: "Alignment & Co-Creation Workshops",
        description: "Facilitated collaborative brainstorming with users & stakeholders",
        image: "/images/case-studies/accenture/02-war-room.png",
      },
      {
        title: "User Testing",
        description: "Tight & frequent feedback loops with real, representative users",
        image: "/images/case-studies/synaptive/voice-control-testing.png",
      },
      {
        title: "Heuristic Evaluation",
        description: "Spot usability issues fast with Nielsen heuristics",
        image: "/images/case-studies/future-fertility/cap-app/explorations.png",
      },
    ],
  },
  {
    id: "build",
    heading: "Build",
    accent: "launch",
    description:
      "Strong focus on GTM planning & launching innovative products. I prioritize collaboration & creativity from conception to launch, thriving in dynamic settings & continuously adapting to user feedback.",
    cards: [
      {
        title: "Design-to-Development Handoff",
        description:
          "Spec out UX/UI designs in detail for dev, MCP, & QA team clarity",
        image: "/images/case-studies/future-fertility/cap-app/dev-specs.png",
      },
      {
        title: "Go-to-Market / Product Launch",
        description: "Align marketing, sales & support for a seamless market debut",
        image: "/images/case-studies/experiencepoint/00-overview.png",
      },
      {
        title: "Project Management & Planning",
        description: "Sprint planning & work-back schedules to stay aligned",
        image: "/images/case-studies/future-fertility/cap-app/feedback-cycles.png",
      },
      {
        title: "Dual-Track Agile Development",
        description:
          "Design & engineering in dual-track sprints for rapid, continuous delivery",
        image: "/images/case-studies/accenture/10-concept-testing.png",
      },
      {
        title: "Design for Scalable Localization",
        description: "Generate & test multilingual variants via AI translations",
        image: "/images/case-studies/future-fertility/ff-reports/localization.png",
      },
    ],
  },
]
