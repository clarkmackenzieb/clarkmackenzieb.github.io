/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import { THEME_COLORS } from '../../styles/theme';
import { PostItem } from '../../types';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  width: 700px;
  color: ${THEME_COLORS.russianViolet}
`;

interface PostProps {
  postList: PostItem[];
}

export default function Post({ postList }: PostProps){
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
    <StyledPostContainer>
      <ReactMarkdown children={postMD.markdown} remarkPlugins={[remarkGfm]}/>
    </StyledPostContainer>
  );
}

function renderError(){
  return (
    <StyledPostContainer> Uh oh. How did you get here? </StyledPostContainer>
  );
}