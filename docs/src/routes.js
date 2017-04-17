var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var createBrowserHistory = require('history').createBrowserHistory;

var history = createBrowserHistory();

router.get('*', function (request, response) {
  ReactRouter.match({
    routes: (
      <ReactRouter.Router history={history}>
        <ReactRouter.Route path='/' component={require('../Root')} />
      </ReactRouter.Router>
    ),
    location: request.url
  }, function (error, redirectLocation, renderProps) {
    if (renderProps) {
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps} />
      );
      response.send(html);
    } else {
      response.status(404).send('Not found', error);
    }
  });
});

module.exports = router;
