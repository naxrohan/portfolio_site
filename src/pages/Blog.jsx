import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import BlogListing from '../components/BlogListing';
import ResponsiveAppBar from '../components/ResponsiveAppBar';


const Blog = () => {
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
          <BlogListing />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Blog