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
      "To verify that each software unit meets its specified requirements and is ready for integration, ensuring units are tested thoroughly at the lowest level.",
    objectives: [
      "Develop and execute unit test cases",
      "Verify unit functionality against detailed design",
      "Achieve required code coverage targets",
      "Identify and fix defects at unit level",
      "Document unit test results and traceability",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Detailed Design Specifications", size: "2.8 MB" },
      { id: 2, name: "Source Code Files", size: "15.5 MB" },
      { id: 3, name: "Unit Test Specifications", size: "1.2 MB" },
      { id: 4, name: "Test Strategy Document", size: "0.9 MB" },
      { id: 5, name: "Requirements Traceability Matrix", size: "0.7 MB" },
    ],
    output: [
      { id: 1, name: "Unit Test Reports", size: "1.5 MB" },
      { id: 2, name: "Code Coverage Reports", size: "3.5 MB" },
      { id: 3, name: "Defect Reports", size: "0.8 MB" },
      {
        id: 4,
        name: "Test Traceability Matrix",
        size: "1.2 MB",
      },
      { id: 5, name: "Unit Verification Summary", size: "1.0 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Software Developer",
      responsibilities:
        "Fix identified defects \n Support test debugging \n Provide code insights \n Perform unit testing.",
      icon: Code,
    },
    {
      id: 2,
      role: "Test Engineer",
      responsibilities:
        "Design unit test cases \n Support test debugging \n Provide code insights \n Perform unit testing.",
      icon: Assessment,
    },
    {
      id: 3,
      role: "Test Manager",
      responsibilities:
        "Approve test strategy \n Monitor test progress \n Review test coverage \n Manage test resources.",
      icon: Architecture,
    },
    {
      id: 4,
      role: "Quality Assurance",
      responsibilities:
        "Verify test completeness \n Audit test evidence \n Validate coverage metrics \n Review test reports.",
      icon: BugReport,
    },
  ],
  competencies: [
    { id: 1, name: "Unit Testing", level: 5, icon: BugReport },
    { id: 2, name: "Test Automation", level: 4, icon: Checklist },
    {
      id: 3,
      name: "Code Coverage",
      level: 5,
      icon: Build,
    },
    { id: 4, name: "Defect Management", level: 4, icon: TrendingUp },
    { id: 5, name: "Programming Knowledge", level: 4, icon: Code },
    { id: 6, name: "ASPICE SWE.4", level: 3, icon: Architecture },
  ],
};
