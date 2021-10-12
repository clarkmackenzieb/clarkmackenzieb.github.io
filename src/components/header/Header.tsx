import React from "react";
import { Link } from "react-router-dom";
import HeaderSpinner from './header-spinner/HeaderSpinner';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';

const StyledHeader = styled.div`
  background-color: ${THEME_COLORS.russianViolet};
  display: flex;
  flexDirection: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledText = styled.p`
  color: white;
  font-size: 18px;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  max-width: 400px;
`

const StyledListItem = styled.li`
  list-style: none;
`

const StyledNav = styled.nav`
  width: 100%;
`

export default function Header(){
  return (
    <StyledHeader>
      <HeaderSpinner/>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <Link to="/">
              <StyledText>Home</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/about">
              <StyledText>About</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/blog">
              <StyledText>Blog</StyledText>
            </Link>
          </StyledListItem>
        </StyledList>
     </StyledNav>
    </StyledHeader>
  );
};