import { Avatar, Box, Button, ButtonGroup, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import Home from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/system';
import theme from "../theme"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const UserBox = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0px',
}));

const Sidebar = () => {
  return (
    <Box
      flex={1}
      sx={{ 
        display: { 
          xs: "none", 
          sm: "flex", 
        },
        flexDirection: 'column', 
        justifyContent:'space-between', 
        height: '100vh' 
        }}>

      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          paddingLeft: '20px'
        }}
        component="nav">

        <ListItem disablePadding>
          <ListItemAvatar>
            <UserBox>
              <Avatar alt="Rohan DSouza" src="https://avatars.githubusercontent.com/u/10266365?v=4" />
            </UserBox>
          </ListItemAvatar>
          <ListItemText
            primary="Rohan Dsouza"
            secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary">
                Fullstack developer
              </Typography>
            } />

        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AndroidIcon/>
            </ListItemIcon>
            <ListItemText primary="Apps" />
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="My Work" />
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RssFeedIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>

      </List>

      <Stack direction='row' justifyContent='center'>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>
            <LinkedInIcon />
          </Button>
          <Button>
            <GitHubIcon />
          </Button>
          <Button>
            <AlternateEmailIcon/>
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  )
}

export default Sidebar