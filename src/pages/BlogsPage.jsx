import React from 'react'

const BlogsPage = () => {
  return (
    <Box 
      bgcolor={"background.default"} 
      color={"text.primary"}>
      <Stack direction='row' spacing={3} justifyContent='space-between'>
        <Sidebar />
        <Box>
        Blog Page
        </Box>
      </Stack>
    </Box>
  )
}

export default BlogsPage