import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer } from '../containers';
import { WritePlanContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/wplan' component={WritePlanContainer}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
