import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from '../components/Sidebar';
import HomeContent from '../components/HomeContent';
import ResponsiveAppBar from '../components/ResponsiveAppBar';


const HomePage = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
        <ResponsiveAppBar />
      <Stack direction='row' spacing={1} justifyContent='space-between'>
        <Sidebar />
        <HomeContent />
      </Stack>
    </Box>
  )
}

export default HomePage