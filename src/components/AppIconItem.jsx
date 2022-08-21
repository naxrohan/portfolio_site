import React from 'react'
import { AndroidOutlined } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Chip, IconButton, Paper, Typography } from '@mui/material'
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

const IconBoxOverlay = styled(Box)(({ theme }) => ({
    opacity: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(0deg, rgba(218, 91, 0, 0.4), rgba(3, 215, 88, 0.3)), #ffffffaa',
    backgroundSize: 'cover',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    '&:hover': {
        opacity: 1
    }
}));

const AppIconItem = ({name, image, height}) => {
    return (
        <IconBoxHolder elevation={3} theme={theme}>
            <IconBoxOverlay>
                <IconButton>
                    <Chip avatar={<AndroidOutlined />} label="Download" variant="filled" color="success" />
                </IconButton>
                <IconButton>
                    <Chip avatar={<InfoIcon color='primary' />} label="Info" variant="filled" color="info" />
                </IconButton>
            </IconBoxOverlay>
            <img src={image}
                alt={name}
                loading="lazy"
                height={height} />
            <Typography gutterBottom variant="h6" component="div">
                {name}
            </Typography>
        </IconBoxHolder>
    )
}

export default AppIconItem