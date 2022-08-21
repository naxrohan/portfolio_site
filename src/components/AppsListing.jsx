import { Box } from '@mui/material'
import {  Stack, styled } from '@mui/system';
import React from 'react'
import {theme} from '../theme'
import AppIconItem from './AppIconItem';

const MainBody = styled(Stack)(({theme}) => ({
  marginTop:'50px'
}));

const AppsListing = () => {
  return (
    <Box
      paddingLeft={0.1}
      flex={5}
      sx={{ borderLeft: "1px solid gray", height: '100vh', overflow: 'scroll' }}>

      <MainBody 
        theme={theme}
        direction='row' 
        spacing={0} 
        justifyContent='space-evenly'
        flexWrap='wrap'>

        <AppIconItem name="WhatsApp BirthDay Stickers" image={`/images/ic_birthday.png`} height={250} />

        <AppIconItem name="Bible KJV" image={`/images/ic_kjv.png`} height={280} />
         

        <AppIconItem name="Bible Hindi" image={`/images/ic_hindi.png`} height={280} />
        

        <AppIconItem name="Bible Marathi" image={`/images/ic_marathi.png`} height={280} />
        

        <AppIconItem name="Bible Konkani" image={`/images/ic_konkani.png`} height={280} />
        

        <AppIconItem name="Bible Parables English" image={`/images/ic_parable_english.png`} height={280} />
        

        <AppIconItem name="येसु मसीह के दृष्टांत | Hindi" image={`/images/ic_parable_hindi.png`} height={280} />
        

        <AppIconItem name=" Parábolas de Jesus | Portuguese" image={`/images/ic_parable_portuguese.png`} height={280} />
        

        <AppIconItem name="Parábolas de Jesus | Español" image={`/images/ic_parable_spanish.png`} height={280} />
        

        <AppIconItem name="World Proverbs" image={`/images/ic_worldproverbs.png`} height={280} />

      </MainBody>
      
    </Box>
  )
}

export default AppsListing