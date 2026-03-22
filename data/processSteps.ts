export interface ProcessCard {
  title: string
  description: string
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
      },
      {
        title: "Research Synthesis Workshop",
        description: "Cluster findings into themes & opportunity areas",
      },
      {
        title: "User Journey & Workflow Mapping",
        description: "Visualise current vs. ideal flows to uncover friction",
      },
      {
        title: "User Personas & Mindsets",
        description: "Craft evidence-backed archetypes that guide design priorities",
      },
      {
        title: "HMW & Opportunity Framing",
        description: 'Turn gut-feel problems into "How Might We…?" statements',
      },
      {
        title: "Feature Definition & User Stories",
        description:
          "Specs & stories translate user & business value into scoped dev work",
      },
      {
        title: "Strategy & Roadmap Planning",
        description: "Translate insights into product & sprint roadmaps",
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
      },
      {
        title: "Iterative Prototyping & User Flows",
        description: "Build testable flows to reduce risk",
      },
      {
        title: "High Fidelity Design",
        description:
          "Polished visual designs based on brand palette & creative explorations",
      },
      {
        title: "Alignment & Co-Creation Workshops",
        description: "Facilitated collaborative brainstorming with users & stakeholders",
      },
      {
        title: "User Testing",
        description: "Tight & frequent feedback loops with real, representative users",
      },
      {
        title: "Heuristic Evaluation",
        description: "Spot usability issues fast with Nielsen heuristics",
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
      },
      {
        title: "Go-to-Market / Product Launch",
        description: "Align marketing, sales & support for a seamless market debut",
      },
      {
        title: "Project Management & Planning",
        description: "Sprint planning & work-back schedules to stay aligned",
      },
      {
        title: "Dual-Track Agile Development",
        description:
          "Design & engineering in dual-track sprints for rapid, continuous delivery",
      },
      {
        title: "Design for Scalable Localization",
        description: "Generate & test multilingual variants via AI translations",
      },
    ],
  },
]
