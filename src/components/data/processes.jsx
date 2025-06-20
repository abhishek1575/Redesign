const processes = {
  SWE1: {
    id: "SWE1",
    title: "ASPICE 4.0 Process Area",
    subtitle: "Software Engineering Process Group (SWE.1)",
    diagramTitle: "SWE.1 Flowchart Diagram",
    diagramDescription:
      "This diagram illustrates the workflow and interactions within the Software Engineering process group.",
    diagramGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    rolesGradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    filesGradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    downloadButtonText: "Reference from Configuration Management",

    fileItems: [
      {
        id: 1,
        name: "Software Requirements Specification",
        type: "input",
        color: "#3b82f6",
      },
      {
        id: 2,
        name: "System Architecture Document",
        type: "input",
        color: "#3b82f6",
      },
      {
        id: 3,
        name: "Software Design Document",
        type: "output",
        color: "#10b981",
      },
      { id: 4, name: "Unit Test Report", type: "output", color: "#10b981" },
      { id: 5, name: "Integration Test Plan", type: "input", color: "#3b82f6" },
      { id: 6, name: "Verification Report", type: "output", color: "#10b981" },
    ],

    roles: [
      { id: 1, name: "Project Manager", color: "#8b5cf6" },
      { id: 2, name: "Software Engineer", color: "#8b5cf6" },
      { id: 3, name: "Technical Manager", color: "#8b5cf6" },
      { id: 4, name: "Functional Safety Manager", color: "#ec4899" },
      { id: 5, name: "Configuration Manager", color: "#ec4899" },
      { id: 6, name: "Quality Assurance", color: "#ec4899" },
    ],

    // Process details
    description:
      "The Software Engineering Process Group (SWE) is responsible for the development and maintenance of software systems. This process area covers all activities from requirements analysis through design, implementation, testing, and maintenance.",
    descriptionAdditional:
      "The SWE group ensures that software products are developed according to specifications, meet quality standards, and are delivered on schedule. They collaborate closely with other engineering teams to integrate software with hardware components.",

    purpose:
      "The primary purpose of the SWE process area is to systematically transform stakeholder requirements into high-quality software products through well-defined engineering processes.",
    objectives: [
      "Ensure software meets functional and non-functional requirements",
      "Maintain traceability throughout the development lifecycle",
      "Implement robust testing and verification procedures",
      "Facilitate continuous improvement of software processes",
      "Ensure compliance with industry standards and regulations",
    ],

    bestPracticesIntro:
      "Implementing industry best practices is crucial for achieving ASPICE compliance and delivering high-quality software products.",
    bestPractices: [
      {
        title: "Requirements Management",
        description:
          "Maintain bidirectional traceability between requirements, design, code, and tests throughout the project lifecycle.",
        color: "#10b981",
        bgColor: "#f0fdfa",
      },
      {
        title: "Continuous Integration",
        description:
          "Implement automated build and test processes to detect integration issues early and maintain code quality.",
        color: "#84cc16",
        bgColor: "#f0fdf4",
      },
      {
        title: "Code Reviews",
        description:
          "Conduct regular peer code reviews to share knowledge and maintain coding standards across the team.",
        color: "#3b82f6",
        bgColor: "#eff6ff",
      },
      {
        title: "Test Automation",
        description:
          "Develop comprehensive automated test suites to ensure regression coverage and enable frequent releases.",
        color: "#ec4899",
        bgColor: "#fdf2f8",
      },
    ],

    competenceIntro:
      "The competence of the SWE team is critical for successful project execution. The following competencies are required for team members:",
    competencies: [
      {
        title: "Technical Skills",
        description:
          "Proficiency in programming languages, development tools, and software architectures",
        letter: "T",
        color: "#8b5cf6",
        bgColor: "#ede9fe",
      },
      {
        title: "Process Knowledge",
        description:
          "Understanding of ASPICE framework, SDLC methodologies, and quality processes",
        letter: "P",
        color: "#3b82f6",
        bgColor: "#dbeafe",
      },
      {
        title: "Collaboration",
        description:
          "Ability to work effectively in cross-functional teams and communicate clearly",
        letter: "C",
        color: "#ec4899",
        bgColor: "#fce7f3",
      },
    ],
  },

  // Add other processes here following the same structure
  // SWE2: { ... },
  // SYS1: { ... },
};

export default processes;
