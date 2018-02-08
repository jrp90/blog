import React from 'react';
import Headroom from 'react-headroom';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Container from '../layouts/Container';

import Tags from '../components/Tags';
import Cards from '../components/Cards';
import Card from '../components/Card';

class BlogIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tags: []
    };

    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleTagClick(tagClicked) {
    const { tags } = this.state;

    if (tags.includes(tagClicked)) {
      this.setState(prevState => ({
        tags: prevState.tags.filter(tag => tag !== tagClicked)
      }));

      return;
    }

    this.setState(prevState => ({
      tags: [...prevState.tags, tagClicked]
    }));
  };

  render() {
    const { tags } = this.state;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    const filteredPosts = posts.filter(({ node }) => {
      const cardTags = get(node, 'frontmatter.tags').split(',');
      const intersection = tags.filter(tag => cardTags.includes(tag));

      if (tags.length === 0 || intersection.length) {
        return true;
      }

      return false;
    });

    return (
      <div>
        <Helmet title={siteTitle} />
        <Headroom>
          <Tags handleTagClick={this.handleTagClick} tags={tags}/>
        </Headroom>
        <Container>
          <Cards>
            {filteredPosts.map(({ node }, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;
              return <Card {...{node, title}} key={index} />;
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
