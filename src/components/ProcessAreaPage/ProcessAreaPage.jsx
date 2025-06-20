import React, { useState } from "react";
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

const ProcessAreaPage = () => {
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

  return (
    <Container maxWidth="xl" sx={containerStyles}>
      <HeaderSection
        title="SWE.1 - Software Requirements Analysis"
        subtitle="Software Engineering Process Group"
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
            expanded={expanded.workflow}
            toggleSection={() => toggleSection("workflow")}
          />
          <DescriptionSection
            expanded={expanded.description}
            toggleSection={() => toggleSection("description")}
          />
          <PurposeSection
            expanded={expanded.purpose}
            toggleSection={() => toggleSection("purpose")}
          />
          <FilesSection
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
          <ImageBox />
          <StakeholdersSection />
          <CompetenceSection />
          <NextStepButton nextStep="SWE.2" />
        </Box>
      </Box>
    </Container>
  );
};

export default ProcessAreaPage;
