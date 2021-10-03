import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  LoginContainer,
  DetailReportContainer,
  MainContainer,
  WritePlanContainer,
  WriteReportContainer,
  MyPageContainer,
  LoginLoadingContainer,
} from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route exact path='/auth/token' component={LoginLoadingContainer} />
        <Route exact path='/mypage' component={MyPageContainer} />
        <Route exact path='/write/plan' component={WritePlanContainer} />
        <Route exact path='/write/report' component={WriteReportContainer} />
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
        <Route exact path='/feed' component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
