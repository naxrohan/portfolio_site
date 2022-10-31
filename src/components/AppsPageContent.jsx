import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import AppIconItem from '../components/AppIconItem';
// import AppsData from '../JsonData/AppsData';
import MetaTag from './MetaTags';
import { useRouter } from 'next/router';

const AppsPageContent = ({appDescribe}) => {
    const router = useRouter()
    const { slug } = router.query;

    // const AppDetails = AppsData.filter(item => {
    //     return item.page === slug;
    // });

    const MainBody = styled(Stack)(() => ({
        marginTop: '50px',
    }));
    const AppDescBody = styled(Box)(() => ({
        maxWidth: '500px',
        marginLeft:'15px',
        wordWrap: 'normal',
        lineHeight: '20px'
    }));

    const DescriptionText = appDescribe[0].desc.split("\n");

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
                    details={appDescribe[0]} />

                <AppDescBody>
                    {DescriptionText.map((item, key) => (
                        <Typography key={key} variant="h5" gutterBottom>
                            {item}
                        </Typography>
                    ))}
                </AppDescBody>

            </MainBody>
            <MetaTag
                description={appDescribe[0].desc.substring(0, 100)}
                title={appDescribe[0].title}
                siteTitle="naxrohan.github.io | ClayApps"
                canonicalURL={`https://naxrohan.github.io/apps/${slug}`} />
        </Box>
    )
}

export default AppsPageContent