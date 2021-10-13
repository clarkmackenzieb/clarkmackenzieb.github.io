import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/about-page/About';
import Home from './pages/home-page/Home';
import Blog from './pages/blog-page/Blog';
import Header from './components/header/Header';
import Post from './pages/post/Post';
import Footer from './components/footer/Footer';
import './styles.css';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;
const StyledHeaderContainer = styled(Header)`
flex: 0 1 auto;
`;

const StyledContentContainer = styled.div`
flex: 1 1 auto;
`;

const StyledFooterContainer = styled(Footer)`
flex: 0 1 auto;
`;

function App() {
  const useMobileLayout = window && window.innerWidth < 500;
  return (
    <StyledAppContainer>
      <Router>
        <StyledHeaderContainer useMobileLayout={useMobileLayout}/>
        <StyledContentContainer>
          <Switch>
            <Route path="/blog/:title" children={<Post/>}/>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </StyledContentContainer>
        <StyledFooterContainer/>
      </Router>
    </StyledAppContainer>
  );
}

export default App;
