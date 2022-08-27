import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {getPostBySlug, getAllPosts } from '../../utils/postapi'
import markdownToHtml from '../../utils/markdownToHtml'
import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material'
import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import Sidebar from '../../components/Sidebar'
import BlogArticleItem from '../../components/BlogArticleItem'

const BlogPost = ({post}) => {
    const router = useRouter();
    if(!router.isFallback && router.query.length > 0){
      //ToDo: show 404 page
    }
    const [mode, setMode] = useState("dark");
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
            sx={{ height: '100vh', overflowY: 'scroll', paddingLeft: { xs: 5, md: 10 }, paddingRight: { xs: 5, md: 10 } }}>
            <MainBody spacing={2} justifyContent='space-evenly'>
              <BlogArticleItem
                type="full"
                blogData={post} />
            </MainBody>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default BlogPost


export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'category',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}