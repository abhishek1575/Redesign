import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const SWEGroup = ({ SysPaper, isLaptop }) => (
  <Box
    sx={{
      backgroundColor: "#f9d3b4",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "350px" : "410px",
      height: "275px",
      position: "relative",
      flexShrink: 0,
    }}
  >
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      textAlign="center"
      sx={{ mb: 1 }}
    >
      Software Engineering Process Group (SWE)
    </Typography>

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [26, 20], laptop: [26, 22] }}
      isLaptop={isLaptop}
      id="SWE.1"
      label="Software Requirements Analysis"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [52, 25], laptop: [54, 25] }}
      isLaptop={isLaptop}
      id="SWE.2"
      label="Software Architectural Design"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [82, 30], laptop: [82, 30] }}
      isLaptop={isLaptop}
      id="SWE.3"
      label="Software Details Design and Unit Construction"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [82, 69], laptop: [85, 70] }}
      isLaptop={isLaptop}
      id="SWE.4"
      label="Software Unit Verification"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [52, 75], laptop: [55, 75] }}
      isLaptop={isLaptop}
      id="SWE.5"
      label="Software Component Verification and Integration Verification"
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [26, 80], laptop: [24, 80] }}
      isLaptop={isLaptop}
      id="SWE.6"
      label="Software Verification"
    />
  </Box>
);

export default SWEGroup;
