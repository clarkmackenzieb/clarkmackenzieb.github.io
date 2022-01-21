import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';
import { PostItem } from '../../types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  width: 700px;
  color: ${THEME_COLORS.pink}
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledPostHeader = styled.h2`
  font-size: 24px;
  color: ${THEME_COLORS.pink};
`;

const StyledText = styled.p`
  color: ${THEME_COLORS.pink};
  font-size: 18px;
`;

interface ListPageProps {
  title: string;
  body: string;
  postList: PostItem[];
  link: 'reference' | 'blog';
}

export default function ListPage({
  title,
  postList,
  link,
  body,
}: ListPageProps){
  if(postList && postList.length === 0){
    return renderZeroState();
  }
  const list = postList.map((post) => {
    return (
      <StyledListItem key={post.title}>
        <Link style={{ textDecoration: 'none'}} to={`/${link}/${post.id}`}>
          <StyledPostHeader>{post.title}</StyledPostHeader>
          <StyledText>
            {post.date}
          </StyledText>
          <StyledText>
            {post.desc}
          </StyledText>
        </Link>
      </StyledListItem>
    );
  });

  return (
    <StyledContainer>
      <h1>{title}</h1>
      <p>
        {body}
      </p>
      <ul>
        {list}
      </ul>
    </StyledContainer>
  );
}

function renderZeroState(){
  return (
    <StyledContainer>
      <h1>No references yet! Check back soon.</h1>
    </StyledContainer>
  );
};