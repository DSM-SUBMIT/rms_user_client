import React from 'react';
import * as S from './style';
import Header from '../header';
import ProjectContent from './projectcontent';
import { PROJECT, CREATE_PROJECT } from '../../constance/mypage';
import { Plus } from '../../assets';

const MyPage = () => {
  return (
    <>
      <Header />
      <S.MyPage>
        <S.Content>
          <S.InformationBox>
            <S.NameBox>기매교</S.NameBox>
            <S.EmailBox>201908khk@dsm.hs.kr</S.EmailBox>
          </S.InformationBox>
          <S.ProjectBox>
            <S.Project>{PROJECT}</S.Project>
            <S.CreateBox>
              <img src={Plus} alt='Plus' />
              <S.Crate>{CREATE_PROJECT}</S.Crate>
            </S.CreateBox>
            <S.ProjectList>
              {Array(4)
                .fill(0)
                .map(content => {
                  return (
                    <ProjectContent
                      classification='팀프로젝트'
                      title='보고서 관리 시스템'
                      writer='서브밋'
                      field={['보안', '웹', '인공지능/빅데이터']}
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
