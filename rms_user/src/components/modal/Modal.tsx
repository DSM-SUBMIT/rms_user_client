import React, { FC } from 'react';
import { useModal } from '../../util/hooks/modal';
import ModfiyNumber from './number';

const Modal: FC = (): any => {
  const { state, setState } = useModal();
  return <>{state.type === 'modifyNumber' ? <ModfiyNumber {...state} {...setState} /> : null}</>;
};

export default Modal;
