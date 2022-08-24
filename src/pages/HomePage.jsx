import React from 'react'
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { Helmet } from 'react-helmet';


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
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="naxrohan.github.io  | Home Page of the site" />
          <title>naxrohan.github.io | Home Page</title>
          <link rel="canonical" href="https://naxrohan.github.io/" />
        </Helmet>
        </Box>
      </ThemeProvider>
  )
}

export default HomePage