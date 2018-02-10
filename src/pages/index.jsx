import React from 'react';
import Helmet from 'react-helmet';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const projects = this.props.data.allMarkdownRemark.edges;
    projects.forEach((project) => {
      items.push(<Project data={project} key={project.node.fields.slug} />);
    });

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            {items}
            {/* <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" />
            <Project data="projects" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          linkedin
          github
          rss
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "projects" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          html
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            layout
            technology
            description
          }
        }
      }
    }
  }
`;
