import React from 'react';
import * as S from './style';
import { Close } from '../../../assets';

const ProjectCreate = () => {
  return (
    <>
      <S.ProjectCreateBox>
        <S.CloseBox>
          <img src={Close} />
        </S.CloseBox>
        <S.ContentBox>
          <S.TopBox>
            <S.ProjectNameBox placeholder='프로젝트 명을 입력하세요' />
            <S.UploadBut />
          </S.TopBox>
          <S.FieldChoiceBox>
            <S.FieldChoice />
          </S.FieldChoiceBox>
          <S.SelectBox></S.SelectBox>
        </S.ContentBox>
      </S.ProjectCreateBox>
    </>
  );
};

export default ProjectCreate;
