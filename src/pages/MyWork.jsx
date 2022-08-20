import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Sidebar from '../components/Sidebar'

const MyWork = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <Box>
        
            Show a large Slider containeing cards.. as items
        </Box>
      </Stack>
    </Box>
  )
}

export default MyWork