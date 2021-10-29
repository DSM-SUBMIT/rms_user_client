import React, { FC, useState } from 'react';
import * as S from './style';
import { FieldListSelect } from '../../../constance/project';

interface Props {
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setFieldList: (payload: string[]) => void;
  fieldList: string[];
}

const FieldBox: FC<Props> = props => {
  const { setFieldList, fieldList } = props;

  const onClickBox = (e: any, content: string) => {
    const dataId = e.currentTarget.dataset.id;
    const isClick = e.currentTarget.checked;
    if ((fieldList.length = 0)) {
      fieldList.filter((conten, i) => conten !== undefined);
    }
    if (isClick) setFieldList(fieldList.concat(dataId));
    else setFieldList(fieldList.filter((item: string) => content !== item));
  };

  return (
    <>
      <S.FieldBox>
        {FieldListSelect.map((item, index) => (
          <S.SelectBox>
            <S.CheckBox
              type='checkbox'
              data-id={item.id}
              key={index}
              onClick={e => onClickBox(e, item.content)}
            />
            <S.FieldName>{item.content}</S.FieldName>
          </S.SelectBox>
        ))}
      </S.FieldBox>
    </>
  );
};

export default FieldBox;
