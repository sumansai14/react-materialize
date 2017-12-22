import React, { Component } from 'react';
import Link from 'gatsby-link';

import { groupBy } from './helper';

class Sidebar extends Component {
  render() {
    const { posts } = this.props;
    const sections = groupBy(posts, ({ node }) =>
      node.frontmatter.section.substring(1)
    );

    return (
      <ul className="sidenav sidenav-fixed">
        <li>
          <a href="#">
            <h5>React Materialize</h5>
          </a>
        </li>
        {Object.keys(sections).map((section, key) => (
          <li key={key}>
            <a href="#">{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            {sections[section].map(({ node }, yek) => {
              const { title, path } = node.frontmatter;
              return (
                <Link key={yek} to={path}>
                  {title}
                </Link>
              );
            })}
          </li>
        ))}
      </ul>
    );
  }
}

export default Sidebar;
