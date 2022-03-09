
import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

const LibraryComponents = () => (
  <Route exact path='/login'><Login /></Route>
);

export default LibraryComponents;
