import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer, MyPageContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/mypage' component={MyPageContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
