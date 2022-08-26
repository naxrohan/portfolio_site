import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import PricvacyContent from '../components/PricvacyContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/Sidebar';
import MetaTag from "../components/MetaTags"

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
          
          <MetaTag
            description="naxrohan.github.io  | Privacy Policy Page"
            title="Privacy Policy Page"
            siteTitle="naxrohan.github.io | ClayApps"
            canonicalURL={`https://naxrohan.github.io/privacy/`} />
        </Box>
    </ThemeProvider>
  )
}

export default PrivacyPolicy