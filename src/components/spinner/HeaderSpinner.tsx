import React from 'react';
import './styles.css';

export default function HeaderSpinner(){
  return(
    <div className="atom-spinner" aria-hidden="true">
      <div className="spinner-inner">
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-circle">
          &#9679;
        </div>
      </div>
    </div>
  );
}