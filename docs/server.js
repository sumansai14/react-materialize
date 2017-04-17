require('babel-register');

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './src/Root';

const app = express();
const PORT = 4000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  var html = ReactDOMServer.renderToString(<Root />);
  res.send(html);
});

app.listen(PORT, () => console.log('http://locahost:' + PORT));
