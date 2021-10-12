import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './styles.css';

export default function Header(){
  return (
    <nav>
      <div className="atom-spinner">
  <div className="spinner-inner">
    <div className="spinner-line"></div>
    <div className="spinner-line"></div>
    <div className="spinner-line"></div>
    <div className="spinner-circle">
      &#9679;
    </div>
  </div>
</div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
  );
};