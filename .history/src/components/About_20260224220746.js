
import React from 'react';

import {
  School,
  Work,
  Lightbulb,
  EmojiObjects,
  
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Material UI components
import {
 
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

// Timeline components 
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', 
    },
    secondary: {
      main: '#f50057', 
    },
    background: {
      default: '#fafafa', 
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          padding: { xs: 2, md: 4 },
          background: 'linear-gradient(135deg, #fafafa 0%, #e3f2fd 100%)', // Subtle gradient
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      
        <Box sx={{ maxWidth: 800, textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            Hi, I'm <strong>Dnyaneshwari Garole</strong>, a passionate <strong>Java Full Stack Developer (Fresher)</strong> with a strong foundation in Computer Science Engineering. As a quick learner with a problem-solving mindset and solid Java fundamentals, I'm eager to kickstart my career in backend-focused roles. My internship experience has equipped me with practical skills in software development, and I'm excited to contribute to innovative projects.
          </Typography>
        </Box>

      
        <Box sx={{ maxWidth: 800, width: '100%', marginBottom: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', color: 'primary.main' }}>
            Education
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ backgroundColor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="h6">BE in Computer Science Engineering</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sant Gadge Baba Amravati University
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                      8.37 CGPA
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ backgroundColor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="h6">12th (HSC)</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Higher Secondary Certificate
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                      87%
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <School />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ backgroundColor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="h6">10th (SSC)</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Secondary School Certificate
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                      85%
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

    
        <Box sx={{ maxWidth: 800, width: '100%', marginBottom: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', color: 'primary.main' }}>
            Skills & Strengths
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: 'background.paper', textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 1 }}>
                    <Lightbulb />
                  </Avatar>
                  <Typography variant="h6">Quick Learner</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Adaptable and eager to master new technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: 'background.paper', textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', mb: 1 }}>
                    <EmojiObjects />
                  </Avatar>
                  <Typography variant="h6">Problem-Solving Mindset</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Analytical thinker with a knack for efficient solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ backgroundColor: 'background.paper', textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 1 }}>
                    <Work />
                  </Avatar>
                  <Typography variant="h6">Strong Java Fundamentals</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Proficient in Core and Advanced Java concepts.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

       
        <Box sx={{ maxWidth: 800, textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
            Career Objective
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            To start a career as a <strong>Java Full Stack Developer</strong> and grow in backend-focused roles, leveraging my skills in Java, Spring, Hibernate, and REST APIs to build robust and scalable applications. I'm committed to continuous learning and contributing to innovative projects in a dynamic team environment.
          </Typography>
        </Box>

      
        <Box sx={{ maxWidth: 600, textAlign: 'center', padding: 2, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            "The only way to do great work is to love what you do." – Steve Jobs
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: 'primary.main' }}>
            Let's build something amazing together!
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default About;
