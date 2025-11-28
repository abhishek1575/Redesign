import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sys3Data = {
  title: "SYS.3 - System Architecture Analysis",
  subtitle: "System Engineering Process Group",
  image: "/static/images/ASPICE-image/sys3.png",
  nextStep: "SYS.4",
  workflow: {
    title: "System Architectural Design Workflow",
    cards: [
      {
        id: 1,
        title: "Architecture Strategy Definition",
        description:
          "Define architectural approach, patterns, and design principles",
      },
      {
        id: 2,
        title: "System Decomposition",
        description:
          "Decompose system into major elements (hardware, software, manual operations)",
      },
      {
        id: 3,
        title: "Requirements Allocation",
        description:
          "Allocate system requirements to architectural elements and subsystems",
      },
      {
        id: 4,
        title: "Interface Design",
        description:
          "Define interfaces between elements, protocols, and data flows",
      },
      {
        id: 5,
        title: "Architecture Verification",
        description:
          "Verify architecture against requirements and conduct design reviews",
      },
    ],

    description:
      "The workflow for software requirements analysis involves gathering, analyzing, documenting, and validating requirements to ensure they are clear, complete, consistent, and testable.",
    steps: [
      "Requirement elicitation from stakeholders",
      "Analysis of requirements for feasibility",
      "Documentation in requirement specifications",
      "Validation through reviews and prototyping",
    ],
  },
  description: [
    "The Software Requirements Analysis process involves transforming stakeholder requirements into a complete set of software requirements that can be used as the basis for software design.",
    "This process ensures that requirements are analyzed for feasibility, consistency, and testability. It also involves establishing traceability between system requirements and software requirements.",
    "The output of this process is a Software Requirements Specification (SRS) document that clearly defines what the software must do.",
  ],
  purpose: {
    description:
      "To establish a system architectural design that identifies major system elements and their interactions, allocating system requirements to hardware, software, and manual operations elements.",
    objectives: [
      "Define system architecture and major elements (HW, SW, manual)",
      "Allocate requirements to architectural elements",
      "Design system interfaces and communication protocols",
      "Ensure architecture meets quality attributes (performance, safety, security)",
      "Evaluate architectural alternatives and trade-offs",
      "Document and verify architecture against requirements",
    ],
  },
  files: {
    input: [
      { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
      { id: 2, name: "Interface Control Documents", size: "0.8 MB" },
      { id: 3, name: "Requirements Traceability Matrix", size: "0.5 MB" },
      { id: 4, name: "Technology Standards & Guidelines", size: "0.3 MB" },
      { id: 5, name: "Design Constraints", size: "0.6 MB" },
    ],
    output: [
      {
        id: 1,
        name: "System Architecture Document (SAD)",
        size: "1.5 MB",
      },
      { id: 2, name: "System Element Specifications", size: "0.9 MB" },
      { id: 3, name: "Interface Design Specifications", size: "1.1 MB" },
      { id: 4, name: "Requirements Allocation Matrix", size: "0.4 MB" },
      { id: 5, name: "Architecture Review Report", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "System Architect",
      responsibilities: "Design system architecture, Allocate requirements",
      icon: Work,
    },
    {
      id: 2,
      role: "Hardware Engineer",
      responsibilities:
        "Design hardware elements and Support HW/SW integration",
      icon: Code,
    },
    {
      id: 3,
      role: "Software Architect",
      responsibilities:
        "Design software elements, Define SW architecture and Support system integration",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Safety/Security Engineer",
      responsibilities:
        "Review security aspects and Validate quality attributes",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "System Architecture", level: 4, icon: Code },
    { id: 2, name: "Multi-Domain Engineering", level: 3, icon: TrendingUp },
    { id: 3, name: "Modeling & Simulation", level: 5, icon: Group },
    { id: 4, name: "Interface Design", level: 4, icon: VerifiedUser },
    { id: 5, name: "Trade-off Analysis", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SYS.3", level: 3, icon: Work },
  ],
};
