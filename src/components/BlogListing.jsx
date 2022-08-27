import { Stack, styled } from '@mui/material';
import { Box } from '@mui/system'
import BlogArticleItem from './BlogArticleItem';
import { useEffect, useState } from 'react';

const MainBody = styled(Stack)(() => ({
    marginTop: '50px'
}));

const BlogListing = ({blogItems}) => { 
    return (
        <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            flex={5}
            sx={{ height: '100vh', overflowY: 'scroll', paddingLeft: { xs : 5, md: 10}, paddingRight: { xs : 5, md: 10} }}>
        
            <MainBody spacing={2} justifyContent='space-evenly'>
                {blogItems.map((item, key) => (
                    //item !== undefined &&
                        <BlogArticleItem 
                            key={key}
                            type="short" 
                            blogData={item} />
                ))}
            </MainBody>
        
        </Box>
    )
}

export default BlogListing