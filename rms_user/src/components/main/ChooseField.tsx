import React, { FC, useState } from 'react';
import * as S from './style';
import {
  CHOOSEFIELDTITLE,
  FIELDS,
  CheckStateType,
  FieldMapPropsType,
  DataIdType,
} from '../../constance/main';

interface Props {
  field: CheckStateType;
  setField: (payload: CheckStateType) => void;
}

const ChooseField: FC<Props> = props => {
  const { field, setField } = props;

  const clickBtnHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    const clickField = (dataId as unknown) as DataIdType;
    setField({ ...field, [clickField]: !field[clickField] });
  };

  return (
    <S.ChooseField>
      <S.ChooseFieldTitle>{CHOOSEFIELDTITLE}</S.ChooseFieldTitle>
      {FIELDS.map((props: FieldMapPropsType) => {
        return (
          <S.CheckLine>
            <S.CheckBox onClick={clickBtnHandler} data-id={props.id} isClick={field[props.id]} />
            <p key={props.id}>{props.content}</p>
          </S.CheckLine>
        );
      })}
    </S.ChooseField>
  );
};

export default ChooseField;
