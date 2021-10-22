import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { Search } from '../../../assets';
import { useDispatch } from 'react-redux';
import { USERSLIST } from '../../../modules/redux/action/porject/interface';
import { MemberListType } from '../../../constance/project';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  setMemberList: (payload: MemberListType) => void;
  user: Array<{ email: string; id: number; name: string }>;
}

const ProjectTeam: FC<Props> = props => {
  const { setModalOn, user, setMemberList } = props;
  // const [isClickBtn, setIsClickBtn] = useState(false);
  const dispatch = useDispatch();

  const onClickProjectTeamClose = () => {
    setModalOn('projectCreate');
  };

  useEffect(() => {
    dispatch({ type: USERSLIST });
  }, []);

  const onClickBox = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dataId = Number(e.currentTarget.dataset.id);
    const dataName = e.currentTarget.dataset.name as string;
    const dataEmail = e.currentTarget.dataset.email as string;
    const isClick = e.currentTarget.click;
    console.log(isClick);
    // setIsClickBtn(!isClickBtn);
    //if (isClick === 'true')
    //  setMemberList({
    //  email: dataEmail,
    // name: dataName,
    //id: dataId,
    //  role: '',
    //  });
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
            {user &&
              user.map((data, index: number) => {
                return (
                  <S.UserBox>
                    <S.CheckBox
                      type='checkbox'
                      data-id={data.id}
                      data-name={data.name}
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
