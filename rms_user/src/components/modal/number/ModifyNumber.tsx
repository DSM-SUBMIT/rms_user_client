import React, { FC } from 'react';
import * as S from './style';
import useInfo from '../../../util/hooks/info';
import { useDispatch } from 'react-redux';
import { NUMBER } from '../../../modules/redux/action/info/interface';
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

  return (
    <S.Box>
      <S.Input placeholder='학번' onChange={inputValueChange} />
      <S.Modify onClick={modifyBtnClickr}>수정</S.Modify>
    </S.Box>
  );
};

export default ModifyNumber;
