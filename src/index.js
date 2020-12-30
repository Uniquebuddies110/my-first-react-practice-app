import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  //  For Normal App
  //   <App />

  // For Router Concept
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);