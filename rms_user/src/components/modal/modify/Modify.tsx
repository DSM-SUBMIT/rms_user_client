import React, { FC } from 'react';
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
    alert('현재 개발 중인 기능입니다, 조금만 기다려 주세요.');
  };

  const onClickOtherOpen = () => {
    props.setModalOn('OtherModify');
  };

  return (
    <>
      <S.SmallModalWrapper>
        <S.ModifyBox>
          <img src={ModalClose} onClick={onClickModifyClose} alt='modal close' />
          <S.Text>수정하기</S.Text>
          <S.ContentBox>
            <S.ProjectBox>
              <S.ProjectText>프로젝트 수정</S.ProjectText>
              <S.Btn onClick={onClickProjectOpen}>수정하기</S.Btn>
            </S.ProjectBox>
            <S.OtherBox>
              <S.OtherText>링크 수정</S.OtherText>
              <S.Btn onClick={onClickOtherOpen}>수정하기</S.Btn>
            </S.OtherBox>
          </S.ContentBox>
        </S.ModifyBox>
      </S.SmallModalWrapper>
    </>
  );
};

export default DeleteBox;
