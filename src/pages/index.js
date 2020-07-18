import React from 'react';
import PropTypes from 'prop-types';
import { Hero, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero />
    <About />
    <Experience />
    <Work />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
