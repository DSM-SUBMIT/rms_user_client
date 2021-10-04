import React, { FC } from "react";
import * as S from "../style";

const ProjectMember: FC = () => {
  return (
    <>
      <S.ThisProjectMemberWrapper>
        <S.ThisProjectMemberName>김지민</S.ThisProjectMemberName>
        <S.ThisprojectMemberRole>프론트앤드, 비쥬얼</S.ThisprojectMemberRole>
      </S.ThisProjectMemberWrapper>
    </>
  );
};

export default ProjectMember;