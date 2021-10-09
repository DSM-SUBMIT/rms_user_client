import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import ProjectContent from './projectcontent';
import { PROJECT, CREATE_PROJECT, ProjectListType } from '../../constance/mypage';
import { Plus } from '../../assets';

interface Props {
  name: string;
  email: string;
  projectList: Array<ProjectListType>;
  /*setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>; */
}

const MyPage: FC<Props> = props => {
  const { name, email, projectList /*setIsOpenModal*/ } = props;
  /*const projectCreateClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpenModal(true);
  };*/
  /*const projectViewClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpenModal(true);
  };*/
  return (
    <>
      <Header />
      <S.MyPage>
        <S.Content>
          <S.InformationBox>
            <S.NumberBox>2017</S.NumberBox>
            <S.NameBox>기매교</S.NameBox>
            <S.EmailBox>201908khk@dsm.hs.kr</S.EmailBox>
            <S.NameBox>{name}</S.NameBox>
            <S.EmailBox>{email}</S.EmailBox>
          </S.InformationBox>
          <S.ProjectBox>
            <S.Project>{PROJECT}</S.Project>
            <S.CreateBox /*onClick={projectCreateClick}*/>
              <img src={Plus} alt='Plus' />
              <S.Crate>{CREATE_PROJECT}</S.Crate>
            </S.CreateBox>
            <S.ProjectList>
              {projectList.map(data => {
                return (
                  <ProjectContent
                    /*onClick={projectViewClick}*/
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
