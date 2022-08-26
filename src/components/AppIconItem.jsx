import React from 'react'
import { AndroidOutlined } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system';
import Link from 'next/link';


const IconBoxHolder = styled(Paper)(() => ({
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
    const DownloadButton = <Button 
        startIcon={<AndroidOutlined />} 
        color="success"
        variant="contained" 
        href={details.link} 
        target="_blank">Download</Button>
    const AllButtons = <ButtonGroup variant="contained" 
        size="small"
        aria-label="outlined button group">
            {DownloadButton}
        <Link href={{ 
                pathname: "/apps/[slug]", 
                query: {slug: details.page} }}>
            <Button startIcon={<InfoIcon />} color="info">Info</Button>
        </Link>
    </ButtonGroup>;

    return (
        <IconBoxHolder elevation={3}>
            <IconBoxOverlay displayoverlay={overlay}>
                {AllButtons}
            </IconBoxOverlay>
            <img src={details.image}
                alt={details.title}
                role="appsItems"
                loading="lazy"
                height={details.height} />
            <Typography gutterBottom variant="h6" component="div">
                {details.title}
            </Typography>
            { overlay ==="hidden" ? DownloadButton : ""}
        </IconBoxHolder>
    )
}

export default AppIconItem