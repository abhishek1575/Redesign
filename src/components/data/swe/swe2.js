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
        "To establish a software architecture that fulfills the software requirements and provides a robust, efficient, and maintainable structure for detailed design and implementation.",
      objectives: [
        "Decompose the system into cohesive, loosely-coupled components.",
        "Define interfaces to minimize interdependencies.",
        "Address critical non-functional requirements (e.g., safety, performance).",
        "Provide a foundation for integration, testing, and reuse.",
      ],
    },
    files: {
      input: [
        {
          id: 1,
          name: "Software Requirements Specification (SWE.1)",
          size: "2.5 MB",
        },
        {
          id: 2,
          name: "System Architecture Description (SYS.3)",
          size: "2.1 MB",
        },
        { id: 3, name: "Design Guidelines & Standards", size: "0.6 MB" },
      ],
      output: [
        {
          id: 1,
          name: "Software Architectural Design Description",
          size: "3.0 MB",
        },
        { id: 2, name: "Interface Design Descriptions", size: "1.2 MB" },
        {
          id: 3,
          name: "Updated Traceability Matrix (to SWE.1)",
          size: "0.7 MB",
        },
        { id: 4, name: "Architecture Review Report", size: "1.1 MB" },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Software Architect",
        responsibilities:
          "Leads the creation and definition of the software architecture.",
        icon: Architecture,
      },
      {
        id: 2,
        role: "System Architect",
        responsibilities:
          "Ensures alignment with system architecture and constraints.",
        icon: DeviceHub,
      },
      {
        id: 3,
        role: "Development Team Leads",
        responsibilities:
          "Review architecture for feasibility and implementation effort.",
        icon: Group,
      },
    ],
    competencies: [
      {
        id: 1,
        name: "Software Design Patterns",
        level: 5,
        icon: Architecture,
      },
      { id: 2, name: "System Thinking", level: 5, icon: TrendingUp },
      { id: 3, name: "Modelling (e.g., UML, SysML)", level: 4, icon: Code },
      { id: 4, name: "Technical Leadership", level: 4, icon: Group },
    ],
  };
