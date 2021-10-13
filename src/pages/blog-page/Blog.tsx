import React from 'react';
import { postList } from '../../posts/index';
import { Link } from "react-router-dom";

export default function Blog(){
  if(postList.length === 0){
    return <div>No posts yet!</div>;
  }
  const list = postList.map((post) => {
    return (
      <li>
        <Link to={`/blog/${post.title}`}>
          {post.title}
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {list}
    </ul>
  );
}