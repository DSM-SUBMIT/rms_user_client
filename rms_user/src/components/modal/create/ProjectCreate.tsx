import React from 'react';
import * as S from './style';
import { Close } from '../../../assets';

const ProjectCreate = () => {
  return (
    <>
      <S.ProjectCreateBox>
        <S.TopBox>
          <img src={Close} />
          <S.ProjectName />
          <S.UploadButton />
        </S.TopBox>
        {/* 선택 박스 두는 곳 */}
      </S.ProjectCreateBox>
    </>
  );
};

export default ProjectCreate;
