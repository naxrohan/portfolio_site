import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import AppsPageContent from '../../components/AppsPageContent';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'


const AppsPage = () => {  
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
          <AppsPageContent />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default AppsPage