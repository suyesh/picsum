import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toggle/style.css';
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
