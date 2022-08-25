import { Stack, styled } from '@mui/material';
import { Box } from '@mui/system'
import BlogArticleItem from './BlogArticleItem';
import BlogData from "../JsonData/BlogData"
import { useEffect, useState } from 'react';

const MainBody = styled(Stack)(() => ({
    marginTop: '50px'
}));

const BlogListing = () => { 
    
    const [BlogItems, setBlogItems] = useState(BlogData.rss.channel.item);
    //const [BlogCategories, setBlogCategories] = useState(BlogData.rss.channel.tags);

    useEffect(()=>{
        setBlogItems(BlogData.rss.channel.item);
        //setBlogCategories(BlogData.rss.channel.tags);
    },[]);

    return (
        <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            flex={5}
            sx={{ height: '100vh', overflowY: 'scroll', paddingLeft: { xs : 5, md: 10}, paddingRight: { xs : 5, md: 10} }}>
        
            <MainBody spacing={2} justifyContent='space-evenly'>
                {/* <BlogArticleItem type="short" /> */}
                {BlogItems.map((item, key) => (
                    //item !== undefined &&
                        <BlogArticleItem 
                        key={key}
                        type="short" 
                        jsonData={item} />
                ))}
            </MainBody>
        
        </Box>
    )
}

export default BlogListing