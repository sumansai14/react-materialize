import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

// export const query = graphql`
  // query IndexQuery {
    // allMarkdownRemark {
      // edges {
        // node {
          // frontmatter {
            // title
            // path
            // tags
            // excerpt
          // }
        // }
      // }
    // }
  // }
// `

export default IndexPage
