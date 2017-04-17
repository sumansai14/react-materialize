import express from 'express';
import React from 'react';
import { StaticRouter as Router } from 'react-router';
import render from './src/render';
import Root from './src/Root';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

const app = express();
app.use(express.static('dist'));
const PORT = 4000;

app.get('*', (req, res) => {
  res.status(200).send(render((
    <Router context={{}} location={req.url}>
      <Root />
    </Router>
  )));
});

app.listen(PORT, () => console.log('http://locahost:' + PORT));
