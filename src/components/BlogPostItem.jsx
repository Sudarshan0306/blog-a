import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post, index }) => (
  <ListItem button component={Link} to={{ pathname: `/post/${index}`, state: { post } }}>
    <ListItemText primary={post.title} secondary={post.publishedAt} />
  </ListItem>
);

export default BlogPostItem;
