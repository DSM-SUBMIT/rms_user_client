import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import ProjectContent from './projectcontent';
import { PROJECT, CREATE_PROJECT, ProjectListType } from '../../constance/mypage';
import { Plus } from '../../assets';
import { error } from '../../models/error';

interface Props {
  email: string;
  name: string;
  projectList: Array<ProjectListType>;
  error: error | null;
}

const MyPage: FC<Props> = props => {
  return (
    <>
      <Header />
      <S.MyPage>
        <S.Content>
          <S.InformationBox>
            <S.NameBox>김해교</S.NameBox>
            <S.EmailBox>201908khk@dsm.hs.kr</S.EmailBox>
          </S.InformationBox>
          <S.ProjectBox>
            <S.Project>{PROJECT}</S.Project>
            <S.CreateBox>
              <img src={Plus} alt='Plus' />
              <S.Crate>{CREATE_PROJECT}</S.Crate>
            </S.CreateBox>
            <S.ProjectList>
              {props.projectList.map(data => {
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
