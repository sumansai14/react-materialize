import React from 'react';

class Root extends React.Component {
  render () {
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
};

export default Root;
