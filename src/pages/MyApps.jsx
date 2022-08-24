import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AppsListing from '../components/AppsListing'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Sidebar from '../components/Sidebar'

const MyApps = () => {
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
        <AppsListing />
      </Stack>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="naxrohan.github.io  | MyApps Listing Page for all Android Apps created by ClayApps" />
          <title>naxrohan.github.io | MyApps Page</title>
          <link rel="canonical" href="https://naxrohan.github.io/apps/" />
        </Helmet>
    </Box>
        </ThemeProvider>
  )
}

export default MyApps