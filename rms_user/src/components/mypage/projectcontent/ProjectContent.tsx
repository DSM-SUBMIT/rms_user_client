import React, { FC } from 'react';
import * as S from './style';
interface Props {
  id: number;
  projectName: string;
  projectType: string;
  teamName: string;
  fieldList: Array<string>;
  setCurrentProjectId: (payload: number) => void;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectContent: FC<Props> = ({
  setIsOpenModal,
  setCurrentProjectId,
  projectName,
  projectType,
  teamName,
  fieldList,
  id,
}) => {
  const myProjectClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentProjectId(Number(event.currentTarget.dataset.id));
    setIsOpenModal(true);
  };

  return (
    <S.ProjectContent onClick={myProjectClickHandler} data-id={id}>
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
