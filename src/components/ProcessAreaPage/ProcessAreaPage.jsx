import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, useTheme, useMediaQuery } from "@mui/material";
import HeaderSection from "../components/HeaderSection";
import WorkflowSection from "../components/WorkflowSection";
import DescriptionSection from "../components/DescriptionSection";
import PurposeSection from "../components/PurposeSection";
import FilesSection from "../components/FilesSection";
import StakeholdersSection from "../components/StakeholdersSection";
import CompetenceSection from "../components/CompetenceSection";
import NextStepButton from "../components/NextStepButton";
import { containerStyles } from "../styles/sectionStyles";
import ImageBox from "../components/Imagebox";
import { allProcessData } from "../data/allProcessData";

const ProcessAreaPage = () => {
  const { id: processId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState({
    workflow: true,
    description: true,
    purpose: true,
    files: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const processData = allProcessData[processId];

  if (!processData) {
    return <div>Process area not found</div>; // Handle case where processId is invalid
  }

  return (
    <Container maxWidth="xl" sx={containerStyles}>
      <HeaderSection
        title={processData.title}
        subtitle={processData.subtitle}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {/* Left Column (3/4 width) */}
        <Box
          sx={{
            flex: 3,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <WorkflowSection
            workflow={processData.workflow}
            expanded={expanded.workflow}
            toggleSection={() => toggleSection("workflow")}
          />
          {/* <DescriptionSection
            description={processData.description}
            expanded={expanded.description}
            toggleSection={() => toggleSection("description")}
          /> */}
          <PurposeSection
            purpose={processData.purpose}
            expanded={expanded.purpose}
            toggleSection={() => toggleSection("purpose")}
          />
          <FilesSection
            files={processData.files}
            expanded={expanded.files}
            toggleSection={() => toggleSection("files")}
          />
        </Box>

        {/* Right Column (1/4 width) */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <ImageBox image={processData.image} />
          <StakeholdersSection stakeholders={processData.stakeholders} />
          <CompetenceSection competencies={processData.competencies} />
          <NextStepButton nextStep={processData.nextStep} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProcessAreaPage;

