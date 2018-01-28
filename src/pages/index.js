import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Cards from '../components/Cards';
import Card from '../components/Card';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <Cards>
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
              <Card {...{node, title}} />
            </Cards>
          );
        })}
      </div>
    );
  }
};

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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;