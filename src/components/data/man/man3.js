import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const man3Data = {
  title: "MAN.3 - Project Management",
  subtitle: "Management Process Group",
  image: "/static/images/ASPICE-image/man3.png",
  nextStep: "MAN.5",
  workflow: {
    title: "Project Management Workflow",
    cards: [
      {
        id: 1,
        title: "Project Initiation",
        description:
          "Define scope, objectives, stakeholders, constraints, and success criteria",
      },
      {
        id: 2,
        title: "Project Planning",
        description:
          "Create WBS, schedule, budget, resource plan, and quality plan",
      },
      {
        id: 3,
        title: "Project Execution",
        description:
          "Coordinate resources, manage tasks, ensure deliverable quality",
      },
      {
        id: 4,
        title: "Monitoring & Control",
        description:
          "Track progress, manage changes, control scope/schedule/budget",
      },
      {
        id: 5,
        title: "Project Closure",
        description:
          "Complete deliverables, conduct retrospective, archive documentation",
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
      "To identify, establish, and control project activities and resources necessary to produce a product or service in the context of project requirements and constraints.",
    objectives: [
      "Define project scope, objectives, and deliverables",
      "Plan project activities, schedule, and resources",
      "Estimate effort, cost, and schedule",
      "Monitor and control project execution",
      "Manage project risks and issues",
      "Communicate with stakeholders effectively",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Project Charter", size: "1.2 MB" },
      { id: 2, name: "Customer Requirements", size: "0.8 MB" },
      { id: 3, name: "Statement of Work (SOW)", size: "0.5 MB" },
      { id: 4, name: "Organizational Standards", size: "0.3 MB" },
      { id: 5, name: "Historical Project Data", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Project Management Plan", size: "1.5 MB" },
      { id: 2, name: "Work Breakdown Structure (WBS)", size: "0.9 MB" },
      { id: 3, name: "Project Schedule (Gantt Chart)", size: "1.1 MB" },
      { id: 4, name: "Risk Register & Issue Log", size: "0.4 MB" },
      { id: 5, name: "Status Reports & Metrics", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Project Manager",
      responsibilities: "Lead project planning, Manage project execution",
      icon: Work,
    },
    {
      id: 2,
      role: "Project Team",
      responsibilities: "Execute project tasks and Deliver work products",
      icon: Code,
    },
    {
      id: 3,
      role: "Steering Committee",
      responsibilities:
        "Approve project plan, Review project status and Provide strategic guidance",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Customer/Sponsor",
      responsibilities:
        "Define requirements, Review deliverables and Accept final product",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Project Management", level: 4, icon: Code },
    { id: 2, name: "Risk Management", level: 3, icon: TrendingUp },
    { id: 3, name: "Resource Management", level: 5, icon: Group },
    { id: 4, name: "Stakeholder Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "PM Tools", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE MAN.3", level: 3, icon: Work },
  ],
};
