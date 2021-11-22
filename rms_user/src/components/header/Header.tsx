import React, { useEffect, useMemo } from 'react';
import * as S from './style';
import { Link, useHistory } from 'react-router-dom';
import { Profile } from '../../assets';
import { UseLogin } from '../../util/hooks/login';
import { REFRESH_TOKEN } from '../../modules/redux/action/login/interface';
import { useDispatch } from 'react-redux';
import { GET_NAME } from '../../modules/redux/action/header/interface';
import { useHeader } from '../../util/hooks/header';
import { LOGO } from '../../constance/login';

const Header = () => {
  const loginState = UseLogin();
  const headerState = useHeader();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_NAME });
  }, []);

  useEffect(() => {
    if (loginState.state.error?.status === 401 && loginState.state.error.type === REFRESH_TOKEN) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      history.replace('/');
    }
  }, [loginState.state.error]);

  useEffect(() => {
    const errorStatus = headerState.state.error?.status;
    if (errorStatus === 401 || errorStatus === 403) {
      loginState.setState.refreshToken(headerState.setState.getName);
    }
  }, [headerState.state.error]);

  const userName = useMemo(() => {
    const { state } = headerState;
    return <S.UserName>{state.name}</S.UserName>;
  }, [headerState.state.name]);

  return (
    <S.HeaderBox>
      <S.HeaderContent>
        <Link to={'/feed'}>
          <S.MainLogo>{LOGO} </S.MainLogo>
        </Link>
        <S.UserBox>
          <Link to={'/mypage'}>
            <img src={Profile} alt='Profile' />
            {userName}
          </Link>
        </S.UserBox>
      </S.HeaderContent>
    </S.HeaderBox>
  );
};

export default Header;
