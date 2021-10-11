import React, { FC } from 'react';
import { useModal } from '../../util/hooks/modal';
import ProjectViewModal from './view';

const Modal: FC = (): any => {
  const { state, setState } = useModal();

  return <>{state.type === 'projectView' ? <ProjectViewModal {...state} {...setState} /> : null}</>;
};

export default Modal;
