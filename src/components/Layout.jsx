import React from 'react';
import '../styles/fonts.css';
import { GlobalStyle } from 'styles';
import { Header } from 'components/Header';
import { Footer } from './Footer.jsx';

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
);
