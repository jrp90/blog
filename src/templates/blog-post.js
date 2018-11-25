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
  const post = this.props.data.markdownRemark;
  const siteTitle = get(this.props, 'data.site.siteMetadata.title');

  return (
   <Layout>
    <PoseGroup animateOnMount={true}>
     <Container key="container">
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <BackLink to="/">
       <Back />
       <span>Back Home</span>
      </BackLink>
      <Header>{post.frontmatter.title}</Header>
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
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
