import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { useMemo } from "react";
import SUPGroup from "./groups/SUPGroup";
import SYSGroup from "./groups/SYSGroup";
import VALGroup from "./groups/VALGroup";
import MANGroup from "./groups/MANGroup";
import SWEGroup from "./groups/SWEGroup";
import HWEGroup from "./groups/HWEGroup";
import PIMGroup from "./groups/PIMGroup";
import REUGroup from "./groups/REUGroup";
import MLEGroup from "./groups/MLEGroup";
import ACQGroup from "./groups/ACQGroup";
import SPLGroup from "./groups/SPLGroup";

const Index = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Box sx={{ width: "100%", p: 1, boxSizing: "border-box" }}>
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 1 }}
      >
        Automotive SPICE 4.0
      </Typography>
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
        <SUPGroup StyledPaper={StyledPaper} isLaptop={isLaptop} />

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
            <SYSGroup SysPaper={SysPaper} isLaptop={isLaptop} />
            <VALGroup StyledPaper={StyledPaper} />
            <MANGroup SysPaper={SysPaper} isLaptop={isLaptop} />
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
            <SWEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

            <HWEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <PIMGroup StyledPaper={StyledPaper} />
              <REUGroup StyledPaper={StyledPaper} />
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
            <MLEGroup SysPaper={SysPaper} isLaptop={isLaptop} />

            <ACQGroup StyledPaper={StyledPaper} isLaptop={isLaptop} />

            <SPLGroup SysPaper={SysPaper} isLaptop={isLaptop} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

