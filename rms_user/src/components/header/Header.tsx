import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { Profile } from '../../assets';

const Header = () => {
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
