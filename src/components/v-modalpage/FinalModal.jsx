import {
  Box,
  Grid,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { useMemo } from "react";

const FinalModal = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Memoized responsive paper component
  const { StyledPaper, SysPaper } = useMemo(() => {
    const baseStyle = {
      backgroundColor: "#fff",
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: "8px",
      whiteSpace: "normal",
      wordWrap: "break-word",
      overflowWrap: "break-word",
    };

    return {
      StyledPaper: styled(Paper)(({ theme }) => ({
        ...baseStyle,
        padding: theme.spacing(1),
        width: isMobile ? "100px" : isLaptop ? "120px" : "140px",
        minHeight: "50px",
        fontSize: isMobile ? "0.65rem" : "0.75rem",
      })),
      SysPaper: styled(Paper)(({ theme }) => ({
        ...baseStyle,
        padding: theme.spacing(1),
        width: isLaptop ? "120px" : "140px",
        minHeight: "50px",
        fontSize: isLaptop ? "0.7rem" : "0.75rem",
      })),
    };
  }, [isLaptop, isMobile, theme]);

  // Item component with responsive styling
  const Item = ({ id, label }) => (
    <StyledPaper elevation={2}>
      <b>{id}</b>
      <br />
      {label}
    </StyledPaper>
  );

  // SysBox component with responsive positioning
  const SysBox = ({ id, label, positions }) => {
    const [top, left] = positions[isLaptop ? "laptop" : "desktop"];

    return (
      <Box
        sx={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <SysPaper elevation={2}>
          <b>{id}</b>
          <br />
          {label}
        </SysPaper>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        p: 1,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* SUP Group */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 1,
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#D7EAD8",
            p: 1,
            borderRadius: "5px",
            minWidth: isMobile ? "140px" : isLaptop ? "130px" : "150px",
            height: "510px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto", // Auto margins for horizontal centering
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            mb={1}
            textAlign="center"
          >
            Supporting Process Group (SUP)
          </Typography>

          <Grid container spacing={1} direction="column" alignItems="center">
            {[
              { id: "SUP 1", label: "Quality Assurance" },
              { id: "SUP 2", label: "Configuration Management" },
              { id: "SUP 3", label: "Problem Resolution Management" },
              { id: "SUP 4", label: "Change Request Management" },
              { id: "SUP 5", label: "Machine Learning Data Management" },
            ].map((item, i) => (
              <Grid item key={i} sx={{ width: "100%" }}>
                <Item id={item.id} label={item.label} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* First SYS Group */}
          <Box
            sx={{
              backgroundColor: "#f9d3b4",
              borderRadius: "5px",
              p: 1,
              width: isLaptop ? "425px" : "525px",
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
              System Engineering Process Group (SYS)
            </Typography>

            <SysBox
              id="SYS.1"
              label="Requirement Elicitation"
              positions={{
                desktop: [25, 18],
                laptop: [25, 22],
              }}
            />
            <SysBox
              id="SYS.2"
              label="System Requirement Analysis"
              positions={{
                desktop: [53, 25],
                laptop: [50, 32],
              }}
            />
            <SysBox
              id="SYS.3"
              label="System Architecture Design"
              positions={{
                desktop: [81, 35],
                laptop: [75, 35],
              }}
            />
            <SysBox
              id="SYS.4"
              label="System Integration and Verification"
              positions={{
                desktop: [81, 65],
                laptop: [75, 67],
              }}
            />
            <SysBox
              id="SYS.5"
              label="System Verification"
              positions={{
                desktop: [53, 80],
                laptop: [50, 78],
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            {/* Software Engineering Process Group (SWE) */}
            <Box
              sx={{
                backgroundColor: "#f9d3b4",
                borderRadius: "5px",
                p: 1,
                width: isLaptop ? "319px" : "394px",
                height: "240px",
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

              <SysBox
                id="SWE.1"
                label="Software Requirements Analysis"
                positions={{
                  desktop: [26, 20],
                  laptop: [26, 22],
                }}
              />
              <SysBox
                id="SWE.2"
                label="Software Architectural Design"
                positions={{
                  desktop: [54, 25],
                  laptop: [54, 25],
                }}
              />
              <SysBox
                id="SWE.3"
                label="Software Details Design and Unit Construction"
                positions={{
                  desktop: [82, 30],
                  laptop: [82, 30],
                }}
              />
              <SysBox
                id="SWE.4"
                label="Software Unit Verification"
                positions={{
                  desktop: [85, 70],
                  laptop: [85, 70],
                }}
              />
              <SysBox
                id="SWE.5"
                label="Software Component Verification and Integration Verification"
                positions={{
                  desktop: [54, 75],
                  laptop: [55, 75],
                }}
              />
              <SysBox
                id="SWE.6"
                label="Software Varification"
                positions={{
                  desktop: [23, 80],
                  laptop: [24, 80],
                }}
              />
            </Box>

            {/* New Hardware Engineering Process Group (HWE) */}
            <Box
              sx={{
                backgroundColor: "#f9d3b4",
                borderRadius: "5px",
                p: 1,
                width: isLaptop ? "319px" : "394px",
                height: "240px",
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

              <SysBox
                id="HWE.1"
                label="Hardware Requirements Definition"
                positions={{
                  desktop: [26, 20],
                  laptop: [26, 22],
                }}
              />
              <SysBox
                id="HWE.2"
                label="Hardware Design and Development"
                positions={{
                  desktop: [54, 25],
                  laptop: [54, 25],
                }}
              />
              <SysBox
                id="HWE.3"
                label="Hardware Verification and Testing"
                positions={{
                  desktop: [82, 30],
                  laptop: [82, 30],
                }}
              />
            </Box>
          </Box>
          {/* <Box
            sx={{
              backgroundColor: "#f9d3b4",
              borderRadius: "5px",
              p: 1,
              width: isLaptop ? "319px" : "394px",
              height: "240px",
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

            <SysBox
              id="SWE.1"
              label="Software Requirements Analysis"
              positions={{
                desktop: [26, 20],
                laptop: [26, 22],
              }}
            />
            <SysBox
              id="SWE.2"
              label="Software Architectural Design"
              positions={{
                desktop: [54, 25],
                laptop: [54, 25],
              }}
            />
            <SysBox
              id="SWE.3"
              label="Software Details Design and Unit Construction"
              positions={{
                desktop: [82, 30],
                laptop: [82, 30],
              }}
            />
            <SysBox
              id="SWE.4"
              label="Software Unit Verification"
              positions={{
                desktop: [85, 70],
                laptop: [85, 70],
              }}
            />
            <SysBox
              id="SWE.5"
              label="Software Component Verification and Integration Verification"
              positions={{
                desktop: [54, 75],
                laptop: [55, 75],
              }}
            />
            <SysBox
              id="SWE.6"
              label="Software Varification"
              positions={{
                desktop: [23, 80],
                laptop: [24, 80],
              }}
            />
          </Box> */}
        </Box>

        {/* VAL Group */}
        <Box
          sx={{
            backgroundColor: "#f9d3b4",
            p: 1,
            borderRadius: "5px",
            width: "155px",
            height: "125px",
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
            Validation Process Group (VAL)
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <StyledPaper elevation={2}>
              <b>VAL.1</b>
              <br />
              Validation
            </StyledPaper>
          </Box>
        </Box>
        
        {/*Management Process Group (MAN)*/}
        <Box
          sx={{
            backgroundColor: "#C1CEE0",
            borderRadius: "5px",
            p: 1,
            width: isLaptop ? "160px" : "180px",
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
          <SysBox
            id="MAN.3"
            label="Project Management"
            positions={{
              desktop: [32, 50],
              laptop: [32, 50],
            }}
          />
          <SysBox
            id="MAN.5"
            label="Risk Management"
            positions={{
              desktop: [59, 50],
              laptop: [59, 50],
            }}
          />
          <SysBox
            id="MAN.6"
            label="Measurement"
            positions={{
              desktop: [86, 50],
              laptop: [86, 50],
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FinalModal;
