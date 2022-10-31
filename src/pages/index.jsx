import React from 'react'
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import MetaTag from "../components/MetaTags"


const HomePage = () => {
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
            <HomeContent />
        </Stack>
        <MetaTag
          description="naxrohan.github.io  | Home Page"
          title="Home Page"
          siteTitle="naxrohan.github.io | ClayApps"
          canonicalURL={`https://naxrohan.github.io/`} />
        </Box>
      </ThemeProvider>
  )
}

export default HomePage