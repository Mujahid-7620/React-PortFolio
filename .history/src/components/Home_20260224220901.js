
import React, { useState } from 'react';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for buttons
    },
    background: {
      default: '#f5f5f5f6', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDownload = () => {
    // Trigger the download
    const link = document.createElement('a');
    link.href = '/Dnyaneshwari_Garole_Resume%20(4).pdf'; // Assuming resume.pdf is in the public folder
    link.download = '/Dnyaneshwari_Garole_Resume%20(4).pdf';
    link.click();

    // Show snackbar
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          backgroundColor: 'background.default',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 600,
            marginBottom: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.secondary'  }}>
            Dnyaneshwari Garole
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'text.secondary' }}>
            Java Full Stack Developer (Fresher)
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: 'text.secondary'  }}>
            Computer Science Engineering Student with a focus on Core Java, Advanced Java, Spring, Hibernate, and REST APIs. Eager to apply my skills and internship experience to real-world projects.
          </Typography>
        </Box>

        {/* Download Resume Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleDownload}
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: '1.1rem',
            borderRadius: 2,
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            },
          }}
        >
          Download Resume
        </Button>

        {/* Snackbar for success message */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
            Resume downloaded successfully!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
