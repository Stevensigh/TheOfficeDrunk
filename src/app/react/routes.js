import React from 'react';
import { Route } from 'react-router';
import RootContainer from 'app/react/containers/root';
import TitleContainer from 'app/react/containers/title';

const routes = (
  <div>
    <Route path="*" component={TitleContainer} />
  </div>
);

export default routes;
