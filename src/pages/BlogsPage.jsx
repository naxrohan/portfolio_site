import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material'
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import BlogArticleItem from '../components/BlogArticleItem';
import { useParams } from 'react-router-dom';
import BlogData from "../JsonData/BlogData"


const BlogsPage = () => {

  const param = useParams();
  const [mode, setMode] = useState("dark");
  const [BlogItems, setBlogItems] = useState(BlogData.rss.channel.item);
  // const [BlogCategories, setBlogCategories] = useState(BlogData.rss.channel.tags);
  
  const BlogPostDetails = BlogItems.filter(item => {
      return item.wp_post_name === param.articleName;
  });
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  const MainBody = styled(Stack)(() => ({
      marginTop: '50px'
  }));

  return (
    <ThemeProvider theme={darkTheme}>
      <Box 
        bgcolor={"background.default"} 
        color={"text.primary"}>
          <ResponsiveAppBar />
        <Stack direction='row' spacing={3} justifyContent='space-between'>
          <Sidebar />
          <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            flex={5}
            sx={{ height: '100vh', overflowY: 'scroll', paddingLeft: { xs : 5, md: 10}, paddingRight: { xs : 5, md: 10} }}>
              <MainBody spacing={2} justifyContent='space-evenly'>
                <BlogArticleItem 
                  type="full" 
                  jsonData={BlogPostDetails[0]} />
              </MainBody>
        </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default BlogsPage