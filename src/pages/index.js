import React from 'react';
import PropTypes from 'prop-types';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';

export const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero data={data.hero.edges} />
    <About />
    <Experience />
    <Work />
    <Contact />
  </Layout>
);

// GraphQL query
export const pageQuery = graphql`
  {
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
