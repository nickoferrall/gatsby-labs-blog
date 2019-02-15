import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// we can't use a static query as static queries can't accept variables.
// We'll need a page query for this which is why we're importing graphql

const PostTemplate = ({ data: post }) => (
  <Layout>
    <h3>Programatically creating pages!</h3>
    <h1>{post.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
