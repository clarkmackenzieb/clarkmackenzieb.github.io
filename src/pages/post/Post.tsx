/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { postList } from '../../posts/index';
import { useParams } from 'react-router-dom'; 

export default function Post(){
  const { title } = useParams<{ title: string }>();
console.log("ttitle", title)
  if(!title){
    return renderError();
  }

  const postMD = postList.find((post) => {
    return post.title === title;
  });

  if(!postMD){
    return renderError();
  }

  return(
    <div>
      <div>
        posty
      </div>
      <ReactMarkdown children={postMD.content} remarkPlugins={[remarkGfm]}/>
    </div>
  );
}

function renderError(){
  return (
    <div> Uh oh. How did you get here? </div>
  );
}