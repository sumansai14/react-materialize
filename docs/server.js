require('babel-register');

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Root = require('./src/Root.js');

app.use(express.static('dist'));

app.get('/', function (request, response) {
  var html = ReactDOMServer.renderToString(
    React.createElement(Root)
  );
  response.send(html);
});

var PORT = 4000;
app.listen(PORT, function () {
  console.log('http://locahost:' + PORT);
});
