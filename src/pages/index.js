import React from 'react';
import Headroom from 'react-headroom';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Container from '../layouts/Container';

import Tags from '../components/Tags';
import Cards from '../components/Cards';
import Card from '../components/Card';
import NoPosts from '../components/NoPosts';

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tag: ''
    };

    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleTagClick(tagClicked) {
    this.setState({tag: tagClicked});
  };

  render() {
    const { tag } = this.state;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    const filteredPosts = posts.filter(({ node }) => {
      const cardTags = get(node, 'frontmatter.tags').split(',');

      if (tag === '' || cardTags.includes(tag)) {
        return true;
      }

      return false;
    });

    return (
      <div>
        <Helmet title={siteTitle} />
        <Headroom>
          <Tags handleTagClick={this.handleTagClick} tag={tag}/>
        </Headroom>
        <Container>
          {filteredPosts.length ? (
            <Cards {...{posts: filteredPosts.length}}>
              {filteredPosts.map(({ node }, index) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                return <Card {...{node, title, filteredPosts}} key={index} />;
              })}
            </Cards>
          ) : (
            <NoPosts>
              <p>Nothing to see here! Try another category :)</p>
            </NoPosts>
          )}
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
          excerpt(pruneLength: 60)
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
