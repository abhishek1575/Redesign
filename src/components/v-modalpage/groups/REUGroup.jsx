import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const REUGroup = ({ StyledPaper, isLaptop, enabledProcessAreas }) => (
  <Box
    sx={{
      backgroundColor: "#C1CEE0",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "160px" : "160px",
      height: "125px",
      position: "relative", // Needed for absolute positioning to work
    }}
  >
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      textAlign="center"
      sx={{ mb: 1 }}
    >
      Reuse Process Group (REU)
    </Typography>
    <PositionedItem
      style={StyledPaper}
      positions={{ desktop: [65, 50], laptop: [70, 30] }}
      isLaptop={isLaptop}
      id="REU.2"
      label="Management of Products for Reuse"
      enabled={enabledProcessAreas.includes("REU.2")}
    />
  </Box>
);

export default REUGroup;
