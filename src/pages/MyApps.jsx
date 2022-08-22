import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
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
    </Box>
        </ThemeProvider>
  )
}

export default MyApps