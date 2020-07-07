import React from 'react';
import { Intro, About, Contact, Work, Experience, SEO } from 'components';
import { Layout } from 'components/Layout';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Experience />
    <Work />
    <Contact />
  </Layout>
);
