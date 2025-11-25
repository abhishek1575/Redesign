import {
  Code,
  Architecture,
  Group,
  Build,
  BugReport,
  Checklist,
} from "@mui/icons-material";

export const swe3Data = {
  title: "SWE.3 - Software Detailed Design and Unit Construction",
  subtitle: "Software Engineering Process Group",
  image: "/static/images/ASPICE-image/swe3.png",
  nextStep: "SWE.4",
  workflow: {
    description:
      "The process of refining the architectural components into a precise, implementable design and subsequently constructing (coding) the software units.",
    steps: [
      "Refine architectural components into detailed software units.",
      "Define algorithms, data structures, and detailed logic for each unit.",
      "Implement (code) the software units according to the detailed design and coding standards.",
      "Perform static verification (e.g., code reviews, static analysis) on the units.",
      "Prepare units for unit verification (SWE.4).",
    ],
  },
  description: [
    "SWE.3 is where the high-level architecture is translated into a precise, low-level design that can be directly implemented as code.",
    "This process involves creating detailed specifications for each software unit (e.g., functions, classes, modules) defined in the architecture. The subsequent unit construction (coding) must adhere to defined coding standards, guidelines, and safety rules.",
    "The outputs include Detailed Design Documents and the actual source code, which form the basis for unit testing.",
  ],
  purpose: {
    description:
      "To provide a detailed design for software units and to implement and verify those units, ensuring they are testable and traceable to requirements.",
    objectives: [
      "Develop detailed design specifications for software units",
      "Implement software units according to design",
      "Ensure code quality and adherence to coding standards",
      "Create unit test specifications",
      "Maintain traceability from units to architecture",
    ],
  },
  files: {
    input: [
      {
        id: 1,
        name: "Software Architecture Document",
        size: "3.0 MB",
      },
      {
        id: 2,
        name: "Component Specifications",
        size: "2.5 MB",
      },
      { id: 3, name: "Coding Standards & Guidelines", size: "0.5 MB" },
      { id: 4, name: "Interface Definitions", size: "1.0 MB" },
      { id: 5, name: "Design Patterns Library", size: "1.2 MB" },
    ],
    output: [
      {
        id: 1,
        name: "Detailed Design Specifications",
        size: "2.8 MB",
      },
      { id: 2, name: "Source Code Files", size: "15.5 MB" },
      { id: 3, name: "Unit Test Specifications", size: "0.8 MB" },
      { id: 4, name: "Code Review Reports", size: "1.5 MB" },
      {
        id: 5,
        name: "Static Analysis Reports",
        size: "1.0 MB",
      },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Software Developer",
      responsibilities:
        "Design detailed units \n Implement source code \n Perform self-testing \n Create unit documentation.",
      icon: Code,
    },
    {
      id: 2,
      role: "Technical Lead",
      responsibilities:
        "Review design approach \n Conduct code reviews \n Ensure standards compliance \n Mentor developers.",
      icon: Architecture,
    },
    {
      id: 3,
      role: "Configuration Manager",
      responsibilities:
        "Manage code baselines \n Control version management \n Handle build configurations \n Maintain code repository.",
      icon: Group,
    },
    {
      id: 4,
      role: "Quality Assurance ",
      responsibilities:
        "Verify coding standards \n Review static analysis results \n Audit traceability \n Assess code quality metrics.",
      icon: Checklist,
    },
  ],
  competencies: [
    { id: 1, name: "Programming Languages", level: 5, icon: Code },
    {
      id: 2,
      name: "Design Principles	",
      level: 5,
      icon: Build,
    },
    { id: 3, name: "Coding Standards", level: 4, icon: BugReport },
    { id: 4, name: "Unit Testing", level: 4, icon: Checklist },
    { id: 5, name: "Version Control", level: 4, icon: Group },
    { id: 6, name: "Development Tools", level: 3, icon: Architecture },
  ],
};
