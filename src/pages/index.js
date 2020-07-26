/* eslint-disable react/no-danger */
import React from 'react';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { hero, about, work } = data; // data[xxx] holds your post data

  return (
    <Layout>
      <SEO />
      <Hero data={hero.edges} />
      <About data={about.edges} />
      <Experience work={work.edges} />
      <Work />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
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
  }
`;
