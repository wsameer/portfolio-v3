/* eslint-disable react/no-danger */
import React from 'react';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { hero } = data; // data[xxx] holds your post data

  return (
    <Layout>
      <SEO />
      <Hero data={hero.edges} />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    blog: markdownRemark(fileAbsolutePath: { regex: "/post-1.md/" }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      html
    }
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
  }
`;
