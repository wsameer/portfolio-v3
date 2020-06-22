import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Work, Experience } from 'components/landing';
import { Header } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Header />
    <Intro />
    <About />
    <Experience />
    <Work />
    <Contact />
  </Layout>
);
