import React from 'react';
import styled from 'styled-components';
import selfie from '../../pics/kenzie-couch.png';
import { THEME_COLORS } from '../../styles/theme';

const StyledTitle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-size: 120px;
  color: ${THEME_COLORS.pink};
  margin: 0px;
`;

const StyledBackgroundText = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
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
  padding: 15px;
`

const StyledSection = styled.div`
  width: 50%;
  text-align: center;
  font-size: 20px;
`;

const StyledImg = styled.img`
  height: 550px;
  width: auto;
`

const StyledImgContainer = styled.div`
  height: 550px;
  width: auto;
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
      <StyledImgContainer>
        <StyledImg src={selfie} alt=""/>
      </StyledImgContainer>
      All opinions, posts, moods are my own.
    </StyledContainer>
  );
}