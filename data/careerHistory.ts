export interface CareerEntry {
  period: string
  role: string
  company: string
  note?: string
  isLive?: boolean
  caseStudySlug?: string
}

export const careerHistory: CareerEntry[] = [
  {
    period: "2024 – Current",
    role: "Product Design Lead / Head of Design",
    company: "Future Fertility",
    note: "Head of design",
    isLive: true,
    caseStudySlug: "/future-fertility/image-capture-app-ui-redesign",
  },
  {
    period: "2020 – 2024",
    role: "Director, Product",
    company: "ExperiencePoint",
    note: "Promoted from Product Design Lead",
    isLive: true,
    caseStudySlug: "/experiencepoint/virtual-design-sprint",
  },
  {
    period: "2019",
    role: "Service Design Lead",
    company: "Fjord / Accenture",
    note: "Client project lead",
    isLive: true,
    caseStudySlug: "/accenture-metrolinx/presto-service-design-project",
  },
  {
    period: "2017 – 2019",
    role: "Manager, Product Design",
    company: "Synaptive Medical",
    note: "Promoted from UX Lead",
    isLive: true,
    caseStudySlug: "/synaptive/surgical-microscope-ux-ui-design",
  },
  {
    period: "2013 – 2016",
    role: "Associate Director, XD",
    company: "Healthcare Human Factors | UHN",
    note: "2× Promoted from HF Engineer",
  },
  {
    period: "2011 – 2013",
    role: "Information Architect, XD",
    company: "Publicis Sapient",
    note: "Promoted from Junior IA",
  },
  {
    period: "2009 – 2010",
    role: "Human Factors Specialist",
    company: "CMC Electronics",
    note: "Professional Experience Year (PEY)",
  },
  {
    period: "2008",
    role: "Industrial Engineer Intern",
    company: "Case New Holland",
    note: "Lean manufacturing internship",
  },
]
