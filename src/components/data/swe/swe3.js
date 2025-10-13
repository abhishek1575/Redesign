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
        "To transform the software architectural design into a detailed, implementable design and to construct verified software units that are ready for integration and testing.",
      objectives: [
        "Provide a complete specification for coding.",
        "Ensure code is efficient, readable, and maintainable.",
        "Ensure compliance with coding standards and safety guidelines.",
        "Create a set of verified units that correctly implement the detailed design.",
      ],
    },
    files: {
      input: [
        {
          id: 1,
          name: "Software Architectural Design (SWE.2)",
          size: "3.0 MB",
        },
        {
          id: 2,
          name: "Software Requirements Specification (SWE.1)",
          size: "2.5 MB",
        },
        { id: 3, name: "Coding Standards & Guidelines", size: "0.5 MB" },
      ],
      output: [
        {
          id: 1,
          name: "Software Detailed Design Description",
          size: "2.8 MB",
        },
        { id: 2, name: "Source Code Files", size: "15.5 MB" },
        { id: 3, name: "Static Analysis Reports", size: "0.8 MB" },
        { id: 4, name: "Code Review Reports", size: "1.5 MB" },
        {
          id: 5,
          name: "Updated Traceability Matrix (to SWE.2/SWE.1)",
          size: "1.0 MB",
        },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Software Developer",
        responsibilities:
          "Creates detailed design and implements/codes the software units.",
        icon: Code,
      },
      {
        id: 2,
        role: "Software Architect",
        responsibilities:
          "Reviews detailed design for architectural compliance.",
        icon: Architecture,
      },
      {
        id: 3,
        role: "Peer Developer",
        responsibilities: "Performs peer code reviews.",
        icon: Group,
      },
    ],
    competencies: [
      { id: 1, name: "Programming Languages", level: 5, icon: Code },
      {
        id: 2,
        name: "Algorithm & Data Structure Design",
        level: 5,
        icon: Build,
      },
      { id: 3, name: "Debugging", level: 4, icon: BugReport },
      { id: 4, name: "Adherence to Standards", level: 4, icon: Checklist },
    ],
  };
