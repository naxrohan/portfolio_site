import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';


const HomePage = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <HomeContent />
      </Stack>
    </Box>
  )
}

export default HomePage