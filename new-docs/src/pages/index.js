import React from 'react';

import Sidebar from '../components/Sidebar';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      <div className="container">
        <Sidebar posts={posts} />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            section
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
