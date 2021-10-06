import React, { FC, Suspense } from 'react';
import View from '../../components/modal/view';

const ProjectViewContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <View />
    </Suspense>
  );
};

export default ProjectViewContainer;
