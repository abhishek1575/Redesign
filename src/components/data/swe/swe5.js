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
        "To assemble software units into integrated components and ultimately a complete software item, and to verify that the units/components interact correctly as defined by the software architecture.",
      objectives: [
        "Verify interface compatibility and data exchange.",
        "Detect defects in the interaction between integrated units.",
        "Incrementally build the software item to be ready for qualification testing.",
        "Ensure the integrated software behaves as specified in the architecture.",
      ],
    },
    files: {
      input: [
        {
          id: 1,
          name: "Software Architectural Design (SWE.2)",
          size: "3.0 MB",
        },
        { id: 2, name: "Verified Software Units (from SWE.4)", size: "N/A" },
        { id: 3, name: "Integration Test Plan", size: "1.8 MB" },
      ],
      output: [
        { id: 1, name: "Integrated Software Item", size: "N/A" },
        { id: 2, name: "Integration Test Report & Logs", size: "4.2 MB" },
        { id: 3, name: "Defect Reports", size: "1.5 MB" },
        { id: 4, name: "Integration Build Reports", size: "0.9 MB" },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Integration Engineer / Developer",
        responsibilities:
          "Performs the integration steps and executes integration tests.",
        icon: DeviceHub, // Changed from Integration to DeviceHub
      },
      {
        id: 2,
        role: "Test Engineer",
        responsibilities:
          "Develops integration test cases and analyzes results.",
        icon: Assessment,
      },
      {
        id: 3,
        role: "Build Manager",
        responsibilities:
          "Manages the build environment and integration pipeline.",
        icon: Storage,
      },
    ],
    competencies: [
      { id: 1, name: "Integration Strategies", level: 4, icon: DeviceHub }, // Changed from Integration
      { id: 2, name: "Interface Testing", level: 5, icon: TrendingUp },
      { id: 3, name: "Build & CI Tools", level: 4, icon: Build },
      { id: 4, name: "System Debugging", level: 4, icon: BugReport },
    ],
  };
