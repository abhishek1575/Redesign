import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";

const ACQGroup = ({ StyledPaper, isLaptop }) => (
  <Box
    sx={{
      backgroundColor: "#D9EAD3",
      borderRadius: "5px",
      p: 1,
      width: "140px",
      height: "110px",
      flexShrink: 0,
    }}
  >
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      textAlign="center"
      sx={{ mb: 1 }}
    >
      Acquisition Process Group (ACQ)
    </Typography>
    <PositionedItem
      style={StyledPaper}
      positions={{ desktop: [94, 78.5], laptop: [95, 72] }}
      isLaptop={isLaptop}
      id="ACQ.2"
      label="Supplier Agreement Management"
    />
  </Box>
);

export default ACQGroup;
