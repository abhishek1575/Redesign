import React, { useState } from 'react';
import {
  Box, Container, Typography, Paper, Button, Grid, Avatar,
  Accordion, AccordionSummary, AccordionDetails, useMediaQuery, useTheme
} from '@mui/material';
import { 
  Download, ExpandMore, Group, Description, 
  InsertChart, Lightbulb, School, ArrowDownward 
} from '@mui/icons-material';

const ASPICEProcessPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState('description');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const fileItems = [
    { id: 1, name: 'Software Requirements Specification', type: 'input', color: '#3b82f6' },
    { id: 2, name: 'System Architecture Document', type: 'input', color: '#3b82f6' },
    { id: 3, name: 'Software Design Document', type: 'output', color: '#10b981' },
    { id: 4, name: 'Unit Test Report', type: 'output', color: '#10b981' },
    { id: 5, name: 'Integration Test Plan', type: 'input', color: '#3b82f6' },
    { id: 6, name: 'Verification Report', type: 'output', color: '#10b981' },
  ];

  const roles = [
    { id: 1, name: 'Project Manager', color: '#8b5cf6' },
    { id: 2, name: 'Software Engineer', color: '#8b5cf6' },
    { id: 3, name: 'Technical Manager', color: '#8b5cf6' },
    { id: 4, name: 'Functional Safety Manager', color: '#ec4899' },
    { id: 5, name: 'Configuration Manager', color: '#ec4899' },
    { id: 6, name: 'Quality Assurance', color: '#ec4899' },
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%)',
      minHeight: '100vh',
      py: 4,
      px: isMobile ? 1 : 0
    }}>
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="800" color="#2d3748" gutterBottom>
            ASPICE 4.0 Process Area
          </Typography>
          <Typography variant="h6" color="#4a5568">
            Software Engineering Process Group (SWE)
          </Typography>
        </Box>
        
        {/* Main Content Row */}
        <Grid container spacing={3} mb={4}>
          {/* Diagram Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ 
              borderRadius: 4, 
              overflow: 'hidden',
              height: '100%',
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
            }}>
              <Box sx={{
                bgcolor: '#fcb69f',
                py: 1.5,
                textAlign: 'center'
              }}>
                <Typography variant="h6" fontWeight="700" color="white">
                  <InsertChart sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Process Diagram
                </Typography>
              </Box>
              <Box p={2} textAlign="center">
                <Box 
                  sx={{
                    width: '100%',
                    height: 220,
                    background: 'linear-gradient(45deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #fcb69f',
                    mb: 2
                  }}
                >
                  <Typography variant="h6" color="#718096" fontWeight="600">
                    SWE.1 Flowchart Diagram
                  </Typography>
                </Box>
                <Typography variant="body2" color="#4a5568" textAlign="left">
                  This diagram illustrates the workflow and interactions within the Software Engineering process group.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          {/* Team Roles Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ 
              borderRadius: 4, 
              overflow: 'hidden',
              height: '100%',
              background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
            }}>
              <Box sx={{
                bgcolor: '#8ec5fc',
                py: 1.5,
                textAlign: 'center'
              }}>
                <Typography variant="h6" fontWeight="700" color="white">
                  <Group sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Team Roles
                </Typography>
              </Box>
              <Box p={2}>
                <Grid container spacing={1.5}>
                  {roles.map((role) => (
                    <Grid item xs={6} key={role.id}>
                      <Box sx={{
                        bgcolor: 'white',
                        borderRadius: 2,
                        p: 1.5,
                        height: '100%',
                        borderLeft: `4px solid ${role.color}`,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }
                      }}>
                        <Box display="flex" alignItems="center">
                          <Avatar sx={{ 
                            bgcolor: role.color, 
                            width: 30, 
                            height: 30,
                            mr: 1.5 
                          }}>
                            <Group sx={{ fontSize: 16 }} />
                          </Avatar>
                          <Typography variant="body2" fontWeight="600">
                            {role.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          {/* Files Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ 
              borderRadius: 4, 
              overflow: 'hidden',
              height: '100%',
              background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
            }}>
              <Box sx={{
                bgcolor: '#a1c4fd',
                py: 1.5,
                textAlign: 'center'
              }}>
                <Typography variant="h6" fontWeight="700" color="white">
                  <Description sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Input / Output Files
                </Typography>
              </Box>
              <Box p={2}>
                {fileItems.map((file) => (
                  <Box 
                    key={file.id}
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 2,
                      p: 1.5,
                      mb: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      borderLeft: `4px solid ${file.color}`,
                      '&:hover': {
                        transform: 'translateX(5px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Description sx={{ 
                        color: file.color, 
                        mr: 1.5,
                        fontSize: '1.8rem' 
                      }} />
                      <Box>
                        <Typography variant="body2" fontWeight="600">
                          {file.name}
                        </Typography>
                        <Typography variant="caption" color={file.type === 'input' ? '#3b82f6' : '#10b981'}>
                          {file.type === 'input' ? 'Input File' : 'Output File'}
                        </Typography>
                      </Box>
                    </Box>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      startIcon={<Download />}
                      sx={{
                        borderColor: file.color,
                        color: file.color,
                        '&:hover': {
                          backgroundColor: `${file.color}11`,
                          borderColor: file.color
                        }
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Process Details Section */}
        <Paper elevation={6} sx={{ 
          borderRadius: 4, 
          mb: 4,
          background: 'white',
          boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
        }}>
          <Box sx={{ p: 3 }}>
            <Accordion 
              expanded={expanded === 'description'} 
              onChange={handleChange('description')}
              sx={{ borderRadius: '12px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box display="flex" alignItems="center">
                  <Description sx={{ color: '#4f46e5', mr: 2 }} />
                  <Typography variant="h6" fontWeight="700">Description</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  The Software Engineering Process Group (SWE) is responsible for the development and maintenance of software systems. This process area covers all activities from requirements analysis through design, implementation, testing, and maintenance.
                </Typography>
                <Typography variant="body1">
                  The SWE group ensures that software products are developed according to specifications, meet quality standards, and are delivered on schedule. They collaborate closely with other engineering teams to integrate software with hardware components.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion 
              expanded={expanded === 'purpose'} 
              onChange={handleChange('purpose')}
              sx={{ borderRadius: '12px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box display="flex" alignItems="center">
                  <Lightbulb sx={{ color: '#f59e0b', mr: 2 }} />
                  <Typography variant="h6" fontWeight="700">Purpose</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  The primary purpose of the SWE process area is to systematically transform stakeholder requirements into high-quality software products through well-defined engineering processes.
                </Typography>
                <Typography variant="body1">
                  Key objectives include:
                </Typography>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                  <li><Typography variant="body1">Ensure software meets functional and non-functional requirements</Typography></li>
                  <li><Typography variant="body1">Maintain traceability throughout the development lifecycle</Typography></li>
                  <li><Typography variant="body1">Implement robust testing and verification procedures</Typography></li>
                  <li><Typography variant="body1">Facilitate continuous improvement of software processes</Typography></li>
                  <li><Typography variant="body1">Ensure compliance with industry standards and regulations</Typography></li>
                </Box>
              </AccordionDetails>
            </Accordion>
            
            <Accordion 
              expanded={expanded === 'bestPractices'} 
              onChange={handleChange('bestPractices')}
              sx={{ borderRadius: '12px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box display="flex" alignItems="center">
                  <School sx={{ color: '#10b981', mr: 2 }} />
                  <Typography variant="h6" fontWeight="700">Best Practices</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  Implementing industry best practices is crucial for achieving ASPICE compliance and delivering high-quality software products.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      bgcolor: '#f0fdfa', 
                      p: 2, 
                      borderRadius: 2,
                      borderLeft: '4px solid #10b981'
                    }}>
                      <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                        Requirements Management
                      </Typography>
                      <Typography variant="body2">
                        Maintain bidirectional traceability between requirements, design, code, and tests throughout the project lifecycle.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      bgcolor: '#f0fdf4', 
                      p: 2, 
                      borderRadius: 2,
                      borderLeft: '4px solid #84cc16'
                    }}>
                      <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                        Continuous Integration
                      </Typography>
                      <Typography variant="body2">
                        Implement automated build and test processes to detect integration issues early and maintain code quality.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      bgcolor: '#eff6ff', 
                      p: 2, 
                      borderRadius: 2,
                      borderLeft: '4px solid #3b82f6'
                    }}>
                      <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                        Code Reviews
                      </Typography>
                      <Typography variant="body2">
                        Conduct regular peer code reviews to share knowledge and maintain coding standards across the team.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      bgcolor: '#fdf2f8', 
                      p: 2, 
                      borderRadius: 2,
                      borderLeft: '4px solid #ec4899'
                    }}>
                      <Typography variant="subtitle1" fontWeight="700" gutterBottom>
                        Test Automation
                      </Typography>
                      <Typography variant="body2">
                        Develop comprehensive automated test suites to ensure regression coverage and enable frequent releases.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            
            <Accordion 
              expanded={expanded === 'competence'} 
              onChange={handleChange('competence')}
              sx={{ borderRadius: '12px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box display="flex" alignItems="center">
                  <Group sx={{ color: '#8b5cf6', mr: 2 }} />
                  <Typography variant="h6" fontWeight="700">Work Competence</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  The competence of the SWE team is critical for successful project execution. The following competencies are required for team members:
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                      <Avatar sx={{ 
                        bgcolor: '#ede9fe', 
                        color: '#8b5cf6', 
                        width: 60, 
                        height: 60,
                        mb: 1.5,
                        mx: 'auto'
                      }}>
                        <Typography variant="h5" fontWeight="800">T</Typography>
                      </Avatar>
                      <Typography variant="subtitle1" fontWeight="700">Technical Skills</Typography>
                      <Typography variant="body2">
                        Proficiency in programming languages, development tools, and software architectures
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                      <Avatar sx={{ 
                        bgcolor: '#dbeafe', 
                        color: '#3b82f6', 
                        width: 60, 
                        height: 60,
                        mb: 1.5,
                        mx: 'auto'
                      }}>
                        <Typography variant="h5" fontWeight="800">P</Typography>
                      </Avatar>
                      <Typography variant="subtitle1" fontWeight="700">Process Knowledge</Typography>
                      <Typography variant="body2">
                        Understanding of ASPICE framework, SDLC methodologies, and quality processes
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box textAlign="center">
                      <Avatar sx={{ 
                        bgcolor: '#fce7f3', 
                        color: '#ec4899', 
                        width: 60, 
                        height: 60,
                        mb: 1.5,
                        mx: 'auto'
                      }}>
                        <Typography variant="h5" fontWeight="800">C</Typography>
                      </Avatar>
                      <Typography variant="subtitle1" fontWeight="700">Collaboration</Typography>
                      <Typography variant="body2">
                        Ability to work effectively in cross-functional teams and communicate clearly
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
        
        {/* Download Section */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Download />}
            endIcon={<ArrowDownward />}
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              color: 'white',
              py: 2,
              px: 6,
              borderRadius: 3,
              fontWeight: '700',
              fontSize: '1.1rem',
              boxShadow: '0 6px 15px rgba(79, 70, 229, 0.4)',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 20px rgba(79, 70, 229, 0.5)',
                background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
              }
            }}
          >
            Reference from Configuration Management
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ASPICEProcessPage;

