import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Paper,
  Divider,
} from "@mui/material";
import {
  BookOpen,
  Users,
  Lightbulb,
  Cpu,
  HardDrive,
  Code,
  Factory,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function ISO26262Portal() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  const partRefs = {
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
  };

  const parts = {
    1: {
      icon: BookOpen,
      title: "Vocabulary",
      desc: "Definitions and terminology",
      color: "#E3F2FD",
      border: "#90CAF9",
    },
    2: {
      icon: Users,
      title: "Management",
      desc: "Functional safety management",
      color: "#E0F7FA",
      border: "#80DEEA",
    },
    3: {
      icon: Lightbulb,
      title: "Concept Phase",
      desc: "Risk analysis and goals",
      color: "#FFF8E1",
      border: "#FFE082",
    },
    4: {
      icon: Cpu,
      title: "System Development",
      desc: "System level design",
      color: "#E8F5E9",
      border: "#A5D6A7",
      parent: 3,
    },
    5: {
      icon: HardDrive,
      title: "Hardware Development",
      desc: "Hardware design and metrics",
      color: "#F1F8E9",
      border: "#C5E1A5",
      parent: 3,
    },
    6: {
      icon: Code,
      title: "Software Development",
      desc: "Software design and testing",
      color: "#E1F5FE",
      border: "#81D4FA",
      parent: 3,
    },
    7: {
      icon: Factory,
      title: "Production & Operation",
      desc: "Manufacturing and service life",
      color: "#FCE4EC",
      border: "#F48FB1",
    },
    8: {
      icon: Settings,
      title: "Supporting Processes",
      desc: "Configuration and verification",
      color: "#EDE7F6",
      border: "#B39DDB",
    },
    9: {
      icon: Shield,
      title: "ASIL & Risk Analysis",
      desc: "ASIL-oriented analysis",
      color: "#FFEBEE",
      border: "#EF9A9A",
    },
  };

  useEffect(() => {
    const calculateLines = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const fromRect = partRefs[3].current?.getBoundingClientRect();
      if (!fromRect) return;

      const newLines = [4, 5, 6]
        .map((partNum) => {
          const toRect = partRefs[partNum].current?.getBoundingClientRect();
          if (!toRect) return null;

          return {
            x1: fromRect.left + fromRect.width / 2 - containerRect.left,
            y1: fromRect.bottom - containerRect.top,
            x2: toRect.left + toRect.width / 2 - containerRect.left,
            y2: toRect.top - containerRect.top,
          };
        })
        .filter(Boolean);
      setLines(newLines);
    };

    // Calculate lines on mount and on window resize
    calculateLines();
    window.addEventListener("resize", calculateLines);
    return () => window.removeEventListener("resize", calculateLines);
  }, [partRefs]);

  const PartCard = React.forwardRef(({ num, data }, ref) => {
    const isSelected = selectedPart === num;
    const Icon = data.icon;

    return (
      <Card
        ref={ref}
        onClick={() => setSelectedPart(isSelected ? null : num)}
        sx={{
          backgroundColor: data.color,
          border: `1.5px solid ${data.border}`,
          borderRadius: 3,
          boxShadow: isSelected ? 6 : 2,
          cursor: "pointer",
          transition: "0.3s",
          height: "100%",
          "&:hover": { boxShadow: 6, transform: "translateY(-3px)" },
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 1,
                }}
              >
                <Icon size={18} color="#424242" />
              </Box>
              <Typography
                variant="subtitle1"
                fontWeight="600"
                color="text.primary"
              >
                {data.title}
              </Typography>
            </Box>
            <Chip
              label={`Part ${num}`}
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#555",
                fontWeight: 600,
                border: `1px solid ${data.border}`,
              }}
            />
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, lineHeight: 1.4 }}
          >
            {data.desc}
          </Typography>

          {isSelected && (
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                right: 12,
                color: "#555",
              }}
            >
              <ChevronRight size={18} />
            </Box>
          )}
        </CardContent>
      </Card>
    );
  });

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight={700} color="text.primary">
          ISO 26262 Functional Safety Lifecycle
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Comprehensive Management Portal
        </Typography>
      </Box>

      {/* Parts Section */}
      <Box
        sx={{ maxWidth: 1100, mx: "auto", position: "relative" }}
        ref={containerRef}
      >
        <Grid container spacing={2} sx={{ position: "relative", zIndex: 2 }}>
          <Grid item xs={12}>
            <PartCard num={1} data={parts[1]} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <PartCard num={2} data={parts[2]} />
          </Grid>
          <Grid item xs={12} sm={8} sx={{ mb: 6 }}>
            <PartCard num={3} data={parts[3]} ref={partRefs[3]} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <PartCard num={4} data={parts[4]} ref={partRefs[4]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PartCard num={5} data={parts[5]} ref={partRefs[5]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PartCard num={6} data={parts[6]} ref={partRefs[6]} />
          </Grid>

          <Grid item xs={12}>
            <PartCard num={7} data={parts[7]} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <PartCard num={8} data={parts[8]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PartCard num={9} data={parts[9]} />
          </Grid>
        </Grid>

        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {lines.map((line, index) => (
            <path
              key={index}
              d={`M ${line.x1} ${line.y1} C ${line.x1} ${line.y1 + 60}, ${
                line.x2
              } ${line.y2 - 60}, ${line.x2} ${line.y2}`}
              stroke="#9e9e9e"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="6 4"
            />
          ))}
        </svg>

        {/* ASIL Matrix */}
        <Paper
          elevation={3}
          sx={{
            mt: 5,
            p: 3,
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography variant="h6" fontWeight="600" mb={2}>
            ASIL Risk Classification Matrix
          </Typography>

          <Grid container spacing={1} textAlign="center">
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2">S1</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2">S2</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2">S3</Typography>
            </Grid>
            <Grid item xs={3}></Grid>

            {[["E1", "QM", "QM", "A", "C1"],
              ["E2", "QM", "A", "B", "C2"],
              ["E3", "A", "B", "C", "C3"],
              ["E4", "B", "C", "D", "C3"],
            ].map((row, i) => (
              <React.Fragment key={i}>
                <Grid item xs={3}>
                  <Typography variant="subtitle2">{row[0]}</Typography>
                </Grid>
                {row.slice(1, 4).map((cell, j) => {
                  const colors = {
                    QM: "#C8E6C9",
                    A: "#FFF9C4",
                    B: "#FFE0B2",
                    C: "#FFCDD2",
                    D: "#EF9A9A",
                  };
                  return (
                    <Grid
                      key={j}
                      item
                      xs={2}
                      sx={{
                        bgcolor: colors[cell],
                        borderRadius: 1,
                        py: 1,
                        border: "1px solid #ddd",
                        fontWeight: 500,
                      }}
                    >
                      {cell}
                    </Grid>
                  );
                })}
                <Grid item xs={3}>
                  <Typography variant="subtitle2">{row[4]}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <Divider sx={{ my: 2 }} />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption" color="text.secondary">
              <strong>S:</strong> Severity &nbsp; <strong>E:</strong> Exposure
              &nbsp; <strong>C:</strong> Controllability
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ISO 26262-3:2018
            </Typography>
          </Box>
        </Paper>

        {/* Quick Access */}
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            Quick Access
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#90CAF9",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { background: "#64B5F6" },
                }}
                startIcon={<BookOpen size={18} />}
              >
                Safety Glossary
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#81C784",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { background: "#66BB6A" },
                }}
                startIcon={<Settings size={18} />}
              >
                Audit Checklist
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#BA68C8",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { background: "#AB47BC" },
                }}
                startIcon={<Shield size={18} />}
              >
                Compliance Status
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}








// import React, { useState, useRef, useEffect } from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Chip,
//   Button,
//   Box,
//   Paper,
//   Avatar,
//   Tooltip,
// } from "@mui/material";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import {
//   MenuBook,
//   Group,
//   EmojiObjects,
//   DeveloperBoard,
//   Save,
//   Code,
//   Factory,
//   Settings,
//   Security,
//   ChevronRight,
//   ArrowDownward,
//   ArrowUpward,
// } from "@mui/icons-material";
// import { blue, teal, amber, green, lime, lightBlue, pink, indigo, red } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#dc004e",
//     },
//     background: {
//       default: "#f4f6f8",
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, sans-serif",
//     h4: {
//       fontWeight: 700,
//     },
//     h5: {
//       fontWeight: 600,
//       marginTop: '2rem',
//       marginBottom: '1rem',
//     }
//   },
// });

// const parts = {
//   1: {
//     icon: MenuBook,
//     title: "Vocabulary",
//     desc: "Definitions and terminology",
//     color: blue[100],
//     borderColor: blue[300],
//   },
//   2: {
//     icon: Group,
//     title: "Management",
//     desc: "Functional safety management",
//     color: teal[100],
//     borderColor: teal[300],
//   },
//   3: {
//     icon: EmojiObjects,
//     title: "Concept Phase",
//     desc: "Risk analysis and goals",
//     color: amber[100],
//     borderColor: amber[300],
//   },
//   4: {
//     icon: DeveloperBoard,
//     title: "System Development",
//     desc: "System level design",
//     color: green[100],
//     borderColor: green[300],
//     parent: 3,
//   },
//   5: {
//     icon: Save,
//     title: "Hardware Development",
//     desc: "Hardware design and metrics",
//     color: lime[100],
//     borderColor: lime[300],
//     parent: 3,
//   },
//   6: {
//     icon: Code,
//     title: "Software Development",
//     desc: "Software design and testing",
//     color: lightBlue[100],
//     borderColor: lightBlue[300],
//     parent: 3,
//   },
//   7: {
//     icon: Factory,
//     title: "Production & Operation",
//     desc: "Manufacturing and service life",
//     color: pink[100],
//     borderColor: pink[300],
//   },
//   8: {
//     icon: Settings,
//     title: "Supporting Processes",
//     desc: "Configuration and verification",
//     color: indigo[100],
//     borderColor: indigo[300],
//   },
//   9: {
//     icon: Security,
//     title: "ASIL & Risk Analysis",
//     desc: "ASIL-oriented analysis",
//     color: red[100],
//     borderColor: red[300],
//   },
// };

// const StyledCard = styled(Card)(({ theme, color, border, selected, highlighted }) => ({
//   height: "100%",
//   border: `2px solid ${highlighted ? theme.palette.primary.main : border}`,
//   backgroundColor: color,
//   cursor: "pointer",
//   transition: "all 0.3s",
//   transform: highlighted ? 'scale(1.05)' : 'scale(1)',
//   boxShadow: selected ? theme.shadows[8] : (highlighted ? theme.shadows[6] : theme.shadows[2]),
//   "&:hover": {
//     transform: "translateY(-4px) scale(1.02)",
//     boxShadow: theme.shadows[6],
//   },
// }));

// const PartCard = React.forwardRef(({ num, data, tooltip, highlighted, ...props }, ref) => {
//   const [selectedPart, setSelectedPart] = useState(null);
//   const isSelected = selectedPart === num;

//   return (
//     <Tooltip title={tooltip || data.desc} arrow>
//       <StyledCard
//         ref={ref}
//         color={data.color}
//         border={data.borderColor}
//         selected={isSelected}
//         highlighted={highlighted}
//         onClick={() => setSelectedPart(isSelected ? null : num)}
//         {...props}
//       >
//         <CardContent>
//           <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//             <Box display="flex" alignItems="center" gap={2}>
//               <Avatar sx={{ bgcolor: "white" }}>
//                 <data.icon sx={{ color: "text.secondary" }} />
//               </Avatar>
//               <Typography variant="h6" component="h3">
//                 {data.title}
//               </Typography>
//             </Box>
//             <Chip label={`Part ${num}`} size="small" />
//           </Box>
//           {isSelected && (
//             <ChevronRight sx={{ position: "absolute", bottom: 12, right: 12, color: "text.secondary" }} />
//           )}
//         </CardContent>
//       </StyledCard>
//     </Tooltip>
//   );
// });

// const VModelLayout = () => {
//   const [hovered, setHovered] = useState(null);

//   const VSide = ({ children, right }) => (
//     <Grid item xs={5} container direction={right ? "column-reverse" : "column"} spacing={2} justifyContent="flex-end">
//       {children}
//     </Grid>
//   );

//   const VConnector = () => (
//     <Grid item xs={2} container alignItems="center" justifyContent="center">
//         <ArrowDownward fontSize="large" color="disabled" />
//         <ArrowUpward fontSize="large" color="disabled" />
//     </Grid>
//   );

//   const TestPhaseCard = ({ title, color, borderColor, onMouseEnter, onMouseLeave, highlighted }) => (
//     <Tooltip title={`Corresponds to ${title.split(' ')[0]} development`} arrow>
//         <Paper 
//             onMouseEnter={onMouseEnter} 
//             onMouseLeave={onMouseLeave} 
//             sx={{
//                 p: 2, 
//                 textAlign: 'center', 
//                 border: `2px dashed ${highlighted ? theme.palette.primary.main : borderColor}`,
//                 transition: 'all 0.3s',
//                 transform: highlighted ? 'scale(1.05)' : 'scale(1)',
//                 cursor: 'pointer',
//                 backgroundColor: highlighted ? color : 'white',
//             }}
//         >
//             <Typography variant="subtitle1">{title}</Typography>
//         </Paper>
//     </Tooltip>
//   );

//   return (
//     <Paper elevation={3} sx={{ p: 3 }}>
//       <Grid container spacing={2} alignItems="flex-end">
//         <Grid item xs={12} container justifyContent="center" mb={2}>
//             <Grid item xs={6} onMouseEnter={() => setHovered(3)} onMouseLeave={() => setHovered(null)}>
//                 <PartCard num={3} data={parts[3]} highlighted={hovered === 3 || hovered === 13} />
//             </Grid>
//         </Grid>

//         <VSide>
//           <Grid item onMouseEnter={() => setHovered(4)} onMouseLeave={() => setHovered(null)}>
//             <PartCard num={4} data={parts[4]} highlighted={hovered === 4} />
//           </Grid>
//           <Grid item onMouseEnter={() => setHovered(5)} onMouseLeave={() => setHovered(null)}>
//             <PartCard num={5} data={parts[5]} highlighted={hovered === 5} />
//           </Grid>
//           <Grid item onMouseEnter={() => setHovered(6)} onMouseLeave={() => setHovered(null)}>
//             <PartCard num={6} data={parts[6]} highlighted={hovered === 6} />
//           </Grid>
//         </VSide>

//         <VConnector />

//         <VSide right>
//           <Grid item>
//             <TestPhaseCard title="System Integration & Testing" color={green[50]} borderColor={green[300]} onMouseEnter={() => setHovered(4)} onMouseLeave={() => setHovered(null)} highlighted={hovered === 4} />
//           </Grid>
//           <Grid item>
//             <TestPhaseCard title="Hardware Integration & Testing" color={lime[50]} borderColor={lime[300]} onMouseEnter={() => setHovered(5)} onMouseLeave={() => setHovered(null)} highlighted={hovered === 5} />
//           </Grid>
//           <Grid item>
//             <TestPhaseCard title="Software Integration & Testing" color={lightBlue[50]} borderColor={lightBlue[300]} onMouseEnter={() => setHovered(6)} onMouseLeave={() => setHovered(null)} highlighted={hovered === 6} />
//           </Grid>
//         </VSide>

//         <Grid item xs={12} container justifyContent="center" mt={2}>
//             <Grid item xs={6} onMouseEnter={() => setHovered(13)} onMouseLeave={() => setHovered(null)}>
//                 <TestPhaseCard title="Safety Validation" color={amber[50]} borderColor={amber[300]} highlighted={hovered === 3 || hovered === 13} />
//             </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// const AsilMatrix = () => (
//   <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
//     <Typography variant="h6" gutterBottom>
//       ASIL Risk Classification Matrix
//     </Typography>
//     <Grid container spacing={1} textAlign="center">
//       <Grid item xs={2.4}></Grid>
//       <Grid item xs={2.4}><Typography variant="subtitle2">S1</Typography></Grid>
//       <Grid item xs={2.4}><Typography variant="subtitle2">S2</Typography></Grid>
//       <Grid item xs={2.4}><Typography variant="subtitle2">S3</Typography></Grid>
//       <Grid item xs={2.4}></Grid>
//       {[
//         ["E1", "QM", "QM", "A", "C1"],
//         ["E2", "QM", "A", "B", "C2"],
//         ["E3", "A", "B", "C", "C3"],
//         ["E4", "B", "C", "D", "C3"],
//       ].map((row, i) => (
//         <React.Fragment key={i}>
//           <Grid item xs={2.4} container alignItems="center" justifyContent="center"><Typography variant="subtitle2">{row[0]}</Typography></Grid>
//           {row.slice(1, 4).map((cell, j) => {
//             const colors = {
//               QM: { bgcolor: green[100], borderColor: green[300] },
//               A: { bgcolor: amber[100], borderColor: amber[300] },
//               B: { bgcolor: "#FFD580", borderColor: "#FFC107" },
//               C: { bgcolor: red[100], borderColor: red[300] },
//               D: { bgcolor: pink[100], borderColor: pink[300] },
//             };
//             return (
//               <Grid item xs={2.4} key={j}>
//                 <Paper sx={{ p: 1, border: 1, ...colors[cell] }}>
//                   <Typography variant="body2">{cell}</Typography>
//                 </Paper>
//               </Grid>
//             );
//           })}
//           <Grid item xs={2.4} container alignItems="center" justifyContent="center"><Typography variant="subtitle2">{row[4]}</Typography></Grid>
//         </React.Fragment>
//       ))}
//     </Grid>
//     <Box display="flex" justifyContent="space-between" mt={2} color="text.secondary">
//       <Typography variant="caption">
//         <strong>S:</strong> Severity <strong>E:</strong> Exposure <strong>C:</strong> Controllability
//       </Typography>
//       <Typography variant="caption">ISO 26262-3:2018</Typography>
//     </Box>
//   </Paper>
// );

// const QuickAccess = () => (
//   <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
//     <Typography variant="h6" gutterBottom>
//       Quick Access
//     </Typography>
//     <Grid container spacing={2}>
//       <Grid item xs={4}>
//         <Button variant="contained" startIcon={<MenuBook />} fullWidth sx={{ bgcolor: blue[100], color: "black", "&:hover": { bgcolor: blue[200] } }}>
//           Safety Glossary
//         </Button>
//       </Grid>
//       <Grid item xs={4}>
//         <Button variant="contained" startIcon={<Settings />} fullWidth sx={{ bgcolor: green[100], color: "black", "&:hover": { bgcolor: green[200] } }}>
//           Audit Checklist
//         </Button>
//       </Grid>
//       <Grid item xs={4}>
//         <Button variant="contained" startIcon={<Security />} fullWidth sx={{ bgcolor: "#C3B1E1", color: "black", "&:hover": { bgcolor: "#D8BFD8" } }}>
//           Compliance Status
//         </Button>
//       </Grid>
//     </Grid>
//   </Paper>
// );

// export default function ISO26262Portal() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 3 }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={4}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               ISO 26262 Functional Safety Lifecycle
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               Comprehensive Management Portal
//             </Typography>
//           </Box>

//           <Typography variant="h5" component="h2">
//             Development Lifecycle (V-Model)
//           </Typography>
//           <VModelLayout />

//           <Typography variant="h5" component="h2">
//             Overarching Processes
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={6}>
//               <PartCard num={2} data={parts[2]} tooltip="Overall safety management across the entire lifecycle" />
//             </Grid>
//             <Grid item xs={6}>
//                 <PartCard num={9} data={parts[9]} tooltip="ASIL determination and hazard analysis" />
//             </Grid>
//             <Grid item xs={12}>
//               <PartCard num={8} data={parts[8]} tooltip="Supporting processes like configuration management, documentation, etc." />
//             </Grid>
//           </Grid>

//           <Typography variant="h5" component="h2">
//             Other Parts
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={6}>
//               <PartCard num={1} data={parts[1]} tooltip="Glossary of terms and definitions" />
//             </Grid>
//             <Grid item xs={6}>
//               <PartCard num={7} data={parts[7]} tooltip="Production, operation, service, and decommissioning" />
//             </Grid>
//           </Grid>

//           <AsilMatrix />
//           <QuickAccess />
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// }

