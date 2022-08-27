import { Box } from '@mui/material'
import {  Stack, styled } from '@mui/system';
import React from 'react'
import AppIconItem from './AppIconItem';


const MainBody = styled(Stack)(() => ({
  marginTop:'50px'
}));

const AppsListing = ({allAppsData}) => {
  return (
    <Box
      paddingLeft={0.1}
      flex={5}
      sx={{ height: '100vh', overflow: 'scroll' }}>

      <MainBody 
        role="appsListing"
        direction='row' 
        spacing={0} 
        justifyContent='space-evenly'
        flexWrap='wrap'>

        { allAppsData.map((item, key) => 
            <AppIconItem
              key={key}
              overlay="visible"
              details={item} />  )
        }

      </MainBody>
      
    </Box>
  )
}

export default AppsListing