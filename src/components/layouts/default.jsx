import React from 'react';
import Header from '../header';

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
);

export default DefaultLayout;
