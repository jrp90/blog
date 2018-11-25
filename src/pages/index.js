import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import posed, { PoseGroup } from 'react-pose';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Tags from '../components/Tags';
import Cards from '../components/Cards';
import Card from '../components/Card';
import NoPosts from '../components/NoPosts';

const PosedCard = posed(Card)({
 enter: { opacity: 1, y: 0, delay: ({ i }) => 200 + i * 50 },
 exit: { opacity: 0, y: -30 },
});

class BlogIndex extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   tag: '',
  };

  this.handleTagClick = this.handleTagClick.bind(this);
 }

 handleTagClick(tagClicked) {
  this.setState({ tag: tagClicked });
 }

 render() {
  const { tag } = this.state;
  const siteTitle = get(this, 'props.data.site.siteMetadata.title');
  const posts = get(this, 'props.data.allMarkdownRemark.edges');

  const filteredPosts = posts.filter(({ node }) => {
   const cardTags = get(node, 'frontmatter.tags').split(',');

   if (tag === '' || tag === 'all' || cardTags.includes(tag)) {
    return true;
   }

   return false;
  });

  return (
   <Layout>
    <Helmet title={siteTitle} />
    <Tags handleTagClick={this.handleTagClick} tag={tag} />
    <Container>
     {filteredPosts.length ? (
      <Cards {...{ posts: filteredPosts.length }}>
       <PoseGroup animateOnMount={true}>
        {filteredPosts.map(({ node }, index) => {
         const title = get(node, 'frontmatter.title') || node.fields.slug;
         return (
          <PosedCard
           {...{ node, title, filteredPosts }}
           key={index}
           i={index}
          />
         );
        })}
       </PoseGroup>
      </Cards>
     ) : (
      <NoPosts>
       <p>Nothing to see here! Try another category :)</p>
      </NoPosts>
     )}
    </Container>
   </Layout>
  );
 }
}

export default BlogIndex;

export const pageQuery = graphql`
 query IndexQuery {
  site {
   siteMetadata {
    title
   }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
   edges {
    node {
     excerpt(pruneLength: 60)
     fields {
      slug
     }
     frontmatter {
      date(formatString: "DD MMMM, YYYY")
      title
      tags
      featuredImage {
       childImageSharp {
        fluid(maxWidth: 500, maxHeight: 300) {
         ...GatsbyImageSharpFluid
        }
       }
      }
     }
    }
   }
  }
 }
`;
