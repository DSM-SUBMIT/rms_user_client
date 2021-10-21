import React, { FC, useEffect } from 'react';
import { useModal } from '../../util/hooks/modal';
import ModfiyNumber from './number';
import ProjectCreate from './create';
import ProjectTeam from './team';
import useUserList from '../../util/hooks/userList';

const Modal: FC = (): any => {
  const { state, setState } = useModal();
  const useState = useUserList().state;

  return (
    <>
      {state.type === 'modifyNumber' ? <ModfiyNumber {...state} {...setState} /> : null}
      {state.type === 'projectCreate' ? <ProjectCreate {...state} {...setState} /> : null}
      {state.type === 'projectTeam' ? (
        <ProjectTeam user={useState.user} {...state} {...setState} />
      ) : null}
    </>
  );
};

export default Modal;
