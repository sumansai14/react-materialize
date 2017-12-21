import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Docs = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title } = frontmatter

  return (
    <div>
      <Helmet title={title} />

      <div>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Docs
