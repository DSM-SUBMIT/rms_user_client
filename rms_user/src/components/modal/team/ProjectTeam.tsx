import React from 'react';
import * as S from './style';
import { Search } from '../../../assets';

const ProjectTeam = () => {
  return (
    <>
      <S.ModalWrapper>
        <S.ProjectTeam>
          <S.Input>
            <S.NameInput placeholder='이름을 입력하세요' />
            <img src={Search} alt='Search' />
          </S.Input>
          <S.UserList>
            <S.UserBox>
              <S.CheckBox />
              <S.Name>이름</S.Name>
              <S.Email>yyuunn17@dsm.hs.kr</S.Email>
            </S.UserBox>
            <S.UserBox>
              <S.CheckBox />
              <S.Name>이름</S.Name>
              <S.Email>yyuunn17@dsm.hs.kr</S.Email>
            </S.UserBox>
          </S.UserList>
        </S.ProjectTeam>
      </S.ModalWrapper>
    </>
  );
};

export default ProjectTeam;
