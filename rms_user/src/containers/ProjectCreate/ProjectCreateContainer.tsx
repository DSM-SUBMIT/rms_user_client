import React, { FC, Suspense } from 'react';
import Create from '../../components/modal/create';
import { useModal } from '../../util/hooks/modal';
import useProject from '../../util/hooks/project';

const ProjectCreateContainer: FC = () => {
  const { state, setState } = useProject();
  const modalState = useModal().setState;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Create
        {...state}
        {...setState}
        setModalOff={modalState.setModalOff}
        setModalOn={modalState.setModalOn}
      />
    </Suspense>
  );
};

export default ProjectCreateContainer;
