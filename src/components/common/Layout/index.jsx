import React from 'react';
import { Footer, Header } from 'components/theme';
import { GlobalStyle } from './styles';

import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
);
