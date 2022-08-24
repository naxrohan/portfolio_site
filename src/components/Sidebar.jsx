import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
import Home from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from 'react-router-dom';
import PagesData from '../JsonData/PagesData'
import FooterIcons from './FooterIcons';

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
      bgcolor={"background.default"}
      color={"text.primary"}
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
            bgcolor: 'background.default',
            color: 'text.primary',
            paddingLeft: '20px'
          }}
          component="nav">
          <ListItem key="12312312" disablePadding>
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

          {PagesData.map((item) =>(
            <React.Fragment key={item.id}>
              <ListItem  disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    {item.image}
                  </ListItemIcon>
                  <Link to={item.page} style={{  textDecoration: 'none', color: "white" }} >
                    <ListItemText primary={item.title}/>
                  </Link>
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}

        </List>
        <FooterIcons type="sidebar" />
      </Box>
    </Box>
  )
}

export default Sidebar