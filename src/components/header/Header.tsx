import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';
import MobileHeader from './mobile-header/MobileHeader';

const StyledHeader = styled.div`
  display: flex;
  flexDirection: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-between;
`;

const StyledText = styled.p`
  color: ${THEME_COLORS.russianViolet};
  font-size: 18px;
  font-weight: bold;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
`

const StyledListItem = styled.li`
  list-style: none;
`

const StyledNav = styled.nav`
  width: 50%;
`

export default function Header(){
  const useMobileLayout = window && window.innerWidth < 500;

  if (useMobileLayout) {
    return <MobileHeader/>
  }
  return (
    <StyledHeader>
      <StyledText>
        {`< Mackenzie Clark />`}
      </StyledText>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <Link to="/" style={{ textDecoration: 'none'}}>
              <StyledText>Home</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/about" style={{ textDecoration: 'none'}}>
              <StyledText>About</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/blog" style={{ textDecoration: 'none'}}>
              <StyledText>Blog</StyledText>
            </Link>
          </StyledListItem>
        </StyledList>
     </StyledNav>
    </StyledHeader>
  );
};