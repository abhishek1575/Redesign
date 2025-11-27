import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sys2Data = {
  title: "SYS.2 - System Requirements Analysis",
  subtitle: "System Engineering Process Group",
  image: "/static/images/ASPICE-image/sys2.png",
  nextStep: "SYS.3",
  workflow: {
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
      "To transform stakeholder requirements into a defined set of system requirements that specify what the system must do, establishing a technical foundation for system design.",
    objectives: [
      "Analyze and refine stakeholder requirements",
      "Specify system functional and non-functional requirements",
      "Define system interfaces and external dependencies",
      "Ensure requirements are complete, consistent, and testable",
      "Establish bidirectional traceability",
      "Obtain approval from stakeholders",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Stakeholder Requirements Document", size: "1.2 MB" },
      { id: 2, name: "User Needs Statement", size: "0.8 MB" },
      { id: 3, name: "Use Cases & Scenarios", size: "0.5 MB" },
      { id: 4, name: "Concept of Operations (ConOps)", size: "0.3 MB" },
      { id: 5, name: "Standards & Regulations", size: "0.6 MB" },
    ],
    output: [
      {
        id: 1,
        name: "System Requirements Specification (SyRS)",
        size: "1.5 MB",
      },
      { id: 2, name: "Interface Control Documents (ICD)", size: "0.9 MB" },
      { id: 3, name: "Requirements Traceability Matrix", size: "1.1 MB" },
      { id: 4, name: "Verification Criteria Document", size: "0.4 MB" },
      { id: 5, name: "Requirements Review Report", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "System Requirements Engineer",
      responsibilities:
        "Analyze stakeholder requirements and Manage requirements traceability",
      icon: Work,
    },
    {
      id: 2,
      role: "System Architect",
      responsibilities:
        "Validate technical feasibility and Review system requirements",
      icon: Code,
    },
    {
      id: 3,
      role: "Project Manager",
      responsibilities:
        "Approve requirements baseline, Allocate resources and Monitor requirements progress",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Quality Assurance",
      responsibilities:
        "Review requirements quality and Verify process compliance",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Requirements Engineering", level: 4, icon: Code },
    { id: 2, name: "System Engineering", level: 3, icon: TrendingUp },
    { id: 3, name: "Requirements Management Tools", level: 5, icon: Group },
    { id: 4, name: "Traceability Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "Technical Writing", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SYS.2", level: 3, icon: Work },
  ],
};
