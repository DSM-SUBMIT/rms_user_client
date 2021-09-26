import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer, DetailReportContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
