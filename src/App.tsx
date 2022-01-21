import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/about-page/About';
import Home from './pages/home-page/Home';
import Blog from './pages/blog-page/Blog';
import Post from './pages/posts/Post';
import Reference from './pages/reference-page/Reference';
import Header from './components/header/Header';
import './styles.css';
import styled from 'styled-components';
import blogPosts from './pages/blog-page/blog-posts/index';
import referencePosts from './pages/reference-page/reference-posts/index';
import { GRAYS } from './styles/theme';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${GRAYS[900]};
`;
const StyledHeaderContainer = styled(Header)`
  flex: 0 1 auto;
`;

const StyledContentContainer = styled.div`
  flex: 1 1 auto;
`;

function App() {
  const useMobileLayout = window && window.innerWidth < 500;
  return (
    <StyledAppContainer>
      <Router>
        <StyledHeaderContainer useMobileLayout={useMobileLayout}/>
        <StyledContentContainer>
          <Switch>
            <Route path="/blog/:id" children={<Post postList={blogPosts}/>}/>
            <Route path="/reference/:id" children={<Post postList={referencePosts} />}/>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/reference">
              <Reference/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </StyledContentContainer>
      </Router>
    </StyledAppContainer>
  );
}

export default App;
