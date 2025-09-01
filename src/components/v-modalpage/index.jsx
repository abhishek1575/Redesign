import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useMemo, useState } from "react";
import SUPGroup from "./groups/SUPGroup";
import SYSGroup from "./groups/SYSGroup";
import VALGroup from "./groups/VALGroup";
import MANGroup from "./groups/MANgroup";
import SWEGroup from "./groups/SWEGroup";
import HWEGroup from "./groups/HWEGroup";
import PIMGroup from "./groups/PIMGroup";
import REUGroup from "./groups/REUGroup";
import MLEGroup from "./groups/MLEGroup";
import ACQGroup from "./groups/ACQGroup";
import SPLGroup from "./groups/SPLGroup";

const allProcessAreas = ["SUP.1", "SUP.8", "SUP.9", "SUP.10", "SUP.11", "SYS.1", "SYS.2", "SYS.3", "SYS.4", "SYS.5", "VAL.1", "MAN.3", "MAN.5", "MAN.6", "SWE.1", "SWE.2", "SWE.3", "SWE.4", "SWE.5", "SWE.6", "HWE.1", "HWE.2", "HWE.3", "HWE.4", "HWE.5", "HWE.6", "PIM.3", "REU.2", "MLE.1", "MLE.2", "MLE.3", "MLE.4", "ACQ.4", "SPL.2"];

// Define project mappings for individual process areas
const projectMappings = {
  All: allProcessAreas,
  ADAS: ["SUP.8", "SYS.1", "SYS.2", "SYS.3", "SYS.4", "SYS.5", "SWE.1", "SWE.2", "SWE.3", "SWE.4", "SWE.5", "SWE.6", "HWE.1", "HWE.2", "HWE.3", "HWE.4", "MAN.3"],
  PEPS: ["SUP.8", "SYS.1", "SYS.2", "SYS.3", "SYS.4", "SYS.5", "SWE.1", "SWE.2", "SWE.3", "SWE.4", "SWE.5", "SWE.6", "HWE.1", "HWE.2", "HWE.3", "HWE.4", "MAN.3"],
  FOTA: ["SUP.8", "SUP.9", "SUP.10", "SYS.1", "SYS.2", "SYS.3", "SYS.4", "SYS.5", "SWE.1", "SWE.2", "SWE.3", "SWE.4", "SWE.5", "SWE.6", "HWE.1", "HWE.2", "HWE.3", "HWE.4", "HWE.5", "HWE.6", "MAN.3", "MAN.5"],
  "HARDWARE TEAM": ["SUP.8", "HWE.1", "HWE.2", "HWE.3", "HWE.4", "MAN.3"],
};

