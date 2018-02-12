import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      linkedin: author.linkedin,
      github: author.github,
      email: author.email,
      rss: author.rss
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to LinkedIn"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to github"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`} rel="noopener noreferrer" aria-label="Link to Email">
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss} rel="noopener noreferrer" aria-label="Link to rss">
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
