import React, { FC, Suspense } from 'react';
import Main from '../../components/main';

const MainContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  );
};

export default MainContainer;
