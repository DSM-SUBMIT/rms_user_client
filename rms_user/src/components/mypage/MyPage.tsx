import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import ProjectContent from './projectcontent';
import { PROJECT, CREATE_PROJECT, ProjectListType } from '../../constance/mypage';
import { Plus } from '../../assets';
import ProjectCreate from '../modal/create';
import { setModalOn } from '../../modules/redux/action/modal';
import { useModal } from '../../util/hooks/modal';
interface Props {
  name: string;
  email: string;
  projectList: Array<ProjectListType>;
  studentNumber: number;
  setModalOn: (payload: string) => void;
  setModalOff: (payload: string) => void;
}

const MyPage: FC<Props> = props => {
  const { name, email, projectList, studentNumber, setModalOff } = props;
  const { setState } = useModal();

  const onClickChangePasswordModal = () => {
    setState.setModalOn('modifyNumber');
  };

  return (
    <>
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
