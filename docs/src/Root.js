// import React from 'react';
// // import ReactDOM from 'react-dom';

// class Root extends React.Component {
  // render () {
    // return (
      // <html>
        // <head>
          // <title>Root</title>
        // </head>
        // <body>
          // <h1>Root</h1>
        // </body>
      // </html>
    // );
  // }
// }

// export default Root;

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>Root</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>Root</h1>
          <script src='./bundle.js' />
        </body>
      </html>
    );
  }
});
