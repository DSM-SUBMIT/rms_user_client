import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer, ProjectCreateContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/ProjectCreateContainer' component={ProjectCreateContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
