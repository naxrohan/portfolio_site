import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import AppsPageContent from '../../components/AppsPageContent';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { getAllApps, getAppsBySlug } from '../../utils/appsapi'


const AppsPage = ({app}) => {  
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
          <AppsPageContent
            appDescribe={app} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default AppsPage

export async function getStaticProps({params}) {
  const appDesc = getAppsBySlug(params.slug)

    return {
      props: {
        app: {
          ...appDesc
        },
      },
    }
}

export async function getStaticPaths() {
  const apps = getAllApps()
  
  return {
    paths: apps.map((app) => {
      return {
        params: {
          slug: app.page,
        },
      }
    }),
    fallback: false,
  }
}