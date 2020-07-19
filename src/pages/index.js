/* eslint-disable react/no-danger */
import React from 'react';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    // <Layout>
    //   <SEO />
    //   <Hero />
    //   <About />
    //   <Experience />
    //   <Work />
    //   <Contact />
    // </Layout>
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
      }
    }
  }
`;
