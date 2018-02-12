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
          <meta name="author" content="Kelvin Abella" />
          <meta property="og:title" content="Kelvin Abella | kelvtudio" />
          <meta
            property="og:description"
            content="Personal portfolio and branding page of Kelvin Abella - Web developer."
          />
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@abellakelvin" />
          <meta name="twitter:creator" content="@Kelvin Abella" />
          <meta name="twitter:title" content="Kelvin Abella | kelvtudio" />
          <meta
            name="twitter:description"
            content="Personal portfolio and branding page of Kelvin Abella - Web developer."
          />
          <meta name="twitter:image:src" content="" />
          <meta property="og:title" content="Kelvin Abella | kelvtudio" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.kelvstudio.com/" />
          <meta
            property="og:description"
            content="Personal portfolio and branding page of Kelvin Abella - Web developer."
          />
          <meta property="og:site_name" content="kelvtudio" />
          <meta property="article:published_time" content="2016-02-20T011:00:00+08:00" />
          <meta property="article:modified_time" content="2016-02-20T011:30:00+08:00" />

          <html lang="en" />
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
