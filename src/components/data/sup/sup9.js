import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sup9Data = {
  title: "SUP.9 - Problem Resolution Management",
  subtitle: "Support Process Group",
  image: "/static/images/ASPICE-image/sup9.png",
  nextStep: "SUP.10",
  workflow: {
    title: " Problem Resolution Management Workflow",
    cards: [
      {
        id: 1,
        title: "Problem Identification & Recording",
        description:
          "Detect and document problems, defects, and anomalies in tracking system",
      },
      {
        id: 2,
        title: "Problem Classification & Prioritization",
        description:
          "Categorize by severity, priority, and impact; assign to appropriate teams",
      },
      {
        id: 3,
        title: "Root Cause Analysis",
        description:
          "Investigate problems to identify underlying causes and contributing factors",
      },
      {
        id: 4,
        title: "Resolution Implementation",
        description:
          "Develop and implement fixes, workarounds, or corrective actions",
      },
      {
        id: 5,
        title: "Verification & Closure",
        description:
          "Verify resolution effectiveness, update records, and close problems",
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
      "To ensure that problems are identified, analyzed, managed, and controlled through resolution. Problems include defects, failures, non-conformances, and anomalies discovered during development or operation.",
    objectives: [
      "Establish problem resolution management strategy",
      "Record and classify all identified problems",
      "Analyze problems to determine root causes",
      "Initiate and track corrective actions",
      "Monitor problem trends and metrics",
      "Verify problem resolution effectiveness",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Test Reports & Defect Logs", size: "1.2 MB" },
      { id: 2, name: "Customer Issue Reports", size: "0.8 MB" },
      { id: 3, name: "Audit Findings & NCRs", size: "0.5 MB" },
      { id: 4, name: "Problem Resolution Procedures", size: "0.3 MB" },
      { id: 5, name: "Work Products for Analysis", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Problem Resolution Management Plan", size: "1.5 MB" },
      { id: 2, name: "Problem Reports & Records", size: "0.9 MB" },
      { id: 3, name: "Root Cause Analysis Reports", size: "1.1 MB" },
      { id: 4, name: "Corrective Action Records", size: "0.4 MB" },
      { id: 5, name: "Problem Metrics & Trend Reports", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Problem Manager",
      responsibilities:
        "Oversee problem process, Monitor problem metrics and Generate status reports",
      icon: Work,
    },
    {
      id: 2,
      role: "Development Team",
      responsibilities: "Analyze root causes and implement fixes",
      icon: Code,
    },
    {
      id: 3,
      role: "Test/QA Team",
      responsibilities:
        "Report problems/defects, Perform regression testing and Validate fixes",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Project Manager",
      responsibilities:
        "Review problem status, Manage priorities and Make escalation decisions",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Problem Solving", level: 4, icon: Code },
    { id: 2, name: "Root Cause Analysis", level: 3, icon: TrendingUp },
    { id: 3, name: "Defect Tracking Tools", level: 5, icon: Group },
    { id: 4, name: "Technical Knowledge", level: 4, icon: VerifiedUser },
    { id: 5, name: "Data Analysis", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SUP.9", level: 3, icon: Work },
  ],
};
