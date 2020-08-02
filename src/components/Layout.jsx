import React from 'react';
import '../styles/fonts.css';
import { GlobalStyle } from 'styles';
import { Header, Footer } from 'components';

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <Header />

    {/* <Social/>
    <Email/> */}

    {children}

    <Footer />
  </>
);
