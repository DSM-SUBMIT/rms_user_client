import React, { useState } from 'react';
import * as S from './style';
import { CHOOSEFIELDTITLE, FIELDS, CheckState } from '../../constance/main';

const ChooseField = () => {
  //   const [isClick, setIsClick] = useState<CheckState>({
  //     web: false,
  //     app: false,
  //     game: false,
  //     embedded: false,
  //     security: false,
  //     aiAndBigData: false,
  //   });

  const clickBtnHandler = (e: any) => {
    const dataId = e.target.dataset.id;
    // setIsClick({ ...isClick, [dataId]: !isClick[dataId]});
  };

  return (
    <S.ChooseField>
      <S.ChooseFieldTitle>{CHOOSEFIELDTITLE}</S.ChooseFieldTitle>
      {FIELDS.map(props => {
        return (
          <S.CheckLine>
            <S.CheckBox onClick={clickBtnHandler} data-id={props.id} isClick={false} />
            <p key={props.id}>{props.content}</p>
          </S.CheckLine>
        );
      })}
    </S.ChooseField>
  );
};

export default ChooseField;
