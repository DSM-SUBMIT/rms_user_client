import React, { FC, useEffect } from 'react';
import { useModal } from '../../util/hooks/modal';
import ModfiyNumber from './number';
import ProjectCreate from './create';
import ProjectTeam from './team';
import useUserList from '../../util/hooks/userList';
import useProject from '../../util/hooks/project';
import DeleteBox from './delete';
import Modify from './modify';
import ProjectModfiy from './projectModify';
import useProjectModify from '../../util/hooks/projectModify';
import OtherModify from './otherModify';
import useViewMyProject from '../../util/hooks/viewMyProject';

const Modal: FC = (): any => {
  const { state, setState } = useModal();
  const useState = useUserList().state;
  const projectState = useProject().state;
  const setProjectState = useProject().setState;
  const ProjectModifyState = useProject().state;
  const setProjectModifyState = useProjectModify().setState;
  const ViewMyProjectState = useViewMyProject();

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
          memberList={projectState.memberList}
        />
      ) : null}
      {state.type === 'deleteModal' ? <DeleteBox {...state} {...setState} /> : null}
      {state.type === 'modifyModal' ? <Modify {...state} {...setState} /> : null}
      {state.type === 'projectModify' ? (
        <ProjectModfiy
          setRole={function (payload: { id: string; role: string }): void {
            throw new Error('Function not implemented.');
          }}
          {...state}
          {...setState}
          {...ProjectModifyState}
          {...setProjectModifyState}
          {...ViewMyProjectState}
        />
      ) : null}
      {state.type === 'OtherModify' ? <OtherModify {...state} {...setState} /> : null}
    </>
  );
};

export default Modal;
