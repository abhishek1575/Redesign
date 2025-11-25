import {
  Assessment,
  VerifiedUser,
  Work,
  Group,
  Checklist,
  TrendingUp,
  Code,
  Description,
} from "@mui/icons-material";

export const swe6Data = {
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
      "To confirm that the integrated software product meets its specified requirements through comprehensive testing, ensuring readiness for delivery or deployment.",
    objectives: [
      "Verify software against all specified requirements",
      "Conduct functional and non-functional testing",
      "Perform regression testing for software changes",
      "Validate software in target environment",
      "Obtain qualification test approval for release",
    ],
  },
  files: {
    input: [
      {
        id: 1,
        name: "Software Requirements Specification",
        size: "2.5 MB",
      },
      { id: 2, name: "Integrated Software Build", size: "N/A" },
      { id: 3, name: "Integration Test Reports", size: "2.5 MB" },
      { id: 4, name: "Requirements Traceability Matrix", size: "3.0 MB" },
      { id: 5, name: "Test Environment Specifications", size: "2.8 MB" },
    ],
    output: [
      { id: 1, name: "Qualification Test Plan", size: "5.5 MB" },
      { id: 2, name: "Qualification Test Reports", size: "10.0 MB" },
      { id: 3, name: "Test Traceability Matrix", size: "2.0 MB" },
      { id: 4, name: "Defect Summary Report", size: "1.2 MB" },
      { id: 5, name: "Software Release Certificate", size: "3.5 MB" },
    ],
  },
  stakeholders: [
    {
      id: 1,
      role: "QA Test Lead",
      responsibilities: "Plan qualification testing",
      icon: Assessment,
    },
    {
      id: 2,
      role: "Test Engineers",
      responsibilities: "Develop test cases",
      icon: VerifiedUser,
    },
    {
      id: 3,
      role: "Project Manager",
      responsibilities: "Review test completion.",
      icon: Work,
    },
    {
      id: 4,
      role: "Customer Representative",
      responsibilities: "Review test results",
      icon: Group,
    },
  ],
  competencies: [
    { id: 1, name: "System Testing", level: 5, icon: Checklist },
    { id: 2, name: "Test Design Techniques", level: 4, icon: TrendingUp },
    { id: 3, name: "Non-Functional Testing", level: 4, icon: Code },
    {
      id: 4,
      name: "Test Management Tools",
      level: 4,
      icon: Description,
    },
    { id: 5, name: "Requirements Analysis", level: 5, icon: Checklist },
    { id: 6, name: "ASPICE SWE.6", level: 4, icon: VerifiedUser },
  ],
};
