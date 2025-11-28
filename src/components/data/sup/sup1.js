import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sup1Data = {
  title: "SUP.1 - Quality Assurance",
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
      "To provide independent and objective assurance that work products and processes comply with predefined provisions and plans, and that non-conformances are resolved and tracked.",
    objectives: [
      "Develop and implement quality assurance strategy",
      "Conduct independent reviews and audits of work products",
      "Verify compliance with processes, standards, and procedures",
      "Identify, document, and track non-conformances",
      "Provide objective quality reports to stakeholders",
      "Ensure corrective actions are implemented",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Process Definitions & Standards", size: "1.2 MB" },
      { id: 2, name: "Project Management Plans", size: "0.8 MB" },
      { id: 3, name: "Work Products (All Artifacts)", size: "0.5 MB" },
      { id: 4, name: "Quality Standards (ISO, ASPICE)", size: "0.3 MB" },
      { id: 5, name: "Organizational Quality Policies", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Quality Assurance Plan", size: "1.5 MB" },
      { id: 2, name: "Audit Reports & Findings", size: "0.9 MB" },
      { id: 3, name: "Non-Conformance Reports (NCRs)", size: "1.1 MB" },
      { id: 4, name: "Corrective Action Requests (CARs)", size: "0.4 MB" },
      { id: 5, name: "QA Status Reports & Metrics", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "QA Manager",
      responsibilities: "Develop QA strategy",
      icon: Work,
    },
    {
      id: 2,
      role: "QA Engineer/Auditor",
      responsibilities: "Conduct audits and reviews and track non-conformances",
      icon: Code,
    },
    {
      id: 3,
      role: "Project Team",
      responsibilities:
        "Provide audit evidence, Implement corrective actions and Support audit activities",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Senior Management",
      responsibilities:
        "Review QA reports, Approve QA plans and Support QA independence",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Quality Management Systems", level: 4, icon: Code },
    { id: 2, name: "Auditing Skills", level: 3, icon: TrendingUp },
    { id: 3, name: "ASPICE Knowledge", level: 5, icon: Group },
    { id: 4, name: "Root Cause Analysis", level: 4, icon: VerifiedUser },
    { id: 5, name: "Communication Skills", level: 4, icon: Checklist },
    { id: 6, name: "Tools & Techniques", level: 3, icon: Work },
  ],
};
