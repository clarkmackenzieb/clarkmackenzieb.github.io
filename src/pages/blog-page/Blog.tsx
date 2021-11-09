import React from 'react';
import postList from './blog-posts/index';
import ListPage from '../../components/list-page/ListPage';

export default function Blog(){
  return (
    <ListPage
      title="Blog Posts"
      body=""
      postList={postList}
      link="blog"
    />
  );
}
