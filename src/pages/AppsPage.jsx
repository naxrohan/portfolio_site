import { Box, Stack } from '@mui/material'
import AppsData from '../JsonData/AppsData';
import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import AppIconItem from '../components/AppIconItem';



const AppsPage = () => {
  const param = useParams();
  const AppDetails =  AppsData.filter(item => {
    return item.page == param.appName;
  })
  console.log(AppDetails)
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <Box
          paddingLeft={0.1}
          paddingTop={'50px'}
          flex={5}
          sx={{ height: '100vh', overflow: 'scroll' }}>
          { AppDetails.map((item, key) => 
            <AppIconItem
              key={key}
              overlay="hidden"
              details={item} /> )}
        </Box>
      </Stack>
    </Box>
  )
}

export default AppsPage