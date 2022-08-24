import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Stack } from '@mui/system';
import { Button, ButtonGroup } from '@mui/material';


const FooterIcons = ({type}) => {
    return (
        <Stack
            direction='row'
            justifyContent='center'
            marginBottom={'20px'}
            sx={{ display: (type === "sidebar") ? "flex" : { xs: "flex", sm : "flex", md : "none" } }}
            >
            <ButtonGroup variant="text" aria-label="text button group">
                <Button>
                    <InstagramIcon />
                </Button>
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
    )
}

export default FooterIcons