import { Avatar, Box, Button, ButtonGroup, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import Home from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from 'react-router-dom';

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
          sm: "none",
          md: "block",
        },
      }}>
      <Box position='fixed'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
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
              <Link to={'/'} style={{  textDecoration: 'none' }}>
                <ListItemText primary="Home" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem disablePadding>
            <ListItemButton>

              <ListItemIcon>
                <AndroidIcon />
              </ListItemIcon>
              <Link to={'/apps'} style={{  textDecoration: 'none' }}>
                <ListItemText primary="Apps" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <Link to={'/my-work'} style={{  textDecoration: 'none' }}>
                <ListItemText primary="My Work" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RssFeedIcon />
              </ListItemIcon>
              <Link to={'/blog'} style={{  textDecoration: 'none' }}>
                <ListItemText primary="Blog" />
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />

        </List>

        <Stack
          direction='row'
          justifyContent='center'
          sx={{ marginBottom: '10px' }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>
              <LinkedInIcon />
            </Button>
            <Button>
              <GitHubIcon />
            </Button>
            <Button>
              <AlternateEmailIcon />
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export default Sidebar