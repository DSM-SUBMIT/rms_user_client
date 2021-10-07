import React, { FC, Suspense } from 'react';
import Info from '../../components/info';

const InfoContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Info />
    </Suspense>
  );
};

export default InfoContainer;
