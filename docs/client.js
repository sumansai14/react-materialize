import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './src/routes';

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('app'));
