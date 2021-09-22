import React, { FC, Suspense } from 'react';
import Login from '../../components/login';

const LoginContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default LoginContainer;
