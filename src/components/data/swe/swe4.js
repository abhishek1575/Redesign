import {
  Code,
  Assessment,
  Architecture,
  BugReport,
  Checklist,
  Build,
  TrendingUp,
} from "@mui/icons-material";

export const swe4Data = {
    title: "SWE.4 - Software Unit Verification",
    subtitle: "Software Engineering Process Group",
    image: "/static/images/ASPICE-image/swe4.png",
    nextStep: "SWE.5",
    workflow: {
      description:
        "The process of verifying that each software unit meets its detailed design and required functionality, and is free of defects.",
      steps: [
        "Develop unit verification test cases and procedures based on the detailed design.",
        "Set up the unit test environment (e.g., harnesses, stubs, mocks).",
        "Execute the unit tests and record the outcomes.",
        "Analyze the results, report any detected defects, and verify fixes.",
        "Ensure the unit is ready for integration.",
      ],
    },
    description: [
      "SWE.4 focuses on the smallest testable parts of the software: the units. Verification is performed to ensure each unit behaves as specified in the detailed design (SWE.3).",
      "This process typically involves white-box testing techniques where the tester has knowledge of the internal code structure. It is a key activity for early defect detection, which is the most cost-effective way to eliminate bugs.",
      "The primary output is a Unit Verification Report, providing evidence that the units have been tested and meet their criteria.",
    ],
    purpose: {
      description:
        "To verify that each software unit correctly implements its detailed design and required functionality, ensuring a high-quality foundation for software integration.",
      objectives: [
        "Find and fix defects at the earliest possible stage.",
        "Verify functional correctness and structural coverage (e.g., statement, branch coverage).",
        "Provide objective evidence of unit quality.",
        "Prevent defect propagation to higher integration levels.",
      ],
    },
    files: {
      input: [
        { id: 1, name: "Software Detailed Design (SWE.3)", size: "2.8 MB" },
        { id: 2, name: "Source Code (SWE.3)", size: "15.5 MB" },
        { id: 3, name: "Unit Test Plan & Procedures", size: "1.2 MB" },
      ],
      output: [
        { id: 1, name: "Unit Test Cases & Procedures", size: "1.5 MB" },
        { id: 2, name: "Unit Test Report & Logs", size: "3.5 MB" },
        { id: 3, name: "Defect Reports", size: "0.8 MB" },
        {
          id: 4,
          name: "Structural Coverage Analysis Report",
          size: "1.2 MB",
        },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Software Developer",
        responsibilities:
          "Develops and executes unit tests, analyzes results, and fixes defects.",
        icon: Code,
      },
      {
        id: 2,
        role: "Test Engineer",
        responsibilities:
          "May support creation of complex unit tests and review results.",
        icon: Assessment,
      },
      {
        id: 3,
        role: "Software Architect",
        responsibilities:
          "Reviews critical unit test results, especially for safety-related units.",
        icon: Architecture,
      },
    ],
    competencies: [
      { id: 1, name: "Unit Testing Frameworks", level: 5, icon: BugReport },
      { id: 2, name: "Test Case Design", level: 4, icon: Checklist },
      {
        id: 3,
        name: "Debugging & Root Cause Analysis",
        level: 5,
        icon: Build,
      },
      { id: 4, name: "Test Automation", level: 4, icon: TrendingUp },
    ],
  };
