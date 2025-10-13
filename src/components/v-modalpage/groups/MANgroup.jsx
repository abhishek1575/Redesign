import { Typography, Box } from "@mui/material";
import PositionedItem from "../PositionedItem";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const MANGroup = ({ SysPaper, isLaptop, enabledProcessAreas }) => {
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
        height: "250px",
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
        Management Process Group (MAN)
      </Typography>

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [32, 50], laptop: [32, 50] }}
        isLaptop={isLaptop}
        id="MAN.3"
        label="Project Management"
        enabled={enabledProcessAreas.includes("MAN.3")}
        onClick={() => handleClick("MAN.3")}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [59, 50], laptop: [59, 50] }}
        isLaptop={isLaptop}
        id="MAN.5"
        label="Risk Management"
        enabled={enabledProcessAreas.includes("MAN.5")}
        onClick = {()=>{handleClick("MAN.5")}}
      />

      <PositionedItem
        style={SysPaper}
        positions={{ desktop: [86, 50], laptop: [86, 50] }}
        isLaptop={isLaptop}
        id="MAN.6"
        label="Measurement"
        enabled={enabledProcessAreas.includes("MAN.6")}
        onClick={()=>{handleClick("MAN.6")}}
      />
    </Box>
  );
}
 

export default MANGroup;
