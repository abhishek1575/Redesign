import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sys1Data = {
  title: "SYS.1 - Requirements Elicitation",
  subtitle: "System Engineering Process Group",
  image: "/static/images/ASPICE-image/sys1.png",
  nextStep: "SYS.2",
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
      "To gather, discover, and capture stakeholder needs and requirements through systematic elicitation techniques, ensuring a comprehensive understanding of what the system must accomplish.",
    objectives: [
      "Identify all relevant stakeholders and their needs",
      "Elicit requirements using appropriate techniques (interviews, workshops, surveys)",
      "Capture functional and non-functional requirements",
      "Document stakeholder expectations and constraints",
      "Establish context and operational scenarios",
      "Ensure requirements are understandable and agreed upon",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Customer Request/Contract", size: "1.2 MB" },
      { id: 2, name: "Business Case/Proposal", size: "0.8 MB" },
      { id: 3, name: "Stakeholder Register", size: "0.5 MB" },
      { id: 4, name: "Existing System Documentation", size: "0.3 MB" },
      { id: 5, name: "Industry Standards & Regulations", size: "0.6 MB" },
    ],
    output: [
      {
        id: 1,
        name: "Stakeholder Requirements Document",
        size: "1.5 MB",
      },
      { id: 2, name: "User Needs Statement", size: "0.9 MB" },
      { id: 3, name: "Elicitation Session Minutes", size: "1.1 MB" },
      { id: 4, name: "Use Cases & Scenarios", size: "0.4 MB" },
      { id: 5, name: "Requirements Elicitation Report", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Requirements Engineer",
      responsibilities: "Plan elicitation activities and document requirements",
      icon: Work,
    },
    {
      id: 2,
      role: "System Architect",
      responsibilities: "Provide technical context and Identify constraints",
      icon: Code,
    },
    {
      id: 3,
      role: "Customer/End Users",
      responsibilities: "Express needs and expectations",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Business Analyst",
      responsibilities: "Review requirements quality",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Requirements Elicitation", level: 4, icon: Code },
    { id: 2, name: "Domain Knowledge", level: 3, icon: TrendingUp },
    { id: 3, name: "Stakeholder Management", level: 5, icon: Group },
    { id: 4, name: "Documentation Skills", level: 4, icon: VerifiedUser },
    { id: 5, name: "Communication Skills    ", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SYS.1", level: 3, icon: Work },
  ],
};
