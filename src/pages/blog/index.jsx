import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Link from 'next/link'
import React, { useState } from 'react'
import BlogListing from '../../components/BlogListing';
import MetaTag from '../../components/MetaTags';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Sidebar from '../../components/Sidebar';
import { getAllPosts } from '../../utils/postapi'

const index = ({allPosts}) => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
        <ResponsiveAppBar />
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <BlogListing
          blogItems={allPosts} />
      </Stack>
      <MetaTag
        description="naxrohan.github.io  | Blog Post Listing Page"
        title="Blog Page"
        siteTitle="naxrohan.github.io | ClayApps"
        canonicalURL={`https://naxrohan.github.io/blog`} />
    </Box>
  </ThemeProvider>
  )
}

export default index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'category',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}