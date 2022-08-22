import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'


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
        <Stack direction='row' spacing={3} justifyContent='space-between'>
          <Sidebar />
          <Box
            bgcolor={"background.default"} 
            color={"text.primary"}
            paddingLeft={5}
            paddingRight={5}
            flex={5}
            sx={{ height: '100vh', overflow:'scroll'}}>
              Blog
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Blog