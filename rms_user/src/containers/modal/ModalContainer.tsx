import React, { FC, Suspense } from 'react';
import { useModal } from '../../util/hooks/modal';
const Modal = React.lazy(() => import('../../components/modal/index'));

const ModalContainer: FC = () => {
  const { state, setState } = useModal();
  return <Suspense fallback={<div>loading...</div>}></Suspense>;
};

export default ModalContainer;
