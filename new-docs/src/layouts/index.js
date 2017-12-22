import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'materialize-css/dist/css/materialize.css';

const Header = () => <Link to="/">Gatsby</Link>;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="React Materialize"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
