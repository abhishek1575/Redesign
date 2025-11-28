import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const man5Data = {
  title: "MAN.5 - Risk Management",
  subtitle: "Management Process Group",
  image: "/static/images/ASPICE-image/man5.png",
  nextStep: "MAN.6",
  workflow: {
    title: "Risk Management Workflow",
    cards: [
      {
        id: 1,
        title: "Risk Management Planning",
        description:
          "Define risk management approach, categories, thresholds, and roles",
      },
      {
        id: 2,
        title: "Risk Identification",
        description:
          "Identify potential risks using brainstorming, checklists, and lessons learned",
      },
      {
        id: 3,
        title: "Risk Analysis & Prioritization",
        description:
          "Assess probability and impact, calculate risk exposure, prioritize risks",
      },
      {
        id: 4,
        title: "Risk Treatment Planning",
        description:
          "Develop mitigation strategies: avoid, transfer, mitigate, or accept",
      },
      {
        id: 5,
        title: "Risk Monitoring & Control",
        description:
          "Track risk indicators, implement mitigation actions, update risk status",
      },
      {
        id: 6,
        title: "Risk Communication & Reporting",
        description:
          "Report risk status, escalate critical risks, share lessons learned",
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
      "To identify, analyze, treat, and monitor risks continuously throughout the project lifecycle, ensuring risks are managed proactively to minimize negative impacts and maximize opportunities.",
    objectives: [
      "Establish risk management strategy and approach",
      "Identify potential risks throughout project lifecycle",
      "Analyze and prioritize risks based on probability and impact",
      "Develop and implement risk mitigation strategies",
      "Monitor risks and trigger mitigation actions when needed",
      "Communicate risk status to stakeholders regularly",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Project Management Plan", size: "1.2 MB" },
      { id: 2, name: "Requirements & Specifications", size: "0.8 MB" },
      { id: 3, name: "Historical Risk Data", size: "0.5 MB" },
      { id: 4, name: "Risk Management Standards", size: "0.3 MB" },
      { id: 5, name: "Stakeholder Risk Inputs", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Risk Management Plan", size: "1.5 MB" },
      { id: 2, name: "Risk Register", size: "0.9 MB" },
      { id: 3, name: "Risk Assessment Matrix", size: "1.1 MB" },
      { id: 4, name: "Risk Mitigation Plans", size: "0.4 MB" },
      { id: 5, name: "Risk Status Reports", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Risk Manager",
      responsibilities: "Lead risk planning, Maintain risk registe",
      icon: Work,
    },
    {
      id: 2,
      role: "Project Manager",
      responsibilities: "Approve risk strategies and Monitor critical risks",
      icon: Code,
    },
    {
      id: 3,
      role: "Risk Owners",
      responsibilities:
        "Implement mitigation plans, Monitor assigned risks and Update risk status",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Project Team",
      responsibilities:
        "Identify new risks, Support risk analysis and Execute mitigation actions",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Risk Management", level: 4, icon: Code },
    { id: 2, name: "Risk Analysis Techniques", level: 3, icon: TrendingUp },
    { id: 3, name: "Strategic Thinking", level: 5, icon: Group },
    { id: 4, name: "Decision Making", level: 4, icon: VerifiedUser },
    { id: 5, name: "Communication Skills", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE MAN.5", level: 3, icon: Work },
  ],
};
