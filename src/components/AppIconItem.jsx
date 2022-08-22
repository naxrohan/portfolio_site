import React from 'react'
import { AndroidOutlined } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, ButtonGroup, Chip, IconButton, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system';
import {theme} from '../theme'


const IconBoxHolder = styled(Paper)(({ theme }) => ({
    width: '300px',
    height: '300px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative'
}));

const IconBoxOverlay = styled(Box)((props) => ({
    opacity: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(0deg, rgba(218, 91, 0, 0.4), rgba(3, 215, 88, 0.3)), #ffffffaa',
    backgroundSize: 'cover',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    '&:hover': {
        opacity: 1
    },
    visibility: props.displayoverlay
    
}));

const AppIconItem = ({details, overlay}) => {
    const Buttons = <ButtonGroup variant="contained" 
        size="small"
        aria-label="outlined button group">
        <Button 
            startIcon={<AndroidOutlined />} 
            color="success"
            href={details.link} target="_blank">Download</Button>
        <Button 
            startIcon={<InfoIcon />} 
            color="info" 
            href={`/apps/${details.page}`}>Info</Button>
    </ButtonGroup>;

    return (
        <IconBoxHolder elevation={3} theme={theme}>
            <IconBoxOverlay displayoverlay={overlay}>
                {Buttons}
            </IconBoxOverlay>
            <img src={details.image}
                alt={details.title}
                loading="lazy"
                height={details.height} />
            <Typography gutterBottom variant="h6" component="div">
                {details.title}
            </Typography>
        </IconBoxHolder>
    )
}

export default AppIconItem