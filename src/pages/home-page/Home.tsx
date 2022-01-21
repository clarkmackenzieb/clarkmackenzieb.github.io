import React from 'react';
import styled from 'styled-components';
import selfie from '../../pics/kenzie-couch.png';
import { THEME_COLORS } from '../../styles/theme';

const StyledTitle = styled.div`
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  margin-bottom: 30px;
  height: 200px;
`

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-size: 120px;
  margin: 10px 0;
  color: ${THEME_COLORS.pink};
`

const StyledBackgroundText = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  line-height: .75;
  margin: 10px 0;
  font-weight: bold;
  padding-top: 4px;
  color: ${THEME_COLORS.pink};
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  color: ${THEME_COLORS.pink};
`

const StyledSection = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 30px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 400px;
`


export default function Home(){
  return(
    <StyledContainer>
      <StyledSection>
          Hello world, I'm
      </StyledSection>
      <StyledTitle>
        <StyledHeader>Mackenzie</StyledHeader>
        <StyledBackgroundText>
          UI Engineer. Accessibility Advocate. React Connoisseur. Typo Queen.
        </StyledBackgroundText>
      </StyledTitle>
        <StyledImg src={selfie} alt=""/>
      All opinions, posts, moods, and tears cried are my own.
    </StyledContainer>
  );
}