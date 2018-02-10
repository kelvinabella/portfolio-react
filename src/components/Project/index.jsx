import React from 'react';
import './style.scss';

class Post extends React.Component {
  render() {
    const { title } = this.props.data.node.frontmatter;
    const { html, fields: { slug }, frontmatter: { technology } } = this.props.data.node;
    return (
      <div className="post">
        <div className="post__meta" />
        <div>
          <a href={slug} target="_blank">
            <h2 className="post__title">{title}</h2>
            <span className="post__subtitle">({technology})</span>
          </a>
        </div>
        <div className="post__description" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

export default Post;
