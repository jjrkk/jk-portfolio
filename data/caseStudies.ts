export interface CaseStudySection {
  id: string
  title: string
  body: string
  image?: string
  imageAlt?: string
  imagePosition?: "left" | "right"
}

export interface CaseStudy {
  slug: string
  fullPath: string
  title: string
  subtitle: string
  year: string
  company: string
  tags: string[]
  coverImage: string
  isLive: boolean
  role: string
  methods: string[]
  sections: CaseStudySection[]
}

export const caseStudies: CaseStudy[] = [
  // ─── LIVE CASE STUDIES ───────────────────────────────────────────────────────

  {
    slug: "image-capture-app-ui-redesign",
    fullPath: "/future-fertility/image-capture-app-ui-redesign",
    title: "Image Capture App UI Redesign",
    subtitle: "Redesigning the primary capture workflow for embryologists in the IVF lab",
    year: "2024",
    company: "Future Fertility",
    tags: ["UX/UI", "Mobile", "Healthtech"],
    coverImage: "/images/case-studies/future-fertility/cap-app/cover.png",
    isLive: true,
    role: "Product Design Lead",
    methods: ["User Research", "Usability Testing", "Prototyping", "Design System"],
    sections: [],
  },
  {
    slug: "egg-quality-assessment-redesign",
    fullPath: "/future-fertility/egg-quality-assessment-redesign",
    title: "Egg Quality Assessment Redesign",
    subtitle: "Redesigning AI-powered egg quality reports for clinicians and patients",
    year: "2023",
    company: "Future Fertility",
    tags: ["UX/UI", "AI", "Healthtech"],
    coverImage: "/images/case-studies/future-fertility/ff-reports/cover.png",
    isLive: true,
    role: "Product Design Lead",
    methods: ["Journey Mapping", "Prototyping", "Stakeholder Interviews", "A/B Testing"],
    sections: [],
  },
  {
    slug: "presto-service-design-project",
    fullPath: "/accenture-metrolinx/presto-service-design-project",
    title: "PRESTO Service Design",
    subtitle: "End-to-end service design for the PRESTO fare payment platform",
    year: "2019",
    company: "Accenture / Metrolinx",
    tags: ["Service Design", "UX Research", "0→1"],
    coverImage: "/images/case-studies/accenture/cover.png",
    isLive: true,
    role: "UX Designer",
    methods: ["Service Blueprint", "Journey Mapping", "Co-design Workshops", "Usability Testing"],
    sections: [],
  },
  {
    slug: "surgical-microscope-ux-ui-design",
    fullPath: "/synaptive/surgical-microscope-ux-ui-design",
    title: "Surgical Microscope UX/UI",
    subtitle: "Designing the interface for a next-gen neurosurgical visualization platform",
    year: "2021",
    company: "Synaptive Medical",
    tags: ["UX/UI", "Product", "Healthtech"],
    coverImage: "/images/case-studies/synaptive/cover.png",
    isLive: true,
    role: "Product Designer",
    methods: ["Contextual Inquiry", "Interaction Design", "Prototyping", "Design System"],
    sections: [],
  },
  {
    slug: "virtual-design-sprint",
    fullPath: "/experiencepoint/virtual-design-sprint",
    title: "Virtual Design Sprint",
    subtitle: "Facilitating remote design sprints at scale for enterprise clients",
    year: "2020",
    company: "ExperiencePoint",
    tags: ["Product", "0→1", "Facilitation"],
    coverImage: "/images/case-studies/experiencepoint/cover.png",
    isLive: true,
    role: "Product Designer",
    methods: ["Design Sprint", "Remote Facilitation", "Rapid Prototyping", "User Testing"],
    sections: [],
  },

  // ─── COMING SOON ─────────────────────────────────────────────────────────────

  {
    slug: "coming-soon-1",
    fullPath: "#",
    title: "AI Diagnostic Workflow",
    subtitle: "Coming soon",
    year: "2024",
    company: "Future Fertility",
    tags: ["AI", "Healthtech", "UX/UI"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-2",
    fullPath: "#",
    title: "Patient Portal Redesign",
    subtitle: "Coming soon",
    year: "2023",
    company: "Future Fertility",
    tags: ["UX/UI", "Product", "Healthtech"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-3",
    fullPath: "#",
    title: "Design System at Scale",
    subtitle: "Coming soon",
    year: "2022",
    company: "Future Fertility",
    tags: ["Design System", "Product"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-4",
    fullPath: "#",
    title: "Mobile App 0→1",
    subtitle: "Coming soon",
    year: "2021",
    company: "Synaptive Medical",
    tags: ["0→1", "Mobile", "Product"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-5",
    fullPath: "#",
    title: "Enterprise Dashboard",
    subtitle: "Coming soon",
    year: "2020",
    company: "Accenture",
    tags: ["UX/UI", "Product"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-6",
    fullPath: "#",
    title: "Innovation Platform",
    subtitle: "Coming soon",
    year: "2019",
    company: "ExperiencePoint",
    tags: ["0→1", "Product"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
  {
    slug: "coming-soon-7",
    fullPath: "#",
    title: "Accessibility Audit & Redesign",
    subtitle: "Coming soon",
    year: "2018",
    company: "Confidential",
    tags: ["Accessibility", "UX/UI"],
    coverImage: "/images/case-studies/coming-soon/placeholder.png",
    isLive: false,
    role: "",
    methods: [],
    sections: [],
  },
]
