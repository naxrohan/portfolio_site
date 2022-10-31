import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Sidebar from '../../components/Sidebar'
import WorksListing from '../../components/WorksListing'
import MetaTag from "../../components/MetaTags"

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
          
          <MetaTag
            description="naxrohan.github.io  | My Works and Projects Listing page"
            title="My Works Page"
            siteTitle="naxrohan.github.io | ClayApps"
            canonicalURL={`https://naxrohan.github.io/my-work/`} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default MyWork