import {
  Architecture,
  DeviceHub,
  Group,
  TrendingUp,
  Code,
} from "@mui/icons-material";

export const swe2Data = {
  title: "SWE.2 - Software Architectural Design",
  subtitle: "Software Engineering Process Group",
  image: "/static/images/ASPICE-image/swe2.png",
  nextStep: "SWE.3",
  workflow: {
    description:
      "The process of transforming software requirements into a high-level structure (architecture) that defines the software components, their interactions, and interfaces.",
    steps: [
      "Analyze software requirements and define architectural design criteria.",
      "Identify and define software components and their static relationships.",
      "Define dynamic behavior and interaction between components.",
      "Define internal and external interfaces (e.g., to hardware, other software).",
      "Document the architecture and verify it against the requirements.",
    ],
  },
  description: [
    "SWE.2 defines the 'big picture' of the software system. It creates a blueprint that partitions the system into manageable components, ensuring that the software requirements are met.",
    "The architecture must address critical quality attributes like performance, security, modifiability, and safety. It serves as the crucial link between the 'what' (requirements) and the 'how' (detailed design and implementation).",
    "The output is a Software Architectural Design Description, which guides the entire development team and enables parallel work on different components.",
  ],
  purpose: {
    description:
      "To establish a software architectural design that identifies major structural components and their interfaces, ensuring the architecture meets software requirements.",
    objectives: [
      "Define software architecture and major components",
      "Specify interfaces between architectural elements",
      "Ensure architecture addresses quality attributes",
      "Allocate requirements to architectural elements",
      "Verify architecture against requirements",
    ],
  },
  files: {
    input: [
      { id: 1, name: "Software Requirements Specification", size: "2.5 MB" },
      { id: 2, name: "System Architecture Document", size: "2.1 MB" },
      { id: 3, name: "Requirements Traceability Matrix", size: "0.6 MB" },
      { id: 4, name: "Interface Requirements", size: "0.9 MB" },
      { id: 5, name: "Architecture Guidelines", size: "0.5 MB" },
    ],
    output: [
      {
        id: 1,
        name: "Software Architecture Document (SAD)",
        size: "3.0 MB",
      },
      { id: 2, name: "Component Specifications", size: "1.2 MB" },
      {
        id: 3,
        name: "Interface Control Documents",
        size: "0.7 MB",
      },
      { id: 4, name: "Architecture Review Report", size: "1.1 MB", },
      { id: 5, name: "Requirements Allocation Matrix", size: "0.8 MB", },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Software Architect",
      responsibilities: "Design software architecture",
      icon: Architecture,
    },
    {
      id: 2,
      role: "Technical Lead",
      responsibilities: "Review feasibility",
      icon: DeviceHub,
    },
    {
      id: 3,
      role: "Requirements Engineer",
      responsibilities: "Input Provider",
      icon: Group,
    },
    {
      id: 4,
      role: "Quality Assurance",
      responsibilities: "Review Role",
      icon: Code,
    },
  ],
  competencies: [
    {
      id: 1,
      name: "Software Architecture",
      level: 5,
      icon: Architecture,
    },
    { id: 2, name: "System Design", level: 5, icon: TrendingUp },
    { id: 3, name: "UML/Modeling", level: 4, icon: Code },
    { id: 4, name: "Quality Attributes", level: 4, icon: Group },
    { id: 5, name: "Technology Stack", level: 4, icon: DeviceHub },
    { id: 6, name: "ASPICE SWE.2", level: 3, icon: DeviceHub },
  ],
};
