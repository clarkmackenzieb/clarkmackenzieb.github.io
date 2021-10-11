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

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
