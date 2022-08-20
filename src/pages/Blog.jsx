import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Blog = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <Box>
        Blog
        </Box>
      </Stack>
    </Box>
  )
}

export default Blog