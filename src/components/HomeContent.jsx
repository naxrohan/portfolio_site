import { Avatar, Button, Chip, Stack, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';

const MainText = styled(Stack)(({}) => ({
  marginTop:'200px',
  marginLeft:'50px'
}));

const HomeContent = () => {
  return (
    <Box
      paddingLeft={1}
      flex={5}
      sx={{ borderLeft: "1px solid gray", height: '100vh' }}>

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
        <Typography variant='span' sx={{ width: '500px' }}>
          I’m a software engineer specializing in building web applications.
          Currently, I’m focused on building AWS based products at ?
        </Typography>

        <Button variant="contained" sx={{ width: '150px' }}>My Work</Button>
      </MainText>

    </Box>
  )
}

export default HomeContent