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
  };
