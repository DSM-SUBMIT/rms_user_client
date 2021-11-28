import React, { FC } from 'react';
import * as S from './style';
import { ModalClose } from '../../../assets';
import { useDispatch } from 'react-redux';
import { DELETE_PROJECT } from '../../../modules/redux/action/porject/interface';
import { error } from '../../../models/error';

interface Props {
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  error: error | null;
}

const DeleteBox: FC<Props> = props => {
  const dispatch = useDispatch();

  const onClickDeleteClose = () => {
    props.setIsOpenDeleteModal(false);
  };

  const onClickDeleteBtn = () => {
    dispatch({ type: DELETE_PROJECT });
    if (props.error?.status === 401) {
      alert('로그인 후 이용해 주세요.');
      window.location.replace('/');
    } else if (props.error?.status === 403) {
      alert('권한이 없습니다.');
    } else window.location.replace('/mypage');
  };

  return (
    <>
      <S.SmallModalWrapper>
        <S.DeleteBox>
          <img src={ModalClose} onClick={onClickDeleteClose} alt='modal close' />
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
