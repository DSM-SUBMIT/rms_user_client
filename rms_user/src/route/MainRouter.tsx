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
import { useModal } from '../util/hooks/modal';

const MainRouter = () => {
  const Modal = useModal();
  return (
    <BrowserRouter>
      {Modal}
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route exact path='/auth/token' component={LoginLoadingContainer} />
        <Route exact path='/mypage' component={MyPageContainer} />
        <Route exact path='/write/plan' component={WritePlanContainer} />
        <Route exact path='/write/report' component={WriteReportContainer} />
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
        <Route exact path='/feed' component={MainContainer} />
        <Route exact path='/projectview' component={ProjectViewContainer} />
        <Route exact path='/info' component={InfoContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
