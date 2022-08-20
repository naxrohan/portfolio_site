import { Box, Stack } from '@mui/material'
import React from 'react'
import AppsListing from '../components/AppsListing'
import Sidebar from '../components/Sidebar'

const MyApps = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <AppsListing />
      </Stack>
    </Box>
  )
}

export default MyApps