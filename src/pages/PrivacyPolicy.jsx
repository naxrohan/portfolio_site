import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
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
        </Box>
    </ThemeProvider>
  )
}

export default PrivacyPolicy