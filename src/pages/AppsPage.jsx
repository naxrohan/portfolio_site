import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar';
import AppsPageContent from '../components/AppsPageContent';



const AppsPage = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <AppsPageContent />
      </Stack>
    </Box>
  )
}

export default AppsPage