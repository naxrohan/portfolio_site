import { Box } from '@mui/material'
import { display, Stack, styled, textAlign } from '@mui/system';
import React from 'react'

const MainBody = styled(Stack)(({}) => ({
  marginTop:'50px'
}));

const IconBoxHolder = styled(Box)(({}) => ({
  width:'300px',
  height:'300px',
  marginBottom:'15px',
  border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center'
}));

const AppsListing = () => {
  return (
    <Box
      paddingLeft={0.1}
      flex={5}
      sx={{ borderLeft: "1px solid gray", height: '100vh', overflow: 'scroll' }}>

      <MainBody 
        direction='row' 
        spacing={0} 
        justifyContent='space-evenly'
        flexWrap='wrap'>
        <IconBoxHolder>
          BirthDay Stickers</IconBoxHolder>
        <IconBoxHolder>Bible KJV</IconBoxHolder>
        <IconBoxHolder>Bible Hindi</IconBoxHolder>
        <IconBoxHolder>Bible Marathi</IconBoxHolder>
        <IconBoxHolder>Bible Konkani</IconBoxHolder>
        <IconBoxHolder>Parables English</IconBoxHolder>
        <IconBoxHolder>Parables Hindi</IconBoxHolder>
        <IconBoxHolder>Parables Portuguese</IconBoxHolder>
        <IconBoxHolder>Parables Spanish</IconBoxHolder>
      </MainBody>
      
    </Box>
  )
}

export default AppsListing