import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sys5Data = {
  title: "SYS.5 - System Verification",
  subtitle: "System Engineering Process Group",
  image: "/static/images/ASPICE-image/sys5.png",
  nextStep: "SYS.6",
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
      "To confirm that the integrated system meets all specified system requirements through comprehensive testing, ensuring the system is ready for delivery and deployment in the operational environment.",
    objectives: [
      "Verify system against all system requirements",
      "Conduct functional and non-functional testing",
      "Perform acceptance testing with customer/stakeholders",
      "Validate system in operational environment",
      "Execute regression testing for system changes",
      "Obtain formal acceptance for system release",
    ],
  },
  files: {
    input: [
      { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
      { id: 2, name: "Integrated System Build", size: "0.8 MB" },
      { id: 3, name: "Integration Test Reports", size: "0.5 MB" },
      { id: 4, name: "Requirements Traceability Matrix", size: "0.3 MB" },
      { id: 5, name: "Acceptance Criteria", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "System Qualification Test Plan", size: "1.5 MB" },
      { id: 2, name: "System Test Procedures", size: "0.9 MB" },
      { id: 3, name: "System Test Reports", size: "1.1 MB" },
      { id: 4, name: "Test Traceability Matrix", size: "0.4 MB" },
      { id: 5, name: "System Acceptance Certificate", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "System Test Lead",
      responsibilities: "Plan qualification testing, Analyze test results",
      icon: Work,
    },
    {
      id: 2,
      role: "Test Engineer",
      responsibilities: "Develop test procedures and Execute test scenarios",
      icon: Code,
    },
    {
      id: 3,
      role: "Customer/User Representative",
      responsibilities:
        "Review test approach, Validate requirements and Approve system release",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Project Manager",
      responsibilities:
        "Review test completion, Manage test schedule and Coordinate stakeholders",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "System Testing", level: 4, icon: Code },
    { id: 2, name: "Test Design Techniques", level: 3, icon: TrendingUp },
    { id: 3, name: "Non-Functional Testing", level: 5, icon: Group },
    { id: 4, name: "Test Management", level: 4, icon: VerifiedUser },
    { id: 5, name: "Domain Knowledge", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SYS.5", level: 3, icon: Work },
  ],
};
