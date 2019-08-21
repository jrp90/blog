import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { PoseGroup } from 'react-pose';
import Layout from '../components/Layout';
import Container from './Container';
import Header from './Header';
import BackLink from '../components/BackLink';
import Back from '../components/Back';

import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const { location } = this.props;
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout {...{ location }}>
        <PoseGroup animateOnMount={true}>
          <Container key="container" className="h-entry">
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
              <script src={'/webmention.js'} async />
            </Helmet>
            <BackLink to="/">
              <Back />
              <span>Back Home</span>
            </BackLink>
            <a
              href={location.href}
              className="u-url"
              style={{ display: 'none' }}
            >
              <time className="dt-published">
                {new Date(post.frontmatter.date).toISOString()}
              </time>
            </a>
            <Header className="p-name">{post.frontmatter.title}</Header>
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
                marginTop: rhythm(-1 / 2),
              }}
            >
              {post.frontmatter.date}
            </p>
            <div
              className="e-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div id="webmentions" />
          </Container>
        </PoseGroup>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
