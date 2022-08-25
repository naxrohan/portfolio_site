import React from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Divider, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import Moment from "moment"
import { Helmet } from 'react-helmet';

/**
 * 
 * @param {type} short | full
 * @param {jsonData}  json Object
 * @returns
 */
const BlogArticleItem = ({ type, jsonData }) => {    
    const bid = parseInt(jsonData.wp_post_id);
    const postCat = jsonData.category.length > 0 ?  jsonData.category : [];
    return (
        <Card role="blogItem">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    type === "full" ? <IconButton aria-label="share"><ShareIcon /></IconButton> : ""
                }
                title={jsonData.title}
                subheader={new Moment(jsonData.pubDate).format('MMMM Do YYYY')}
            />
            <CardMedia
                component="img"
                height="194"
                image={jsonData.header_image}
                alt={jsonData.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {postCat.length > 0 
                    ? postCat.map((item, key) => (
                        <React.Fragment key={(key+1)*bid}>
                            <Chip label={item.__cdata} size="small"/>&nbsp;
                        </React.Fragment>
                    ))
                    : ""}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                    Summary: {jsonData.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ 
                    display: "flex", 
                    alignItems:"center", 
                    justifyContent:"space-between", 
                    margin: "0 50px 0 50px" }}>
               { (type === "short") ?
                <React.Fragment>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Button variant="outlined" endIcon={<SendIcon />} href={`/blog/${jsonData.wp_post_name}`}>
                        Read
                    </Button>
                </React.Fragment>
                : "" }
            </CardActions>
            {(type === "full") ?
                <Box >
                    <CardContent>
                        <Typography paragraph
                            dangerouslySetInnerHTML={{ __html: `<div> ${jsonData.content_encoded.__cdata} </div>` }}>
                        </Typography>
                    </CardContent>
                </Box>
                : ""}

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={`naxrohan.github.io  | ${jsonData.description.substring(0, 100)}`} />
                <title>naxrohan.github.io | Blog Post -- {jsonData.title}</title>
                <link rel="canonical" href={`https://naxrohan.github.io/blog/${jsonData.wp_post_name}`} />
            </Helmet>
        </Card>
    )
}

export default BlogArticleItem