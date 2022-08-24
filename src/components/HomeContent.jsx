import { Avatar, Button, Chip, Stack, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import FooterIcons from './FooterIcons';

const MainText = styled(Stack)(() => ({
  marginTop:'10px',
  marginLeft:'5%'
}));

const HomeContent = () => {
  return (
    <Box
      paddingLeft={0}
      flex={5}
      sx={{ height: '100vh' }}>

        <Box
        component="img"
        sx={{
          marginTop:'10px',
          marginLeft:'5%',
          height: { xs: '20vh', sm: '35vh', md: '45vh' },
          width: { xs: '85vw', sm: '85vw', md: '70vw' },
        }}
        alt="home page banner Image."
        src="images/homebg3.png"
      />

      <MainText direction='column' spacing={3} justifyContent='space-between'>
        <Typography variant='h6'>
          Hi there 👋 I'm
        </Typography>

        <Typography variant='h4'>
          Rohan Jones DSouza
        </Typography>

        <Typography variant='span' sx={{ color: 'green' }}>
          <Chip label="Fullstack Developer" 
            avatar={<Avatar>F</Avatar>} 
            size="small" 
            variant="outlined"
            color='secondary' />
          <Chip label="AWS cloud" 
            icon={<CloudIcon />} 
            size="small" 
            variant="outlined"
            color='primary' /> 
        </Typography>

        <br />
        <Typography variant='span' sx={{ width: '100%', maxWidth: '500px', fontSize: {xs : "22px", sm : "18px"} }}>
          I’m a software engineer specializing in building web applications.
          Currently, I’m focused on building AWS based products at ?
        </Typography>

        <Button variant="contained" sx={{ width: '150px' }} href={`/my-work`}>My Work</Button>
        
      </MainText>
      
      <FooterIcons />

    </Box>
  )
}

export default HomeContent