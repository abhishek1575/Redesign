import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sup8Data = {
  title: "SUP.8 - Configuration Management",
  subtitle: "Support Process Group",
  image: "/static/images/ASPICE-image/sup8.png",
  nextStep: "SUP.9",
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
      "To establish and maintain the integrity of all work products of a process or project and make them available to concerned parties throughout the project lifecycle.",
    objectives: [
      "Identify and control configuration items",
      "Establish baselines and manage changes",
      "Control versions and releases",
      "Maintain configuration management records",
      "Perform configuration audits and status accounting",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Project Management Plan", size: "1.2 MB" },
      { id: 2, name: "Work Products (All Artifacts)", size: "0.8 MB" },
      { id: 3, name: "Change Requests", size: "0.5 MB" },
      { id: 4, name: "CM Standards & Guidelines", size: "0.3 MB" },
      { id: 5, name: "Release Requirements", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Configuration Management Plan", size: "1.5 MB" },
      { id: 2, name: "Configuration Item List", size: "0.9 MB" },
      { id: 3, name: "Baseline Documentation", size: "1.1 MB" },
      { id: 4, name: "Change Control Records", size: "0.4 MB" },
      { id: 5, name: "CM Status Reports & Audit Reports", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Configuration Manager",
      responsibilities: "Develop CM procedures, Manage CM tools",
      icon: Work,
    },
    {
      id: 2,
      role: "Change Control Board (CCB)",
      responsibilities: "Review change requests and Approve/reject changes",
      icon: Code,
    },
    {
      id: 3,
      role: "Development Team",
      responsibilities:
        "Follow CM procedures, Submit change requests and Maintain version control",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Quality Assurance",
      responsibilities:
        "Audit CM processes, Verify baseline integrity and Review CM records",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Configuration Management", level: 4, icon: Code },
    { id: 2, name: "Version Control Systems", level: 3, icon: TrendingUp },
    { id: 3, name: "CM Tools", level: 5, icon: Group },
    { id: 4, name: "Change Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "Build & Release Management", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SUP.8", level: 3, icon: Work },
  ],
};
