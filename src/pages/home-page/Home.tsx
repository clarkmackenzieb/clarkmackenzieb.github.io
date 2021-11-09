import React from 'react';
import styled from 'styled-components';
import selfie from '../../pics/placeholder.png';
import stars from '../../pics/starry-gif.gif';

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
  background-image: url(${stars});
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 120px;
  line-height: .75;
  margin: 10px 0;
`

const StyledBackgroundText = styled.h2`
  background-image: url(${stars});
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 14px;
  line-height: .75;
  margin: 10px 0;
  font-weight: bold;
  padding-top: 4px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`

const StyledSection = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 30px;
`;

const StyledImg = styled.img`
  height: auto;
  width: 340px;
`

const StyledImgContainer = styled.div`
  border-radius: 50px;
  height 300px;
  width: 300px;
  border-radius: 50px;
  overflow: hidden;
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
      All opinions, posts, moods, and tears cried are my own.
    </StyledContainer>
  );
}