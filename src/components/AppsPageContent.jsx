import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AppIconItem from '../components/AppIconItem';
import AppsData from '../JsonData/AppsData';

const AppsPageContent = () => {
    const param = useParams();
    const AppDetails = AppsData.filter(item => {
        return item.page === param.appName;
    });

    const MainBody = styled(Stack)(() => ({
        marginTop: '50px',
    }));
    const AppDescBody = styled(Box)(() => ({
        maxWidth: '500px',
        marginLeft:'15px',
        wordWrap: 'normal',
        lineHeight: '20px'
    }));

    const DescriptionText = AppDetails[0].desc.split("\n");

    return (
        <Box
            paddingLeft={0.1}
            flex={5}
            sx={{ height: '100vh', overflow: 'scroll' }}>
            <MainBody
                spacing={0}
                justifyContent='left'
                sx={{ flexDirection: { xs :"column", sm: "column", md: "row"} }}>

                <AppIconItem
                    overlay="hidden"
                    details={AppDetails[0]} />

                <AppDescBody>
                    {DescriptionText.map((item) => (
                        <Typography variant="h5" gutterBottom>
                            {item}
                        </Typography>
                    ))}
                </AppDescBody>

            </MainBody>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={`naxrohan.github.io  | ${AppDetails[0].desc.substring(0, 100)}`} />
                <title>naxrohan.github.io | ClayApps -- {AppDetails[0].title}</title>
                <link rel="canonical" href={`https://naxrohan.github.io/apps/${param.appName}`} />
            </Helmet>
        </Box>
    )
}

export default AppsPageContent