import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const HWEGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => (
  <Box
    sx={{
      backgroundColor: "#f9d3b4",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "285px" : "360px",
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
      Hardware Engineering Process Group (HWE)
    </Typography>

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [30, 22], laptop: [26, 22] }}
      isLaptop={isLaptop}
      id="HWE.1"
      label="Hardware Requirements Analysis"
      enabled={enabledProcessAreas.includes("HWE.1")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [55, 29], laptop: [60, 25] }}
      isLaptop={isLaptop}
      id="HWE.2"
      label="Hardware Design"
      enabled={enabledProcessAreas.includes("HWE.2")}
    />

    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [58, 71], laptop: [26, 75] }}
      isLaptop={isLaptop}
      id="HWE.3"
      label="Verification against HW Design"
      enabled={enabledProcessAreas.includes("HWE.3")}
    />
    {/*  */}
    <PositionedItem
      style={SysPaper}
      positions={{ desktop: [30, 78], laptop: [60, 70] }}
      isLaptop={isLaptop}
      id="HWE.4"
      label="Verification against HW Requirements"
      enabled={enabledProcessAreas.includes("HWE.4")}
    />
  </Box>
);

export default HWEGroup;
