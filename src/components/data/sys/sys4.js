import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Work,
  Description,
} from "@mui/icons-material";

export const sys4Data = {
  title: "SYS.4 - System Integration and Integration Verification",
  subtitle: "System Engineering Process Group",
  image: "/static/images/ASPICE-image/sys4.png",
  nextStep: "SYS.5",
  workflow: {
    title: "System Integration and Integration Test Workflow",
    cards: [
      {
        id: 1,
        title: "Integration Strategy & Planning",
        description:
          "Define integration approach, sequence, test environment, and resources",
      },
      {
        id: 2,
        title: "Integration Test Design",
        description:
          "Develop integration test cases, procedures, and success criteria",
      },
      {
        id: 3,
        title: "System Integration",
        description:
          "Progressively integrate HW, SW, and manual operations per sequence",
      },
      {
        id: 4,
        title: "Interface Testing",
        description:
          "Execute integration tests to verify interfaces and interactions",
      },
      {
        id: 5,
        title: "Problem Resolution & Reporting",
        description:
          "Resolve defects, analyze results, and report integration status",
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
      "To integrate system elements (hardware, software, manual operations) into a complete system and to test the integrated system to verify it works correctly according to architectural design.",
    objectives: [
      "Develop system integration strategy and sequence",
      "Integrate system elements progressively",
      "Test interfaces between integrated elements",
      "Verify system architecture implementation",
      "Validate data and control flows",
      "Resolve integration issues and defects",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Integration Test Plan", size: "1.2 MB" },
      { id: 2, name: "Interface Design Specifications", size: "0.8 MB" },
      { id: 3, name: "Verified System Elements (HW/SW)", size: "0.5 MB" },
      { id: 4, name: "Integration Test Strategy", size: "0.3 MB" },
      { id: 5, name: "Requirements Allocation Matrix", size: "0.6 MB" },
    ],
    output: [
      {
        id: 1,
        name: "Integration Test Plan",
        size: "1.5 MB",
      },
      { id: 2, name: "Integration Test Procedures", size: "0.9 MB" },
      { id: 3, name: "Integration Test Reports", size: "1.1 MB" },
      { id: 4, name: "Integrated System Build", size: "0.4 MB" },
      { id: 5, name: "Integration Defect Reports", size: "0.7 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Integration Engineer",
      responsibilities:
        "Plan integration activities, Perform system integration",
      icon: Work,
    },
    {
      id: 2,
      role: "Test Engineer",
      responsibilities: "Design integration tests and Analyze test results",
      icon: Code,
    },
    {
      id: 3,
      role: "System Architect",
      responsibilities:
        "Review integration strategy, Verify architecture compliance and Provide technical guidance",
      icon: VerifiedUser,
    },
    {
      id: 4,
      role: "Development Teams",
      responsibilities:
        "Deliver integrated elements, Support debugging and Fix integration defects",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "System Integration", level: 4, icon: Code },
    { id: 2, name: "Integration Testing", level: 3, icon: TrendingUp },
    { id: 3, name: "Problem Diagnosis", level: 5, icon: Group },
    { id: 4, name: "Test Automation", level: 4, icon: VerifiedUser },
    { id: 5, name: "Multi-Domain Knowledge", level: 4, icon: Checklist },
    { id: 6, name: "ASPICE SYS.4", level: 3, icon: Work },
  ],
};
