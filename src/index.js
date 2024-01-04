import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MoviesApp from './MoviesApp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesApp />
  </React.StrictMode>
);
