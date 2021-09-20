import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContainer, MyPageContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
<<<<<<< HEAD
        <Route exact path='/mypage' component={MyPageContainer} />
=======
>>>>>>> main
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
