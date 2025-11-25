import React, { useState, useMemo } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Paper,
  ThemeProvider,
  createTheme,
  styled,
  LinearProgress,
  Tooltip,
  Button,
} from '@mui/material';
import {
  MenuBook,
  Group,
  EmojiObjects,
  DeveloperBoard,
  Save,
  Code,
  Factory,
  Settings,
  Security,
  ChevronRight,
  ArrowForward,
  SyncAlt,
  Build,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// --- THEME ---
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0d47a1' }, // A deeper, more professional blue
    secondary: { main: '#ff6f00' }, // A vibrant orange for highlights
    background: { default: '#f8f9fa', paper: '#ffffff' },
    text: { primary: '#212529', secondary: '#495057' },
    success: { main: '#1e8e3e' },
    error: { main: '#d93025' },
    info: { main: '#1a73e8' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700, color: '#0d47a1' }, // Title uses primary color
    h5: { fontWeight: 600, color: '#212529', marginBottom: '1rem' },
    h6: { fontWeight: 700, color: '#343a40' },
    subtitle1: { fontWeight: 400, fontSize: '1.1rem', color: '#495057' },
    body1: { fontSize: '1rem' },
    body2: { color: '#6c757d' },
    caption: { color: '#6c757d'},
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          height: '100%',
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '12px',
            }
        }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
            }
        }
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                height: '8px',
                borderRadius: '4px',
            }
        }
    }
  },
});

// --- DATA ---
const partsData = {
    1: { icon: MenuBook, title: "Vocabulary", desc: "Key terms and definitions for ISO 26262", progress: 100 },
    2: { icon: Group, title: "Management of Functional Safety", desc: "Establishing and maintaining functional safety", progress: 85 },
    3: { icon: EmojiObjects, title: "Concept Phase", desc: "Hazard analysis and risk assessment", progress: 90 },
    4: { icon: DeveloperBoard, title: "Product Development: System Level", desc: "System design and architecture", progress: 75 },
    5: { icon: Save, title: "Product Development: Hardware Level", desc: "Hardware design and integration", progress: 60 },
    6: { icon: Code, title: "Product Development: Software Level", desc: "Software design and implementation", progress: 80 },
    7: { icon: Factory, title: "Production and Operation", desc: "Manufacturing, service, and decommissioning", progress: 40 },
    8: { icon: Settings, title: "Supporting Processes", desc: "Configuration, change, and verification management", progress: 95 },
    9: { icon: Security, title: "ASIL-oriented and Safety-oriented Analyses", desc: "Determining Automotive Safety Integrity Levels", progress: 70 },
};

// --- STYLED COMPONENTS ---
const MotionCard = motion(Card);

