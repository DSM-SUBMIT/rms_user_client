import React, { FC } from 'react';
import * as S from './style';

interface Props {
  projectName: string;
  projectType: string;
  teamName: string;
  fieldList: Array<string>;
}

const ProjectContent: FC<Props> = ({ projectName, projectType, teamName, fieldList }) => {
  return (
    <S.ProjectContent>
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
    </S.ProjectContent>
  );
};

export default ProjectContent;
