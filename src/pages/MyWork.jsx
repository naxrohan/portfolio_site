import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Sidebar from '../components/Sidebar'
import WorksListing from '../components/WorksListing'

const MyWork = () => {
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
        <Stack direction='row' spacing={3} justifyContent='space-between'>
          <Sidebar />
          <WorksListing />
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="naxrohan.github.io  | My Works and Projects Listing page" />
            <title>naxrohan.github.io | My Works Page</title>
            <link rel="canonical" href="https://naxrohan.github.io/my-work/" />
          </Helmet>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default MyWork