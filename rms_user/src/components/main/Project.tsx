import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
  classification: string;
  writer: string;
  field: Array<string>;
}

const ProjectList: FC<Props> = ({ title, classification, writer, field }) => {
  return (
    <S.Project>
      <S.ProjectClassification>[{classification}]</S.ProjectClassification>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectWriter>{writer}</S.ProjectWriter>
      <div>
        {field.map((content, i) => {
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
