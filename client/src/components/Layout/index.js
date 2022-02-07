import React from 'react';
import { LinearProgress, Container } from '@mui/material';
import Nav from '../Nav';

const Layout = ({ children, contentIsLoading, wrapContent }) => {
  return (
    <>
      <Nav />
      {contentIsLoading && <LinearProgress color="secondary" />}
      {wrapContent ?
        (<Container>{children}</Container>) : {children }
      }
    </>
  );
}

export default Layout;