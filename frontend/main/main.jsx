import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './styles/main.css';

import App from './App';

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Main;
