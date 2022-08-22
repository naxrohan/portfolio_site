import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import AppIconItem from '../components/AppIconItem';
import AppsData from '../JsonData/AppsData';
import {theme} from '../theme'

const AppsPageContent = () => {
    const param = useParams();
    const AppDetails = AppsData.filter(item => {
        return item.page === param.appName;
    });

    const MainBody = styled(Stack)(({ theme }) => ({
        marginTop: '50px',
    }));
    const AppDescBody = styled(Box)(() => ({
        maxWidth: '500px',
        marginLeft:'15px',
        wordWrap: 'normal',
        lineHeight: '20px'
    }));

    return (
        <Box
            paddingLeft={0.1}
            flex={5}
            sx={{ height: '100vh', overflow: 'scroll' }}>
            <MainBody
                theme={theme}
                spacing={0}
                justifyContent='left'
                sx={{ flexDirection: { xs :"column", sm: "column", md: "row"} }}>

                <AppIconItem
                    overlay="hidden"
                    details={AppDetails[0]} />

                <AppDescBody>
                    <Typography variant="h5" gutterBottom>
                        {AppDetails[0].desc}
                    </Typography>
                </AppDescBody>

            </MainBody>
        </Box>
    )
}

export default AppsPageContent