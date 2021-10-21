import React, { FC, useEffect } from 'react';
import * as S from './style';
import { Search } from '../../../assets';
import userListState from '../../../modules/redux/reducer/userList/interface';
import { useDispatch } from 'react-redux';
import { USERSLIST } from '../../../modules/redux/action/porject/interface';
import useUserList from '../../../util/hooks/userList';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  userList: Array<userListState>;
}

const ProjectTeam: FC<Props> = props => {
  const { setModalOn, userList } = props;
  const dispatch = useDispatch();

  const onClickProjectTeamClose = () => {
    setModalOn('projectCreate');
  };

  useEffect(() => {
    dispatch({ type: USERSLIST });
  }, [USERSLIST]);

  return (
    <>
      <S.SmallModalWrapper>
        <S.ProjectTeam>
          <S.Input>
            <S.NameInput placeholder='이름을 입력하세요' />
            <img src={Search} alt='Search' />
          </S.Input>
          <S.UserList>
            {userList &&
              userList.map((data: userListState, index: number) => {
                return (
                  <S.UserBox key={index}>
                    <S.CheckBox data-id={data.id} />
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
