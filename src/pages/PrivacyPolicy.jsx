import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import PricvacyContent from '../components/PricvacyContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/Sidebar';

const PrivacyPolicy = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
        <Box 
          bgcolor={"background.default"} 
          color={"text.primary"}>
            <ResponsiveAppBar />
          <Stack direction='row' spacing={1} justifyContent='space-between'>
            <Sidebar />
            <PricvacyContent />
          </Stack>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="naxrohan.github.io  | Privacy Policy Page" />
            <title>naxrohan.github.io | Privacy Policy Page</title>
            <link rel="canonical" href="https://naxrohan.github.io/privacy/" />
          </Helmet>
        </Box>
    </ThemeProvider>
  )
}

export default PrivacyPolicy