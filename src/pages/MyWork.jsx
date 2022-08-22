import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Sidebar from '../components/Sidebar'
import WorksListing from '../components/WorksListing'

const MyWork = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
        <ResponsiveAppBar />
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <WorksListing />
      </Stack>
    </Box>
  )
}

export default MyWork