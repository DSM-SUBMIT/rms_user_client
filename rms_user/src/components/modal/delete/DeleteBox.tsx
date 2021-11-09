import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { ModalClose } from '../../../assets';
import { useDispatch } from 'react-redux';
import { DELETE_PROJECT } from '../../../modules/redux/action/porject/interface';

interface Props {
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteBox: FC<Props> = props => {
  const dispatch = useDispatch();

  const onClickDeleteClose = () => {
    props.setIsOpenDeleteModal(false);
  };

  const onClickDeleteBtn = () => {
    dispatch({ type: DELETE_PROJECT });
    window.location.replace('/mypage');
  };

  return (
    <>
      <S.SmallModalWrapper>
        <S.DeleteBox>
          <img src={ModalClose} onClick={onClickDeleteClose} />
          <S.Content>
            <S.Text>프로젝트를 삭제하시겠습니까?</S.Text>
            <S.DeleteBtn onClick={onClickDeleteBtn}>삭제하기</S.DeleteBtn>
          </S.Content>
        </S.DeleteBox>
      </S.SmallModalWrapper>
    </>
  );
};

export default DeleteBox;
