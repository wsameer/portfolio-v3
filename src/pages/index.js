/* eslint-disable react/no-danger */
import React from 'react';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  const { hero, about } = data; // data[xxx] holds your post data

  return (
    <Layout>
      <SEO />
      <Hero data={hero.edges} />
      <About data={about.edges} />
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
            greeting
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            pageTitle
            alt
            skillsOne
            skillsTwo
          }
          html
        }
      }
    }
  }
`;