const PartCard = ({ num, data }) => {
  const Icon = data.icon;

  return (
    <MotionCard
      whileHover={{ transform: 'translateY(-5px)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}
      variant="outlined"
      sx={{
        cursor: 'pointer',
        borderColor: 'rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.paper'
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Chip label={`Part ${num}`} size="small" color="primary" variant="filled" />
          <Box sx={{
              color: 'primary.main',
              bgcolor: 'rgba(13, 71, 161, 0.08)',
              borderRadius: '8px',
              p: 1,
              display: 'flex',
          }}>
              <Icon />
          </Box>
        </Box>
        <Typography variant="h6" component="h3" sx={{ mb: 1, flexGrow: 1 }}>
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {data.desc}
        </Typography>
        <Box sx={{ width: '100%' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                <Typography variant="caption">Progress</Typography>
                <Typography variant="caption" fontWeight="bold">{data.progress}%</Typography>
            </Box>
            <LinearProgress variant="determinate" value={data.progress} color={data.progress === 100 ? 'success' : 'primary'}/>
        </Box>
      </CardContent>
       <Box sx={{ p: 2, pt: 1, mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
         <Button endIcon={<ChevronRight />} size="small" variant="text" color="primary">View Details</Button>
      </Box>
    </MotionCard>
  );
};

const VModelDiagram = () => {
    return (
        <Paper elevation={0} sx={{ p: {xs: 2, md: 4}, background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,249,250,1) 100%)',  border: '1px solid rgba(0,0,0,0.05)' }}>
            <Box textAlign="center" mb={4}>
                 <Typography variant="h5" component="h2" mb={1}>Development Lifecycle (V-Model)</Typography>
                 <Typography variant="subtitle1" color="text.secondary">Illustrating the relationship between development and testing phases.</Typography>
            </Box>
            <Grid container justifyContent="center">
                
                {/* Top of the V */}
                <Grid item xs={12} md={8} lg={6} sx={{mb: 4}}>
                    <PartCard num={3} data={partsData[3]} />
                </Grid>

                {/* V-Shape body */}
                <Grid item xs={12} container spacing={3}>
                    {/* Left side - Development */}
                    <Grid item xs={12} md={5.5} container direction="column" spacing={3}>
                        <Grid item><PartCard num={4} data={partsData[4]} /></Grid>
                        <Grid item><PartCard num={5} data={partsData[5]} /></Grid>
                        <Grid item><PartCard num={6} data={partsData[6]} /></Grid>
                    </Grid>
                    
                    {/* Connector */}
                     <Grid item md={1} sx={{ display: { xs: 'none', md: 'flex' } }} container alignItems="center" justifyContent="center" flexDirection="column" >
                         <SyncAlt sx={{ color: 'text.secondary', my: 3, fontSize: '2rem' }}/>
                    </Grid>

                    {/* Right side - Testing */}
                    <Grid item xs={12} md={5.5} container direction="column" spacing={3} sx={{ mt: {xs: 3, md: 0}}}>
                        <Grid item><TestPhaseCard title="System Integration & Testing" correspondsTo={4} icon={Build} /></Grid>
                        <Grid item><TestPhaseCard title="Hardware Integration & Testing" correspondsTo={5} icon={DeveloperBoard} /></Grid>
                        <Grid item><TestPhaseCard title="Software Unit & Integration Testing" correspondsTo={6} icon={Code} /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

const TestPhaseCard = ({ title, correspondsTo, icon: Icon }) => (
    <Tooltip title={`Validates activities in Part ${correspondsTo}`} arrow placement="top">
         <Paper
            variant="outlined"
            sx={{
                p: 2,
                borderRadius: '12px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                borderColor: 'rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    color: 'primary.main',
                    transform: 'translateY(-3px)',
                }
            }}
        >
            <Icon sx={{ mb: 1, fontSize: '2.5rem' }}/>
            <Typography variant="body1" fontWeight="600">{title}</Typography>
            <Chip label={`Corresponds to Part ${correspondsTo}`} size="small" sx={{mt: 1}}/>
        </Paper>
    </Tooltip>
);

const AsilMatrix = () => {
    const header = ["Severity (S) →", "S1", "S2", "S3" ]
    const rows = [
        { exposure: "E1", controllability: "C1", asil: ["QM", "QM", "A"]},
        { exposure: "E2", controllability: "C2", asil: ["QM", "A", "B"]},
        { exposure: "E3", controllability: "C3", asil: ["A", "B", "C"]},
        { exposure: "E4", controllability: "C4", asil: ["B", "C", "D"]},
    ];
    const asilStyles = {
        QM: { bgcolor: 'success.lighter', color: 'success.darker', label: "QM" },
        A: { bgcolor: '#fff0c2', color: '#7a4f01', label: "ASIL A" },
        B: { bgcolor: '#ffddc2', color: '#7a2701', label: "ASIL B" },
        C: { bgcolor: '#ffc9c2', color: '#7a0101', label: "ASIL C" },
        D: { bgcolor: '#ffb2b2', color: '#610000', label: "ASIL D" },
    };

    // Augmenting theme for custom colors
    const themeWithAsil = useMemo(() => createTheme(theme, {
        palette: {
            success: {
                lighter: '#e8f5e9',
                darker: '#1e4620',
            }
        }
    }), []);
    
    return (
        <ThemeProvider theme={themeWithAsil}>
            <Paper elevation={0} sx={{ p: {xs: 2, md: 4}, border: '1px solid rgba(0,0,0,0.05)'  }}>
                <Box textAlign="center" mb={3}>
                     <Typography variant="h5" component="h2" mb={1}>ASIL Risk Classification Matrix</Typography>
                     <Typography variant="subtitle1" color="text.secondary">Determined by Severity, Exposure, and Controllability.</Typography>
                </Box>
                
                <Box sx={{ overflowX: 'auto', pb: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 1, minWidth: 500 }}>
                         {/* Header */}
                         <Box sx={{ gridColumn: '1', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', pb: 1 }}>
                             <Typography variant="caption" fontWeight="bold">Exposure (E) <br/>& Controllability (C)</Typography>
                         </Box>
                        {header.slice(1).map((h, i) => (
                             <Box key={i} sx={{p:1, textAlign: 'center'}}>
                                 <Chip label={h} variant="filled" sx={{bgcolor: 'grey.200', fontWeight: 600}} />
                             </Box>
                        ))}

                        {/* Rows */}
                        {rows.map((row, i) => (
                           <React.Fragment key={i}>
                               <Box sx={{p:1, display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                                    <Chip label={row.exposure} size="small" variant="outlined" sx={{mb: 0.5}}/>
                                    <Chip label={row.controllability} size="small" variant="outlined"/>
                               </Box>
                               {row.asil.map((cell, j) => {
                                   const style = asilStyles[cell];
                                   return (
                                        <Box key={j} sx={{
                                            bgcolor: style.bgcolor,
                                            color: style.color,
                                            p: 2,
                                            borderRadius: '8px',
                                            textAlign: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Typography variant="body1" fontWeight="700">{style.label}</Typography>
                                        </Box>
                                   )
                               })}
                           </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Paper>
        </ThemeProvider>
    );
};

export default function ISO26262Portal() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Box sx={{
              textAlign: 'center',
              mb: 5,
              p: 4,
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.main} 100%)`,
              color: 'white',
              boxShadow: '0 8px 30px -7px #0d47a1',
            }}>
            <Typography variant="h4" component="h1" fontWeight="700">
              ISO 26262 Functional Safety Portal
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)', mt: 1 }}>
              A comprehensive and interactive overview of your compliance landscape.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12}>
                <VModelDiagram />
            </Grid>

            {/* Combined Sections for better layout */}
            <Grid item xs={12}>
                <Typography variant="h5" component="h2" mt={2}>Process Areas</Typography>
            </Grid>

            <Grid item xs={12} lg={4}>
                 <Typography variant="h6" component="h3" color="text.secondary" mb={2}>Overarching</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={12}><PartCard num={2} data={partsData[2]} /></Grid>
                    <Grid item xs={12} sm={6} lg={12}><PartCard num={8} data={partsData[8]} /></Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} lg={4}>
                <Typography variant="h6" component="h3" color="text.secondary" mb={2}>Analysis & Lifecycle</Typography>
                 <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={12}><PartCard num={9} data={partsData[9]} /></Grid>
                    <Grid item xs={12} sm={6} lg={12}><PartCard num={7} data={partsData[7]} /></Grid>
                </Grid>
            </Grid>
            
             <Grid item xs={12} lg={4}>
                <Typography variant="h6" component="h3" color="text.secondary" mb={2}>Reference</Typography>
                 <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={12}><PartCard num={1} data={partsData[1]} /></Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={2}>
                <AsilMatrix />
            </Grid>

          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}