import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { THEME_COLORS, GRAYS } from '../../styles/theme';
import MobileHeader from './mobile-header/MobileHeader';
import icon from '../../pics/kenzie-icon1.png';
import { ROUTES } from '../../types';

const StyledHeader = styled.header`
  display: flex;
  flexDirection: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-between;
  background-color: ${GRAYS[800]};
`;

const StyledText = styled.p`
  color: ${THEME_COLORS.pink};
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

const StyledListItem = styled('li')(({ active } : { active: boolean; }) => {
  return {
    listStyle: 'none',
    borderBottom: active ? `3px solid ${THEME_COLORS.pink}` : '',
  
  };
})


const StyledNav = styled.nav`
  width: 50%;
`

const StyledIconContainer = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header({ useMobileLayout }:{ useMobileLayout: boolean }){
  const location = useLocation();
  if (useMobileLayout) {
    return <MobileHeader/>
  }
  return (
    <StyledHeader>
      <StyledIconContainer>
        <img src={icon} alt="" height="90px" width="90px"/>
      </StyledIconContainer>
      <StyledNav>
        <StyledList>
          <StyledListItem active={ROUTES.home === location.pathname}>
            <Link to={ROUTES.home} style={{ textDecoration: 'none'}}>
              <StyledText>Home</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem active={ROUTES.about === location.pathname}>
            <Link to={ROUTES.about} style={{ textDecoration: 'none'}}>
              <StyledText>About</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem active={ROUTES.reference === location.pathname}>
            <Link to={ROUTES.reference} style={{ textDecoration: 'none'}}>
              <StyledText>Reference</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem active={ROUTES.blog === location.pathname}>
            <Link to={ROUTES.blog} style={{ textDecoration: 'none'}}>
              <StyledText>Blog</StyledText>
            </Link>
          </StyledListItem>
          <StyledListItem active={ROUTES.todo === location.pathname}>
            <Link to={ROUTES.todo} style={{ textDecoration: 'none'}}>
              <StyledText>To do list</StyledText>
            </Link>
          </StyledListItem>
        </StyledList>
     </StyledNav>
    </StyledHeader>
  );
};