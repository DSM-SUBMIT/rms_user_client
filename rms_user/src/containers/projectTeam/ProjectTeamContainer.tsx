import React, { FC, Suspense } from 'react';
import ProjectTeam from '../../components/modal/team';
import { useModal } from '../../util/hooks/modal';
import useProject from '../../util/hooks/project';
import useUserList from '../../util/hooks/userList';

const ProjectTeamContainer: FC = () => {
  const { state } = useUserList();
  const { setState } = useModal();
  const memberSetState = useProject().setState;
  const memberState = useProject().state;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectTeam
        {...state}
        setModalOff={setState.setModalOff}
        setModalOn={setState.setModalOn}
        setMemberList={memberSetState.setMemberList}
        memberList={memberState.memberList}
      />
    </Suspense>
  );
};

export default ProjectTeamContainer;