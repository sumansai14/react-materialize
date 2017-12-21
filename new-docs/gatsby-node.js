/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const template = path.resolve(`src/templates/docs.js`);

    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  path
                  title
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: template
          });
        });
      })
    );
  });
};



 // You can delete this file if you're not using it
