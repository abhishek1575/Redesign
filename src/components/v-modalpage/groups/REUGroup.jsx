import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const REUGroup = ({ StyledPaper, isLaptop }) => (
  <Box
    sx={{
      backgroundColor: "#C1CEE0",
      borderRadius: "5px",
      p: 1,
      width: isLaptop ? "160px" : "160px",
      height: "125px",
      
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
      positions={{ desktop: [82, 91], laptop: [70, 40] }}
      isLaptop={isLaptop}
      id="REU.2"
      label="Management of Products for Reuse"
    />
  </Box>
);

export default REUGroup;
