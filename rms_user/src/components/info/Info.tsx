import React from 'react';
import * as S from './style';
import { EXPLAIN, TITLE, INPUT, INFOBTN } from '../../constance/info';

const Info = () => {
  return (
    <S.Info>
      <S.InfoModal>
        <S.Title>{TITLE}</S.Title>
        <S.Explain>{EXPLAIN}</S.Explain>
        <S.InputLine>
          {INPUT.map(data => {
            return (
              <div>
                <S.Input name={data.id} />
                <p>{data.text}</p>
              </div>
            );
          })}
        </S.InputLine>
        <S.InfoBtn>
          <p>{INFOBTN}</p>
        </S.InfoBtn>
      </S.InfoModal>
    </S.Info>
  );
};

export default Info;
