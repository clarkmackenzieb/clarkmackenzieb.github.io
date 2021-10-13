/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { postList } from '../../posts/index';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';

const StyledPostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Post(){
  const { title } = useParams<{ title: string }>();

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
    <StyledPostContainer>
      <ReactMarkdown children={postMD.content} remarkPlugins={[remarkGfm]}/>
    </StyledPostContainer>
  );
}

function renderError(){
  return (
    <StyledPostContainer> Uh oh. How did you get here? </StyledPostContainer>
  );
}