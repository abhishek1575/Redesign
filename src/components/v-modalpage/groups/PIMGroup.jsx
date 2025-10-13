import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem"; // import PositionedItem
import { useNavigate } from "react-router-dom";

const PIMGroup = ({ StyledPaper, isLaptop, enabledProcessAreas }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
      navigate(`/aspice/${id}`);
  };
  return (
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
        Process Improvement Process Group (PIM)
      </Typography>

      <PositionedItem
        style={StyledPaper}
        positions={{ desktop: [70, 50], laptop: [70, 50] }} // adjust as needed
        isLaptop={isLaptop}
        id="PIM.3"
        label="Process Improvement"
        enabled={enabledProcessAreas.includes("PIM.3")}
        onClick={() => handleClick("PIM.3")}
      />
    </Box>
  );
}
  

export default PIMGroup;
