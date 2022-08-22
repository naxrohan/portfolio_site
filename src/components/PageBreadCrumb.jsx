import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const PageBreadCrumb = ({location}) => {
    
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom:'10px' }}>
        <Link underline="hover" color="inherit" href="/apps">
            Apps
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  )
}

export default PageBreadCrumb