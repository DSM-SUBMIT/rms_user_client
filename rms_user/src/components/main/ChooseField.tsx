import React, { useState } from 'react';
import * as S from './style';
import {
  CHOOSEFIELDTITLE,
  FIELDS,
  CheckStateType,
  FieldMapPropsType,
  DataIdType,
} from '../../constance/main';

const ChooseField = () => {
  const [isClick, setIsClick] = useState<CheckStateType>({
    web: false,
    app: false,
    game: false,
    embedded: false,
    security: false,
    aiAndBigData: false,
  });

  const clickBtnHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    const clickField = (dataId as unknown) as DataIdType;
    setIsClick({ ...isClick, [clickField]: !isClick[clickField] });
  };

  return (
    <S.ChooseField>
      <S.ChooseFieldTitle>{CHOOSEFIELDTITLE}</S.ChooseFieldTitle>
      {FIELDS.map((props: FieldMapPropsType) => {
        return (
          <S.CheckLine>
            <S.CheckBox onClick={clickBtnHandler} data-id={props.id} isClick={isClick[props.id]} />
            <p key={props.id}>{props.content}</p>
          </S.CheckLine>
        );
      })}
    </S.ChooseField>
  );
};

export default ChooseField;
