import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Work, Experience } from 'components/landing';

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
