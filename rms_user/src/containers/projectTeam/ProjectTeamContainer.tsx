import React, { FC, Suspense } from 'react';
import ProjectTeam from '../../components/modal/team';
import { useModal } from '../../util/hooks/modal';
import useUserList from '../../util/hooks/userList';

const ProjectTeamContainer: FC = () => {
  const { state } = useUserList();
  const { setState } = useModal();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectTeam {...state} setModalOff={setState.setModalOff} setModalOn={setState.setModalOn} />
    </Suspense>
  );
};

export default ProjectTeamContainer;
