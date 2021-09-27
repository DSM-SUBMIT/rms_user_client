import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer, DetailReportContainer, MainContainer, WritePlanContainer, WriteReportContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
<<<<<<< HEAD
        <Route exact path='/write/plan' component={WritePlanContainer}></Route>
        <Route exact path='/write/report' component={WriteReportContainer}></Route>
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
=======
        <Route exact path='/detail-report/:id' component={DetailReportContainer} />
        <Route exact path='/write/plan' component={WritePlanContainer}></Route>
        <Route exact path='/write/report' component={WriteReportContainer}></Route>
>>>>>>> 5-view-report-page-UI
        <Route exact path='/' component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
