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
import './styles.css';

function App() {
  const useMobileLayout = window && window.innerWidth < 500;
  return (
      <Router>
        <Header useMobileLayout={useMobileLayout}/>
        <Switch>
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
      </Router>
  );
}

export default App;
