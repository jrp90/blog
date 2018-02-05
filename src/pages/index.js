import React from 'react';
import Headroom from 'react-headroom';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Container from '../layouts/Container';

import Tags from '../components/Tags';
import Cards from '../components/Cards';
import Card from '../components/Card';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Headroom>
          <Tags />
        </Headroom>
        <Container>
          <Cards>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return  <Card {...{node, title}} />;
            })}
          </Cards>
        </Container>
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
          excerpt(pruneLength: 70)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 500, maxHeight: 300) {
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
