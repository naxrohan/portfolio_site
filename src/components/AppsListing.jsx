import { AndroidOutlined } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar, Box, Chip, IconButton, Paper, Typography } from '@mui/material'
import {  Stack, styled } from '@mui/system';
import React from 'react'

const MainBody = styled(Stack)(({}) => ({
  marginTop:'50px'
}));

const IconBoxHolder = styled(Paper)(({}) => ({
  width:'300px',
  height:'300px',
  marginBottom:'15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  flexDirection: 'column',
  position: 'relative'
}));

const IconBoxOverlay = styled(Box)(({}) => ({
    opacity: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top:0 ,
    left: 0,
    background: 'linear-gradient(0deg, rgba(218, 91, 0, 0.4), rgba(3, 215, 88, 0.3)), #ffffffaa',
    backgroundSize:'cover',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    '&:hover': {
      opacity : 1
    }
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

        <IconBoxHolder elevation={3}>
            <IconBoxOverlay>
              <IconButton>
                <Chip avatar={<AndroidOutlined  />} label="Download" variant="filled" color="success" />
              </IconButton>
              <IconButton>
                <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
              </IconButton>
            </IconBoxOverlay>
          <img src={`/images/ic_birthday.png`}
            alt="BirthDay Stickers"
            loading="lazy"
            height={250}/>
            <Typography gutterBottom variant="h6" component="div">
              WhatsApp BirthDay Stickers
            </Typography>
            
        </IconBoxHolder>

         <IconBoxHolder elevation={3}>
            <IconBoxOverlay>
              <IconButton>
                <Chip avatar={<AndroidOutlined  />} label="Download" variant="filled" color="success" />
              </IconButton>
              <IconButton>
                <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
              </IconButton>
            </IconBoxOverlay>
            <img src={`/images/ic_kjv.png`}
            alt="Bible KJV"
            loading="lazy"
            height={280}/>
            <Typography gutterBottom variant="h5" component="div">
              Bible KJV
            </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_hindi.png`}
            alt="Bible Hindi"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h5" component="div">
            Bible Hindi
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_marathi.png`}
            alt="Bible Marathi"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h5" component="div">
            Bible Marathi
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_konkani.png`}
            alt="Bible Konkani"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h5" component="div">
            Bible Konkani
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_parable_english.png`}
            alt="Parables English"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h5" component="div">
            Bible Parables English
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_parable_hindi.png`}
            alt="Parables Hindi"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h6" component="div">
            येसु मसीह के दृष्टांत | Hindi
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_parable_portuguese.png`}
            alt="Parables Portuguese"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h6" component="div">
            Parábolas de Jesus | Portuguese
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_parable_spanish.png`}
            alt="Parables Spanish"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h6" component="div">
            Parábolas de Jesus | Español
          </Typography>
        </IconBoxHolder>

        <IconBoxHolder elevation={3}>
          <IconBoxOverlay>
            <IconButton>
              <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
            </IconButton>
            <IconButton>
              <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
            </IconButton>
          </IconBoxOverlay>
          <img
            src={`/images/ic_worldproverbs.png`}
            alt="World Proverbs"
            loading="lazy"
            height={280} />
          <Typography gutterBottom variant="h5" component="div">
            World Proverbs
          </Typography>
        </IconBoxHolder>

      </MainBody>
      
    </Box>
  )
}

export default AppsListing