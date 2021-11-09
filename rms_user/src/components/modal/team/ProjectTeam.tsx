import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { Search } from '../../../assets';
import { useDispatch } from 'react-redux';
import { USERSLIST } from '../../../modules/redux/action/porject/interface';
import { MemberListType } from '../../../constance/project';

interface Props {
  memberList: Array<MemberListType>;
  setIsOpenTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMemberList: (payload: MemberListType) => void;
  user: Array<{ email: string; id: number; name: string; checked?: boolean }>;
}

const ProjectTeam: FC<Props> = props => {
  const { user, setMemberList, memberList, setIsOpenTeamModal } = props;
  const dispatch = useDispatch();

  const onClickProjectTeamClose = () => {
    setIsOpenTeamModal(false);
  };

  useEffect(() => {
    dispatch({ type: USERSLIST });
  }, []);

  const test = user.map(i => {
    const temp = memberList.filter(item => item.email === i.email);
    return temp.length > 0 ? { ...i, checked: true } : { ...i, checked: false };
  });

  const onClickBox = (e: React.FormEvent<HTMLInputElement>) => {
    const dataId = Number(e.currentTarget.dataset.id);
    const dataName = e.currentTarget.dataset.name as string;
    const dataEmail = e.currentTarget.dataset.email as string;
    const isClick = e.currentTarget.checked;
    if (isClick) {
      setMemberList({
        email: dataEmail,
        name: dataName,
        id: dataId,
        role: '',
      });
    } else {
      setMemberList({ email: dataEmail, name: dataName, id: dataId, role: 'remove' });
    }
  };
  return (
    <>
      <S.SmallModalWrapper>
        <S.ProjectTeam>
          <S.Input>
            <S.NameInput placeholder='이름을 입력하세요' />
            <img src={Search} alt='Search' />
          </S.Input>
          <S.UserList>
            {test &&
              test.map((data, index: number) => {
                return (
                  <S.UserBox>
                    <S.CheckBox
                      type='checkbox'
                      data-id={data.id}
                      data-name={data.name}
                      defaultChecked={data.checked}
                      data-email={data.email}
                      key={index}
                      onClick={onClickBox}
                    />
                    <S.Name>{data.name}</S.Name>
                    <S.Email>{data.email}</S.Email>
                  </S.UserBox>
                );
              })}
          </S.UserList>
          <S.MemberBtn onClick={onClickProjectTeamClose}>멤버 선택</S.MemberBtn>
        </S.ProjectTeam>
      </S.SmallModalWrapper>
    </>
  );
};

export default ProjectTeam;
