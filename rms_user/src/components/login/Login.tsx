import React from 'react';
import * as S from './style';
import { LOGO, LOGIN_EXPLAIN, LOGIN_WITH_SCHOOL_EMAIL, LOGIN } from '../../constance/login';

const Login = () => {
  const Oauthurl = 'https://user-api.dsm-rms.com/auth/login';
  const loginBtnClickHandler = () => {
    window.location.href = Oauthurl;
  };

  return (
    <S.Login>
      <S.LoginModal>
        <S.Logo>{LOGO}</S.Logo>
        <S.Explain>{LOGIN_EXPLAIN}</S.Explain>
        <S.SchoolEmailLogin>{LOGIN_WITH_SCHOOL_EMAIL}</S.SchoolEmailLogin>
        <S.LoginBtn onClick={loginBtnClickHandler}>
          <p>{LOGIN}</p>
        </S.LoginBtn>
      </S.LoginModal>
    </S.Login>
  );
};

export default Login;
