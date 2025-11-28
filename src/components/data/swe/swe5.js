import {
  DeviceHub,
  Assessment,
  Storage,
  TrendingUp,
  Build,
  BugReport,
} from "@mui/icons-material";

export const swe5Data = {
  title: "SWE.5 - Software Integration and Integration Testing",
  subtitle: "Software Engineering Process Group",
  image: "/static/images/ASPICE-image/swe5.png",
  nextStep: "SWE.6",
  workflow: {
    title: " Software Integration and Integration Test",
    cards: [
      {
        id: 1,
        title: "Integration Strategy Definition",
        description:
          "Define integration approach (incremental, big bang) and sequence",
      },
      {
        id: 2,
        title: "Integration Test Planning",
        description:
          "Create integration test plan, test cases, and test environment",
      },
      {
        id: 3,
        title: "Software Integration",
        description:
          "Progressively integrate units and components per integration sequence",
      },
      {
        id: 4,
        title: "Integration Testing",
        description:
          "Execute integration tests to verify interfaces and interactions",
      },
      {
        id: 5,
        title: "Results Analysis & Reporting",
        description:
          "Analyze results, manage defects, and report integration status",
      },
    ],
    description:
      "The process of progressively combining software units into components and larger aggregates, and testing the interactions between them.",
    steps: [
      "Develop an integration strategy and sequence (e.g., bottom-up, top-down).",
      "Develop integration test cases based on architectural design and interfaces.",
      "Integrate units into components, and components into larger aggregates.",
      "Test each integration step to verify interface compatibility and functional interaction.",
      "Repeat until the complete software item is integrated.",
    ],
  },
  description: [
    "SWE.5 is an iterative process where the verified units from SWE.4 are assembled according to the software architecture defined in SWE.2.",
    "The key purpose is to ensure that the individually working units also work correctly together. Integration testing focuses on testing the interfaces and interactions between integrated components.",
    "This process helps to identify issues such as interface mismatches, data corruption across interfaces, and incorrect function call sequences.",
  ],
  purpose: {
    description:
      "To integrate software units and components into larger aggregates and to test these integrated items to verify they work together correctly according to architectural design.",
    objectives: [
      "Develop integration strategy and sequence",
      "Develop integration strategy and sequence.",
      "Test interfaces between integrated elements",
      "Verify data flow and control flow",
      "Ensure integrated software meets architectural requirements",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Software Architecture Document", size: "3.0 MB" },
      { id: 2, name: "Unit Test Reports", size: "N/A" },
      { id: 3, name: "Verified Software Units", size: "1.8 MB" },
      { id: 4, name: "Interface Specifications", size: "1.2 MB" },
      { id: 5, name: "Integration Test Strategy", size: "2.5 MB" },
    ],
    output: [
      { id: 1, name: "Integration Test Plan", size: "N/A" },
      { id: 2, name: "Integration Test Reports", size: "4.2 MB" },
      { id: 3, name: "Integrated Software Build", size: "1.5 MB" },
      { id: 4, name: "Integration Defect Reports", size: "0.9 MB" },
      { id: 5, name: "Integration Test Summary", size: "1.3 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Integration Engineer",
      responsibilities:
        "Plan integration sequence \n Perform software integration \n Execute integration tests \n Manage build process",
      icon: DeviceHub, // Changed from Integration to DeviceHub
    },
    {
      id: 2,
      role: "Test Engineer",
      responsibilities:
        "Plan integration sequence \n Perform software integration \n Execute integration tests \n Manage build process",
      icon: Assessment,
    },
    {
      id: 3,
      role: "Software Architect",
      responsibilities:
        "Review integration strategy \n Validate architecture compliance \n  Support interface debugging \n Approve integration approach",
      icon: Storage,
    },

    {
      id: 4,
      role: "Configuration Manager",
      responsibilities:
        "Manage integration baselines \n Control build configurations \n Support environment setup \n Maintain version control",
      icon: TrendingUp,
    },
  ],
  competencies: [
    { id: 1, name: "Integration Strategies", level: 4, icon: DeviceHub }, // Changed from Integration
    { id: 2, name: "Interface Testing", level: 5, icon: TrendingUp },
    { id: 3, name: "Build & CI Tools", level: 4, icon: Build },
    { id: 4, name: "System Debugging", level: 4, icon: BugReport },
  ],
};
