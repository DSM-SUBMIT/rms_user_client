import React, { FC, Suspense } from 'react';
import Create from '../../components/modal/create';

const ProjectCreateContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Create />
    </Suspense>
  );
};

export default ProjectCreateContainer;
