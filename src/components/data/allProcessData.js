import {
  Code,
  TrendingUp,
  Group,
  VerifiedUser,
  Checklist,
  Architecture,
  Build,
  BugReport,
  DeviceHub, // Use this instead of Integration
  Storage,
  Assessment,
  Work,
  Description,
} from "@mui/icons-material";

export const allProcessData = {
  "SWE.1": {
    title: "SWE.1 - Software Requirements Analysis",
    subtitle: "Software Engineering Process Group",
    image: "/static/images/ASPICE-image/swe1.png",
    nextStep: "SWE.2",
    workflow: {
      description:
        "The workflow for software requirements analysis involves gathering, analyzing, documenting, and validating requirements to ensure they are clear, complete, consistent, and testable.",
      steps: [
        "Requirement elicitation from stakeholders",
        "Analysis of requirements for feasibility",
        "Documentation in requirement specifications",
        "Validation through reviews and prototyping",
      ],
    },
    description: [
      "The Software Requirements Analysis process involves transforming stakeholder requirements into a complete set of software requirements that can be used as the basis for software design.",
      "This process ensures that requirements are analyzed for feasibility, consistency, and testability. It also involves establishing traceability between system requirements and software requirements.",
      "The output of this process is a Software Requirements Specification (SRS) document that clearly defines what the software must do.",
    ],
    purpose: {
      description:
        "The primary purpose of software requirements analysis is to transform stakeholder requirements into a complete, consistent, and testable set of software requirements.",
      objectives: [
        "Ensure requirements are clear and unambiguous",
        "Identify potential conflicts or inconsistencies",
        "Establish traceability to system requirements",
        "Create a foundation for software design and testing",
      ],
    },
    files: {
      input: [
        { id: 1, name: "System Requirements Specification", size: "1.2 MB" },
        { id: 2, name: "Software Architecture Document", size: "0.8 MB" },
        { id: 3, name: "Interface Control Document", size: "0.5 MB" },
      ],
      output: [
        { id: 1, name: "Software Design Document", size: "1.5 MB" },
        { id: 2, name: "Unit Test Report", size: "0.9 MB" },
        { id: 3, name: "Integration Test Plan", size: "1.1 MB" },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Project Manager",
        responsibilities: "Overall project oversight",
        icon: Work,
      },
      {
        id: 2,
        role: "Software Engineer",
        responsibilities: "Implementation and testing",
        icon: Code,
      },
      {
        id: 3,
        role: "Functional Safety Manager",
        responsibilities: "Safety compliance",
        icon: VerifiedUser,
      },
      {
        id: 4,
        role: "Configuration Manager",
        responsibilities: "Version control and releases",
        icon: Description,
      },
    ],
    competencies: [
      { id: 1, name: "Technical Skills", level: 4, icon: Code },
      { id: 2, name: "Process Knowledge", level: 3, icon: TrendingUp },
      { id: 3, name: "Collaboration", level: 5, icon: Group },
      { id: 4, name: "Quality Assurance", level: 4, icon: VerifiedUser },
      { id: 5, name: "Problem Solving", level: 4, icon: Checklist },
    ],
  },
  "SWE.2": {
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
  },
  "SWE.3": {
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
  },
  "SWE.4": {
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
  },
  "SWE.5": {
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
  },
  "SWE.6": {
    title: "SWE.6 - Software Qualification Testing",
    subtitle: "Software Engineering Process Group",
    image: "/static/images/ASPICE-image/swe6.png",
    nextStep: null,
    workflow: {
      description:
        "The process of testing the integrated software item against the software requirements to demonstrate that the requirements have been met and the software is ready for delivery.",
      steps: [
        "Develop qualification test cases and procedures based on the Software Requirements Specification (SRS).",
        "Set up a test environment that represents the target environment as closely as possible.",
        "Execute the test cases to demonstrate that each requirement is fulfilled.",
        "Record pass/fail results and document any deviations or defects.",
        "Create a test summary report providing evidence of requirement fulfillment.",
      ],
    },
    description: [
      "SWE.6 is the final testing process within the SWE group. Its purpose is to provide objective evidence that the completely integrated software product conforms to its specified requirements (from SWE.1).",
      "Unlike integration testing (SWE.5), which focuses on 'how' things work together, qualification testing is black-box testing focused on 'what' the software is supposed to do. It demonstrates that the software is fit for its intended purpose.",
      "Successful completion of SWE.6 is a major milestone, indicating the software is ready for system integration and testing (SYS.4/SYS.5).",
    ],
    purpose: {
      description:
        "To demonstrate that the integrated software product fulfills its specified requirements, providing objective evidence of readiness for delivery and system integration.",
      objectives: [
        "Verify that every software requirement has been correctly implemented.",
        "Provide objective evidence for customer acceptance.",
        "Ensure the software meets the agreed-upon criteria for delivery.",
        "Identify any remaining critical defects before release.",
      ],
    },
    files: {
      input: [
        {
          id: 1,
          name: "Software Requirements Specification (SWE.1)",
          size: "2.5 MB",
        },
        { id: 2, name: "Integrated Software Item (from SWE.5)", size: "N/A" },
        { id: 3, name: "Software Qualification Test Plan", size: "2.5 MB" },
      ],
      output: [
        { id: 1, name: "Software Qualification Test Report", size: "5.5 MB" },
        { id: 2, name: "Test Execution Logs & Evidence", size: "10.0 MB" },
        { id: 3, name: "Final Defect Reports", size: "2.0 MB" },
        { id: 4, name: "Requirements Coverage Matrix", size: "1.2 MB" },
      ],
    },
    stakeholders: [
      {
        id: 1,
        role: "Test Engineer",
        responsibilities:
          "Leads the development, execution, and reporting of qualification tests.",
        icon: Assessment,
      },
      {
        id: 2,
        role: "Quality Assurance",
        responsibilities:
          "Audits the testing process and results for compliance.",
        icon: VerifiedUser,
      },
      {
        id: 3,
        role: "Project Manager",
        responsibilities:
          "Reviews test results for go/no-go delivery decisions.",
        icon: Work,
      },
      {
        id: 4,
        role: "Customer / Stakeholder",
        responsibilities: "May witness or review test results for acceptance.",
        icon: Group,
      },
    ],
    competencies: [
      { id: 1, name: "Test Design Techniques", level: 5, icon: Checklist },
      { id: 2, name: "Test Management", level: 4, icon: TrendingUp },
      { id: 3, name: "Requirements Analysis", level: 4, icon: Code },
      {
        id: 4,
        name: "Reporting & Documentation",
        level: 4,
        icon: Description,
      },
    ],
  },
};
