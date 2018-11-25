import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';
import Text from './Text';
import Header from './Header';
import Link from './Link';
import PostDate from './PostDate';
import Excerpt from './Excerpt';
import Tags from './Tags';

class Card extends React.Component {
 render() {
  const { node, title, forwardedRef } = this.props;

  return (
   <div ref={forwardedRef}>
    <Link to={node.fields.slug}>
     <Wrapper key={node.fields.slug}>
      <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      <Text>
       <Header>{title}</Header>
       <PostDate>{node.frontmatter.date}</PostDate>
       <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
       <Tags>
        {node.frontmatter.tags.split(',').map(tag => (
         <li key={tag}>{tag}</li>
        ))}
       </Tags>
      </Text>
     </Wrapper>
    </Link>
   </div>
  );
 }
}

const PosedCard = React.forwardRef((props, ref) => (
 <Card forwardedRef={ref} {...props}>
  {props.children}
 </Card>
));

export default PosedCard;
