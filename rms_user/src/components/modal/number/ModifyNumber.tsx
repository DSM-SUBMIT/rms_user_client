import React, { FC } from 'react';
import * as S from './style';
import { TITLE } from '../../../constance/info';
import useInfo from '../../../util/hooks/info';
import { useDispatch } from 'react-redux';
import { NUMBER } from '../../../modules/redux/action/info/interface';
import { ModalClose } from '../../../assets';
interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
}

const ModifyNumber: FC<Props> = props => {
  const { setState } = useInfo();
  const dispatch = useDispatch();

  const inputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState.setStdNumber(Number(event.currentTarget.value));
  };

  const modifyBtnClickr = () => {
    dispatch({ type: NUMBER });
    window.location.replace('/mypage');
  };

  const onClickNumberClose = () => {
    props.setModalOff('');
  };

  return (
    <S.ModalWrapper>
      <S.Box>
        <img src={ModalClose} onClick={onClickNumberClose} />
        <S.Title>{TITLE}</S.Title>
        <S.Input placeholder='학번을 입력하세요' onChange={inputValueChange} />
        <S.Modify onClick={modifyBtnClickr}>수정</S.Modify>
      </S.Box>
    </S.ModalWrapper>
  );
};

export default ModifyNumber;
