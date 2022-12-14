import styled from '@emotion/styled';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import WorksData from '../JsonData/WorksData'

const MainBody = styled(Stack)(() => ({
  marginTop: '50px'
}));

const WorksListing = () => {
  return (
    <Box
      paddingLeft={5}
      paddingRight={5}
      flex={5}
      sx={{ height: '100vh', overflow:'scroll'}}>

      <MainBody
        direction='row'
        spacing={0}
        justifyContent='space-evenly'
        flexWrap='wrap'>

      {
        WorksData.map( (item, key) => (
        <Card 
          role="workItems"
          key={key}
          sx={{ margin: '5px 0px 5px 0px', maxWidth: '600px',  minHeight: '200px' }} 
          elevation={4} >
          {item.image !== "" ? 
          <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            /> : ""}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" startIcon={<LanguageIcon />} href={item.link} target="_blank">Goto Site</Button>
            <Button size="small" startIcon={<CodeIcon />} href={item.repo} target="_blank">View Code</Button>
            <Button size="small" startIcon={<InfoIcon />} href={`/my-work/${item.page}`}>More Info</Button>
          </CardActions>
        </Card>
        ))
      }


      </MainBody>

    </Box>
  )
}

export default WorksListing