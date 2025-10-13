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
      "The primary purpose of software requirements analysis is to transform stakeholder requirements into a complete, consistent, and testable set of software requirements.",
    objectives: [
      "Ensure requirements are clear and unambiguous",
      "Identify potential conflicts or inconsistencies",
      "Establish traceability to system requirements",
      "Create a foundation for software design and testing",
    ],
  },
  files: {
    input: [
      { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
      { id: 2, name: "Software Architecture Document", size: "0.8 MB" },
      { id: 3, name: "Interface Control Document", size: "0.5 MB" },
    ],
    output: [
      { id: 1, name: "Software Design Document", size: "1.5 MB" },
      { id: 2, name: "Unit Test Report", size: "0.9 MB" },
      { id: 3, name: "Integration Test Plan", size: "1.1 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Project Manager",
      responsibilities: "Overall project oversight",
      icon: Work,
    },
    {
      id: 2,
      role: "Software Engineer",
      responsibilities: "Implementation and testing",
      icon: Code,
    },
    {
      id: 3,
      role: "Functional Safety Manager",
      responsibilities: "Safety compliance",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Configuration Manager",
      responsibilities: "Version control and releases",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Technical Skills", level: 4, icon: Code },
    { id: 2, name: "Process Knowledge", level: 3, icon: TrendingUp },
    { id: 3, name: "Collaboration", level: 5, icon: Group },
    { id: 4, name: "Quality Assurance", level: 4, icon: VerifiedUser },
    { id: 5, name: "Problem Solving", level: 4, icon: Checklist },
  ],
};
