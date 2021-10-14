import React from 'react';
import linkedInIcon from './icons/LinkedIn.png'
import { Link } from "react-router-dom";
import octocat from './icons/Octocat.png'
import { THEME_COLORS } from '../../styles/theme';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 30px;
  height: auto;
`;

const StyledContainer = styled.div`
  margin-left: 40px;
  padding-bottom: 20px;
  width: 15%;
`

const StyledText = styled.p`
  color: ${THEME_COLORS.russianViolet};
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export default function Footer(){
  return (
    <StyledContainer>
      <Link to="https://github.com/clarkmackenzieb" style={{ textDecoration: "none" }}>
        <StyledContentContainer>
          <StyledImage alt="github" src={octocat}/>
          <StyledText>Catch me on github</StyledText>
        </StyledContentContainer>
      </Link>
      <Link to="https://www.linkedin.com/in/clarkmackenzieb/" style={{ textDecoration: "none" }}>
        <StyledContentContainer>
          <StyledImage alt="linked in"src={linkedInIcon}/>
          <StyledText>Peek my linked in</StyledText>
        </StyledContentContainer>
      </Link>
    </StyledContainer>
  );
}