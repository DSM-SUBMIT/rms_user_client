import React, { FC } from 'react';
import * as S from './style';
import { Box } from '../../../assets';
import { setModalOff } from '../../../modules/redux/action/modal';
import { NUMBER } from '../../../modules/redux/action/info/interface';
import { useDispatch } from 'react-redux';
interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  type: string;
}

const ModifyNumber: FC<Props> = props => {
  const closeBoxClickHandler = () => {
    props.setModalOff('');
  };

  return (
    <S.Box src={Box}>
      <S.Input placeholder='학번' />
      <S.Modify onClick={closeBoxClickHandler}>수정</S.Modify>
    </S.Box>
  );
};

export default ModifyNumber;
