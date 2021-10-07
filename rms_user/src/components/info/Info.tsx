import React, { FC, useEffect } from 'react';
import * as S from './style';
import { EXPLAIN, TITLE, INFOBTN, ERRORCOMMENT } from '../../constance/info';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NUMBER } from '../../modules/redux/action/info/interface';

interface Props {
  isSuccessSaveNumber: boolean | undefined;
  setStdNumber: (payload: number) => void;
}

const Info: FC<Props> = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccessSaveNumber, setStdNumber } = props;

  useEffect(() => {
    if (isSuccessSaveNumber) {
      history.push('/feed');
      localStorage.setItem('save_number', 'true');
    }
  }, [isSuccessSaveNumber]);

  const inputValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStdNumber(Number(event.currentTarget.value));
  };

  const infoBtnClickHandler = () => {
    dispatch({ type: NUMBER });
  };

  return (
    <S.Info>
      <S.InfoModal>
        <S.Title>{TITLE}</S.Title>
        <S.Explain>{EXPLAIN}</S.Explain>
        <S.InputLine>
          <S.Input name={'stdNumber'} placeholder={'ex) 1101'} onChange={inputValueChangeHandler} />
          {isSuccessSaveNumber && <S.ErrorComment>{ERRORCOMMENT}</S.ErrorComment>}
        </S.InputLine>
        <S.InfoBtn onClick={infoBtnClickHandler}>
          <p>{INFOBTN}</p>
        </S.InfoBtn>
      </S.InfoModal>
    </S.Info>
  );
};

export default Info;
