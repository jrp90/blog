import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';
import Header from './Header';
import Link from './Link';
import Excerpt from './Excerpt';

class Card extends React.Component {
  render() {
    const { node, title } = this.props;

    return (
      <Wrapper key={node.fields.slug}>
        <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
        <Header>
          <Link to={node.fields.slug}>{title}</Link>
        </Header>
        <small>{node.frontmatter.date}</small>
        <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Wrapper>
    );
  }
};

export default Card;
