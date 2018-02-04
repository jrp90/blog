import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';
import Text from './Text';
import Header from './Header';
import Link from './Link';
import Date from './Date';
import Excerpt from './Excerpt';
import Tags from './Tags';

class Card extends React.Component {
  render() {
    const { node, title } = this.props;

    return (
      <Link to={node.fields.slug}>
        <Wrapper key={node.fields.slug}>
          <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
          <Text>
            <Header>{title}</Header>
            <Date>{node.frontmatter.date}</Date>
            <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Tags>{node.frontmatter.tags}</Tags>
          </Text>
        </Wrapper>
      </Link>
    );
  }
};

export default Card;
