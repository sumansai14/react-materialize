import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Docs = ({ data, location }) => {
  const { markDownRemark: post } = data;
  const { frontmatter, html } = post;

  return (
    <div>
      <Helmet title={`${title} - docs`} />

      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  );
}

export default Docs;
