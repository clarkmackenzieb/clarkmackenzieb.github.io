import React from 'react';
import linkedIn from './icons/linkedin.png'
import octocat from './icons/octocat.png'
import twitterBird from './icons/twitter.svg';
import { GRAYS } from '../../styles/theme';
import styled from 'styled-components';
import { ScreenReaderContent } from '../screenreader-content/ScreenReaderContent'

const StyledImage = styled.img`
  width: auto;
  height: 30px;
`;

const StyledContainer = styled.nav`
  width: 100%;
  background-color: ${GRAYS[700]};
`;

const StyledContentContainer = styled.li`
  list-style: none;
  margin-left: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 15px;
`;

export default function Footer(){
  return (
    <StyledContainer>
      <StyledList>
        <StyledContentContainer>
          <a href="https://github.com/clarkmackenzieb">
            <StyledImage alt="" src={octocat}/>
            <ScreenReaderContent>Catch me on GitHub</ScreenReaderContent>
          </a>
        </StyledContentContainer>
        <StyledContentContainer>
          <a href="https://www.linkedin.com/in/clarkmackenzieb/">
            <StyledImage alt="" src={linkedIn}/>
            <ScreenReaderContent>Peek my LinkedIn</ScreenReaderContent>
          </a>
        </StyledContentContainer>
        <StyledContentContainer>
          <a href="https://twitter.com/clarkmackenzieb">
            <StyledImage alt="" src={twitterBird}/>
            <ScreenReaderContent>Follow me on Twitter</ScreenReaderContent>
          </a>
        </StyledContentContainer>
      </StyledList>
    </StyledContainer>
  );
}