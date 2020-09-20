/* eslint-disable react/no-danger */
import React from 'react';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { work, education } = data; // data[xxx] holds your post data
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Experience work={work.edges} education={education.edges} />
      <Work />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            timeline
            title
            subTitle
            location
            url
            responsibilites
          }
        }
      }
    }
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/education/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            timeline
            title
            subTitle
            major
          }
        }
      }
    }
  }
`;