const Index = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedProject, setSelectedProject] = useState("All");

  const enabledProcessAreas = projectMappings[selectedProject];
  // const currentMapping = projectMappings[selectedProject];

  const { StyledPaper, SysPaper } = useMemo(() => {
    const baseStyle = {
      backgroundColor: "#fff",
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: "8px",
      whiteSpace: "normal",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      boxSizing: "border-box",
    };

    return {
      StyledPaper: {
        ...baseStyle,
        padding: theme.spacing(1),
        width: isMobile ? "100px" : isLaptop ? "120px" : "140px",
        minHeight: "50px",
        fontSize: isMobile ? "0.65rem" : "0.75rem",
      },
      SysPaper: {
        ...baseStyle,
        padding: theme.spacing(1),
        width: isLaptop ? "120px" : "140px",
        minHeight: "50px",
        fontSize: isLaptop ? "0.7rem" : "0.75rem",
      },
    };
  }, [isLaptop, isMobile, theme]);

  return (
    <Box sx={{ width: "100%", p: 1, boxSizing: "border-box", backgroundColor: theme.palette.background.default }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 1 : 0,
        }}
      >
       
        <Typography variant="subtitle2" fontWeight="bold">
          Automotive SPICE 4.0
        </Typography>
     
        <FormControl size="small" sx={{ minWidth: 180 }}>
          {/* <InputLabel>Filter by Project</InputLabel> */}
          <Select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            label="Filter by Project"
            sx={{ bgcolor: "background.paper" }}
          >
            <MenuItem value="All">All Projects</MenuItem>
            <MenuItem value="ADAS">ADAS</MenuItem>
            <MenuItem value="PEPS">PEPS</MenuItem>
            <MenuItem value="FOTA">FOTA</MenuItem>
            <MenuItem value="HARDWARE TEAM">HARDWARE TEAM</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* Left Column: SUP Group */}
        <SUPGroup
          StyledPaper={StyledPaper}
          isLaptop={isLaptop}
          enabledProcessAreas={enabledProcessAreas}
        />

        {/* Center Column: Engineering Groups */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            flexShrink: 0,
          }}
        >
          {/* Top Row: SYS and VAL Groups */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "flex-start",
            }}
          >
            <SYSGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />
            <VALGroup
              StyledPaper={StyledPaper}
              enabledProcessAreas={enabledProcessAreas}
            />
            <MANGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />
          </Box>

          {/* Middle Row: SWE, HWE, PIM & REU Groups */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              position: "relative",
            }}
          >
            <SWEGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />

            <HWEGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <PIMGroup
                StyledPaper={StyledPaper}
                enabledProcessAreas={enabledProcessAreas}
              />
              <REUGroup
                StyledPaper={StyledPaper}
                enabledProcessAreas={enabledProcessAreas}
              />
            </Box>
          </Box>

          {/* Bottom Row: MLE, ACQ & SPL Groups */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              mt: 1,
            }}
          >
            <MLEGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />

            <ACQGroup
              StyledPaper={StyledPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />

            <SPLGroup
              SysPaper={SysPaper}
              isLaptop={isLaptop}
              enabledProcessAreas={enabledProcessAreas}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

// import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
// import { useMemo } from "react";
// import SUPGroup from "./groups/SUPGroup";
// import SYSGroup from "./groups/SYSGroup";
// import VALGroup from "./groups/VALGroup";
// import MANGroup from "./groups/MANGroup";
// import SWEGroup from "./groups/SWEGroup";
// import HWEGroup from "./groups/HWEGroup";
// import PIMGroup from "./groups/PIMGroup";
// import REUGroup from "./groups/REUGroup";
// import MLEGroup from "./groups/MLEGroup";
// import ACQGroup from "./groups/ACQGroup";
// import SPLGroup from "./groups/SPLGroup";

// const Index = () => {
//   const theme = useTheme();
//   const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const { StyledPaper, SysPaper } = useMemo(() => {
//     const baseStyle = {
//       backgroundColor: "#fff",
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//       borderRadius: "8px",
//       whiteSpace: "normal",
//       wordWrap: "break-word",
//       overflowWrap: "break-word",
//       boxSizing: "border-box",
//     };

//     return {
//       StyledPaper: {
//         ...baseStyle,
//         padding: theme.spacing(1),
//         width: isMobile ? "100px" : isLaptop ? "120px" : "140px",
//         minHeight: "50px",
//         fontSize: isMobile ? "0.65rem" : "0.75rem",
//       },
//       SysPaper: {
//         ...baseStyle,
//         padding: theme.spacing(1),
//         width: isLaptop ? "120px" : "140px",
//         minHeight: "50px",
//         fontSize: isLaptop ? "0.7rem" : "0.75rem",
//       },
//     };
//   }, [isLaptop, isMobile, theme]);

//   return (
//     <Box sx={{ width: "100%", p: 1, boxSizing: "border-box" }}>
//       <Typography
//         variant="subtitle2"
//         fontWeight="bold"
//         textAlign="center"
//         sx={{ mb: 1 }}
//       >
//         Automotive SPICE 4.0
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           gap: 1,
//           justifyContent: "center",
//           alignItems: "flex-start",
//           position: "relative",
//         }}
//       >

//         {/* Left Column: SUP Group */}
//         <SUPGroup StyledPaper={StyledPaper} isLaptop={isLaptop} />

//         {/* Center Column: Engineering Groups */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 1,
//             flexShrink: 0,
//           }}
//         >
//           {/* Top Row: SYS and VAL Groups */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 1,
//               alignItems: "flex-start",
//             }}
//           >
//             <SYSGroup SysPaper={SysPaper} isLaptop={isLaptop} />
//             <VALGroup StyledPaper={StyledPaper} />
//             <MANGroup SysPaper={SysPaper} isLaptop={isLaptop} />
//           </Box>

//           {/* Middle Row: SWE, HWE, PIM & REU Groups */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 1,
//               position: "relative",
//             }}
//           >
//             <SWEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

//             <HWEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//               <PIMGroup StyledPaper={StyledPaper} />
//               <REUGroup StyledPaper={StyledPaper} />
//             </Box>
//           </Box>

//           {/* Bottom Row: MLE, ACQ & SPL Groups */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               gap: 1,
//               mt: 1,
//             }}
//           >
//             <MLEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

//             <ACQGroup StyledPaper={StyledPaper} isLaptop={isLaptop} />

//             <SPLGroup SysPaper={SysPaper} isLaptop={isLaptop} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Index;
