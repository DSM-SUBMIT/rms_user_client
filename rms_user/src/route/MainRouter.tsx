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
  DetailPlanContainer,
  InfoContainer,
} from '../containers';
import ProjectViewContainer from '../containers/projectview/ProjectViewContainer';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route exact path='/auth/token' component={LoginLoadingContainer} />
        <Route exact path='/mypage' component={MyPageContainer} />
        <Route exact path='/write/plan/:id' component={WritePlanContainer} />
        <Route exact path='/write/report/:id' component={WriteReportContainer} />
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
        <Route exact path='/feed' component={MainContainer} />
        <Route exact path='/projectview' component={ProjectViewContainer} />
        <Route exact path='/detail-plan/:id' component={DetailPlanContainer} />
        <Route exact path='/info' component={InfoContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
