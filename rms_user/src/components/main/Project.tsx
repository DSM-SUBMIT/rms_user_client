import React, { FC } from 'react';
import * as S from './style';

interface Props {
  projectName: string;
  projectType: string;
  teamName: string;
  fieldList: Array<string>;
}

const ProjectList: FC<Props> = ({ projectName, projectType, teamName, fieldList }) => {
  return (
    <S.Project>
      <S.ProjectClassification>[{projectType}]</S.ProjectClassification>
      <S.ProjectTitle>{projectName}</S.ProjectTitle>
      <S.ProjectWriter>{teamName}</S.ProjectWriter>
      <div>
        {fieldList.map((content, i) => {
          return (
            <S.ProjectField key={i}>
              <p>{content}</p>
            </S.ProjectField>
          );
        })}
      </div>
    </S.Project>
  );
};

export default ProjectList;
