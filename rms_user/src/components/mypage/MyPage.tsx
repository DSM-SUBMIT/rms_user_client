import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import ProjectContent from './projectcontent';
import { PROJECT, CREATE_PROJECT, ProjectListType } from '../../constance/mypage';
import { Plus } from '../../assets';
import { useModal } from '../../util/hooks/modal';
import useViewMyProject from '../../util/hooks/viewMyProject';
import ProjectView from '../modal/view';
interface Props {
  currentPage: number;
  name: string;
  email: string;
  projectList: Array<ProjectListType>;
  studentNumber: number;
  setModalOn: (payload: string) => void;
  setModalOff: (payload: string) => void;
  setCurrentProjectId: (payload: number) => void;
}

const MyPage: FC<Props> = props => {
  const { state } = useViewMyProject();
  const { name, email, projectList, studentNumber, setCurrentProjectId, currentPage } = props;
  const { setState } = useModal();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickChangePasswordModal = () => {
    setState.setModalOn('modifyNumber');
  };

  const myProjectViewModal = useMemo(() => {
    if (isOpenModal)
      return <ProjectView setIsOpenModal={setIsOpenModal} {...state} projectId={currentPage} />;
  }, [isOpenModal, state, currentPage]);

  return (
    <>
      {myProjectViewModal}
      <Header />
      <S.MyPage>
        <S.Content>
          <S.InformationBox>
            <S.NumberBox onClick={onClickChangePasswordModal}>
              <S.Number>{studentNumber}</S.Number>
            </S.NumberBox>
            <S.NameBox>{name}</S.NameBox>
            <S.EmailBox>{email}</S.EmailBox>
          </S.InformationBox>
          <S.ProjectBox>
            <S.Project>{PROJECT}</S.Project>
            <S.CreateBox>
              <img src={Plus} alt='Plus' />
              <S.Crate>{CREATE_PROJECT}</S.Crate>
            </S.CreateBox>
            <S.ProjectList>
              {projectList.map(data => {
                return (
                  <ProjectContent
                    projectName={data.projectName}
                    projectType={data.projectType}
                    teamName={data.teamName}
                    fieldList={data.fieldList}
                    setIsOpenModal={setIsOpenModal}
                    setCurrentProjectId={setCurrentProjectId}
                    id={data.id}
                  />
                );
              })}
            </S.ProjectList>
          </S.ProjectBox>
        </S.Content>
      </S.MyPage>
    </>
  );
};

export default MyPage;
