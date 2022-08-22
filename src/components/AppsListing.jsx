import { Box } from '@mui/material'
import {  Stack, styled } from '@mui/system';
import React from 'react'
import AppIconItem from './AppIconItem';
import AppsData from '../JsonData/AppsData';

const MainBody = styled(Stack)(() => ({
  marginTop:'50px'
}));

const AppsListing = () => {
  return (
    <Box
      paddingLeft={0.1}
      flex={5}
      sx={{ height: '100vh', overflow: 'scroll' }}>

      <MainBody 
        direction='row' 
        spacing={0} 
        justifyContent='space-evenly'
        flexWrap='wrap'>

        { AppsData.map((item, key) => 
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