import React from 'react';
import Link from 'gatsby-link';
import { groupBy } from './helper';

class Sidebar extends React.Component {
  render() {
    const { posts } = this.props;
    const sections = groupBy(posts, ({ node }) =>
      node.frontmatter.section.substring(1)
    );

    return (
      <div>
        {Object.keys(sections).map(section => (
          <div>
            <h1>{section}</h1>
            {sections[section].map(({ node }) => {
              const { title, path } = node.frontmatter;
              return <Link to={path}>{title}</Link>;
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default Sidebar;
