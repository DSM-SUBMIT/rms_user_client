import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { ModalClose } from '../../../assets';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
}

const DeleteBox: FC<Props> = props => {
  const onClickModifyClose = () => {
    props.setModalOff('');
  };

  const onClickProjectOpen = () => {
    props.setModalOn('projectModify');
  };

  const onClickOtherOpen = () => {
    props.setModalOn('OtherModify');
  };

  return (
    <>
      <S.SmallModalWrapper>
        <S.ModifyBox>
          <img src={ModalClose} onClick={onClickModifyClose} />
          <S.Text>수정하기</S.Text>
          <S.ContentBox>
            <S.ProjectBox>
              <S.ProjectText>프로젝트 수정</S.ProjectText>
              <S.ProjectBtn onClick={onClickProjectOpen}>보러가기</S.ProjectBtn>
            </S.ProjectBox>
            <S.OtherBox>
              <S.OtherText>링크 수정</S.OtherText>
              <S.OtherBtn onClick={onClickOtherOpen}>보러가기</S.OtherBtn>
            </S.OtherBox>
          </S.ContentBox>
        </S.ModifyBox>
      </S.SmallModalWrapper>
    </>
  );
};

export default DeleteBox;