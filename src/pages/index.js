import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { Header } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Header />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
