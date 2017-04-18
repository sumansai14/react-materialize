import React from 'react';
import { Route } from 'react-router';

const NoMatch = (props) => (
  <Route render={({ staticContext }) => {
    if (staticContext) {
      staticContext.status = 404;
    }

    return (
      <div>
        <em>Sorry, can’t find that.</em>
      </div>
    );
  }} />
);

export default NoMatch;
