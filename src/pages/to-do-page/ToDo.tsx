import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  margin-left: 100px;
  width: 700px;
  color: ${THEME_COLORS.pink}
`;


export default function ToDo(){
  return(
    <StyledContainer>
      <h1>
          This site is a work in progress. Here are some up-and-coming things I'd like to add.
      </h1>
      <ul>
        <li>Set up the mobile layout or make the main files responsive</li>
        <li>Add resume somewhere here</li>
        <li>Maybe find a more efficient way to store posts</li>
        <li>Make the styling a bit more concise without repeated code</li>
        <li>Add prettier or something to make sure the code stays consistent</li>
      </ul>
      </StyledContainer>
  );
}