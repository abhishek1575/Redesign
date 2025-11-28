import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const swe1Data = {
  title: "SWE.1 - Software Requirements Analysis",
  subtitle: "Software Engineering Process Group",
  image: "/static/images/ASPICE-image/swe1.png",
  nextStep: "SWE.2",
  workflow: {
    title: "Requirements Engineering Workflow",
    cards: [
      { id: 1, title: "Elicitation", description: "Gather & analyze requirements" },
      { id: 2, title: "Specification", description: "Document all requirements" },
      { id: 3, title: "Analysis", description: "Check for consistency & feasibility" },
      { id: 4, title: "Traceability", description: "Link to system elements" },
      { id: 5, title: "Review", description: "Formal review and approval" },
      { id: 6, title: "Management", description: "Track changes throughout lifecycle" },
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
      "To establish and maintain software requirements based on system requirements and design, ensuring they are complete, consistent, and testable.",
    objectives: [
      "Analyze and document software functional and non-functional requirements",
      "Ensure requirements are traceable to system requirements",
      "Define software interface requirements",
      "Establish verification criteria for each requirement",
      "Obtain agreement on requirements with stakeholders",
    ],
  },
  files: {
    input: [
      { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
      { id: 2, name: "System Design Document", size: "0.8 MB" },
      { id: 3, name: "Customer Requirements", size: "0.5 MB" },
      { id: 4, name: "Interface Control Documents", size: "0.3 MB" },
      { id: 5, name: "Standards & Guidelines", size: "0.6 MB" },
    ],
    output: [
      {
        id: 1,
        name: "Software Requirements Specification (SRS)",
        size: "1.5 MB",
      },
      { id: 2, name: "Requirements Traceability Matrix", size: "0.9 MB" },
      { id: 3, name: "Interface Requirements Document", size: "1.1 MB" },
      { id: 4, name: "Requirements Review Minutes", size: "0.4 MB" },
      { id: 5, name: "Requirements Baseline", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Requirements Engineer",
      responsibilities: "Elicit and document requirements",
      icon: Work,
    },
    {
      id: 2,
      role: "System Architect",
      responsibilities: "Implementation and testing",
      icon: Code,
    },
    {
      id: 3,
      role: "Project Manager",
      responsibilities: "Safety compliance",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Quality Assurance",
      responsibilities: "Review requirements quality",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Requirements Engineering", level: 4, icon: Code },
    { id: 2, name: "Domain Knowledge", level: 3, icon: TrendingUp },
    { id: 3, name: "ASPICE Processes", level: 5, icon: Group },
    { id: 4, name: "Traceability Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "Stakeholder Communication", level: 4, icon: Checklist },
    { id: 6, name: "Tools & Techniques", level: 3, icon: Work },
  ],
};
