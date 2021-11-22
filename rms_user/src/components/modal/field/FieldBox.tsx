import React, { FC } from 'react';
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
    setFieldList(fieldList.concat(content));
    if (fieldList.includes(content)) {
      setFieldList(fieldList.filter((item: string) => content !== item));
    }
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
              onClick={e => onClickBox(e, item.id)}
            />
            <S.FieldName>{item.content}</S.FieldName>
          </S.SelectBox>
        ))}
      </S.FieldBox>
    </>
  );
};

export default FieldBox;
