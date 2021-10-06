import React, { useEffect } from 'react';
import * as S from './style';
import { Link, useHistory } from 'react-router-dom';
import { Profile } from '../../assets';
import { UseLogin } from '../../util/hooks/login';
import { REFRESH_TOKEN } from '../../modules/redux/action/login/interface';

const Header = () => {
  const loginState = UseLogin();
  const history = useHistory();

  useEffect(() => {
    if (loginState.state.error?.status === 401 && loginState.state.error.type === REFRESH_TOKEN) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      history.replace('/');
    }
  }, [loginState.state.error]);

  // useEffect(() => {
  //   const errorStatus =
  // }, [])

  /*
  useEffect(() => {
    const errorStatus = userState.state.error.status;
    if (errorStatus === 401 || errorStatus === 403) {
      refreshToken();
    }
  }, [userState.state.error]);
  */

  return (
    <S.HeaderBox>
      <S.HeaderContent>
        <S.MainLogo>
          <Link to={'/'}></Link>
        </S.MainLogo>
        <S.UserBox>
          <Link to={'/mypage'}>
            <img src={Profile} alt='Profile' />
            <S.UserName>기매교</S.UserName>
          </Link>
        </S.UserBox>
      </S.HeaderContent>
    </S.HeaderBox>
  );
};

export default Header;
