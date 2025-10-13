import {
  Memory,
  Build,
  Engineering,
  VerifiedUser,
  Checklist,
  Work,
  Description,
  TrendingUp,
  Group,
} from "@mui/icons-material";

export const hwe1Data = {
  title: "HWE.1 - Hardware Requirements Analysis",
  subtitle: "Hardware Engineering Process Group",
  image: "/static/images/ASPICE-image/hwe1.png",
  nextStep: "HWE.2",
  workflow: {
    description:
      "The workflow for hardware requirements analysis involves gathering, analyzing, documenting, and validating hardware requirements to ensure they are feasible, testable, and traceable to system requirements.",
    steps: [
      "Elicit hardware requirements from system design or stakeholders",
      "Analyze requirements for feasibility and technical constraints",
      "Document requirements in the Hardware Requirements Specification (HRS)",
      "Validate hardware requirements through reviews and simulations",
    ],
  },
  description: [
    "The Hardware Requirements Analysis process transforms system-level requirements into a defined set of hardware requirements that guide the hardware design process.",
    "It ensures that all hardware requirements are complete, consistent, verifiable, and aligned with the overall system and software requirements.",
    "The output of this process is the Hardware Requirements Specification (HRS), which serves as the foundation for detailed hardware design and verification activities.",
  ],
  purpose: {
    description:
      "The purpose of hardware requirements analysis is to derive, define, and validate a complete and consistent set of hardware requirements that fulfill system and stakeholder needs.",
    objectives: [
      "Ensure hardware requirements are technically feasible and verifiable",
      "Maintain traceability to system and software requirements",
      "Identify and resolve potential conflicts or design constraints early",
      "Provide a solid basis for hardware architecture and design",
    ],
  },
  files: {
    input: [
      { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
      { id: 2, name: "System Architecture Document", size: "0.9 MB" },
      { id: 3, name: "Interface Control Document", size: "0.6 MB" },
    ],
    output: [
      { id: 1, name: "Hardware Requirements Specification", size: "1.3 MB" },
      { id: 2, name: "Hardware Architecture Design Document", size: "1.0 MB" },
      { id: 3, name: "Hardware Validation Plan", size: "0.8 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "Project Manager",
      responsibilities: "Oversee project execution and deliverables",
      icon: Work,
    },
    {
      id: 2,
      role: "Hardware Engineer",
      responsibilities: "Define and analyze hardware requirements",
      icon: Engineering,
    },
    {
      id: 3,
      role: "System Engineer",
      responsibilities: "Provide input from system-level requirements",
      icon: Build,
    },
    {
      id: 4,
      role: "Verification Engineer",
      responsibilities: "Validate and verify hardware requirements",
      icon: VerifiedUser,
    },
    {
      id: 5,
      role: "Configuration Manager",
      responsibilities: "Manage version control and change tracking",
      icon: Description,
    },
  ],
  competencies: [
    { id: 1, name: "Hardware Design Knowledge", level: 4, icon: Memory },
    { id: 2, name: "System Understanding", level: 4, icon: TrendingUp },
    { id: 3, name: "Cross-Disciplinary Collaboration", level: 5, icon: Group },
    { id: 4, name: "Quality and Compliance", level: 4, icon: VerifiedUser },
    { id: 5, name: "Analytical Problem Solving", level: 4, icon: Checklist },
  ],
};
