import React, { FC, Suspense } from 'react';
import Info from '../../components/info';
import useInfo from '../../util/hooks/info';

const InfoContainer: FC = () => {
  const { state, setState } = useInfo();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Info {...state} {...setState} />
    </Suspense>
  );
};

export default InfoContainer;
