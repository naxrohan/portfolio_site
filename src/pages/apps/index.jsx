import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import AppsListing from '../../components/AppsListing'
import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Sidebar from '../../components/Sidebar'
import MetaTag from "../../components/MetaTags"

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
        <MetaTag
          description="naxrohan.github.io  | MyApps Listing Page for all Android Apps created by ClayApps"
          title="MyApps Page"
          siteTitle="naxrohan.github.io | ClayApps"
          canonicalURL={`https://naxrohan.github.io/apps`} />
    </Box>
        </ThemeProvider>
  )
}

export default MyApps