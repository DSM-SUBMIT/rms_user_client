import React, { FC } from "react";
import { MemberType } from "../../../constance/detailPlan";
import * as S from "../style";

const ProjectMember: FC<MemberType>= props => {
  const { name, role } = props;

  return (
    <>
      <S.ThisProjectMemberWrapper>
        <S.ThisProjectMemberName>{name}</S.ThisProjectMemberName>
        <S.ThisprojectMemberRole>{role}</S.ThisprojectMemberRole>
      </S.ThisProjectMemberWrapper>
    </>
  );
};

export default ProjectMember;