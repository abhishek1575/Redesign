import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sup10Data = {
  title: "SUP.10 - Change Request Management",
  subtitle: "Support Process Group",
  image: "/static/images/ASPICE-image/sup10.png",
  nextStep: "SUP.11",
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
      "To ensure that change requests are managed, tracked, and controlled throughout their lifecycle, from submission through implementation and verification, maintaining project stability and traceability.",
    objectives: [
      "Establish change request management strategy",
      "Record and track all change requests systematically",
      "Analyze change impacts on schedule, cost, and technical aspects",
      "Obtain approval for changes through defined authority levels",
      "Coordinate implementation of approved changes",
      "Verify change implementation and maintain traceability",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Change Request Forms", size: "1.2 MB" },
      { id: 2, name: "Current Baselines & Documentation", size: "0.8 MB" },
      { id: 3, name: "Project Plans & Schedules", size: "0.5 MB" },
      { id: 4, name: "Requirements Specifications", size: "0.3 MB" },
      { id: 5, name: "Change Management Procedures", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Change Request Management Plan", size: "1.5 MB" },
      { id: 2, name: "Change Request Records", size: "0.9 MB" },
      { id: 3, name: "Impact Analysis Reports", size: "1.1 MB" },
      { id: 4, name: "CCB Meeting Minutes", size: "0.4 MB" },
      { id: 5, name: "Change Status Reports & Metrics", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Change Manager",
      responsibilities:
        "Manage CR process, Coordinate impact analysis and Report CR metrics",
      icon: Work,
    },
    {
      id: 2,
      role: "Change Control Board",
      responsibilities: "Review change requests and Approve/reject/defer CRs",
      icon: Code,
    },
    {
      id: 3,
      role: "Technical Teams",
      responsibilities:
        "Conduct impact analysis, Implement approved changes and Update documentation",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Stakeholders",
      responsibilities:
        "Submit change requests, Provide justification and Review proposed changes",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Change Management", level: 4, icon: Code },
    { id: 2, name: "Impact Analysis", level: 3, icon: TrendingUp },
    { id: 3, name: "Change Control Tools", level: 5, icon: Group },
    { id: 4, name: "Requirements Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "Communication Skills", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SUP.10", level: 3, icon: Work },
  ],
};
