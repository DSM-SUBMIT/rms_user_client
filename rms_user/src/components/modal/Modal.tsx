import React, { FC, useEffect } from 'react';
import { useModal } from '../../util/hooks/modal';
import ModfiyNumber from './number';
import ProjectCreate from './create';
import ProjectTeam from './team';
import useUserList from '../../util/hooks/userList';
import useProject from '../../util/hooks/project';

const Modal: FC = (): any => {
  const { state, setState } = useModal();
  const useState = useUserList().state;
  const projectState = useProject().state;
  const setProjectState = useProject().setState;
  return (
    <>
      {state.type === 'modifyNumber' ? <ModfiyNumber {...state} {...setState} /> : null}
      {state.type === 'projectCreate' ? (
        <ProjectCreate {...state} {...setState} {...projectState} {...setProjectState} />
      ) : null}
      {state.type === 'projectTeam' ? (
        <ProjectTeam
          user={useState.user}
          {...state}
          {...setState}
          setMemberList={setProjectState.setMemberList}
        />
      ) : null}
    </>
  );
};

export default Modal;
