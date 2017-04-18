import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router';
import renderToString from './src/renderToString';
import Routes from './src/routes';

const app = express();
const PORT = 4000;
app.use(express.static('dist'));

app.get('*', (req, res) => {
  const context = {};
  const server = (
    <StaticRouter context={{}} location={req.url}>
      <Routes />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.status(200).send(renderToString(server));
  }
});

app.listen(PORT, () => console.log('http://locahost:' + PORT));
