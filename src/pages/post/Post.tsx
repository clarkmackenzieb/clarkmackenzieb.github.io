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
`;

const StyledErrorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Post(){
  const { id } = useParams<{ id: string }>();

  if(!id){
    return renderError();
  }

  const postMD = postList.find((post) => {
    return post.id;
  });

  if(!postMD){
    return renderError();
  }

  return(
    <StyledErrorContainer>
      <ReactMarkdown children={postMD.markdown} remarkPlugins={[remarkGfm]}/>
    </StyledErrorContainer>
  );
}

function renderError(){
  return (
    <StyledPostContainer> Uh oh. How did you get here? </StyledPostContainer>
  );
}