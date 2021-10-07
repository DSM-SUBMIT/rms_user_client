import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TOKEN } from '../../modules/redux/action/login/interface';
import UseLogin from '../../util/hooks/login/useLogin';

const LoginLoadingContainer: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const url = window.location.search.slice(6);
  const { state, setState } = UseLogin();
  const saveNumber = localStorage.getItem('save_number');

  useEffect(() => {
    setState.setCode(url);
    dispatch({ type: TOKEN });
  }, [url]);

  useEffect(() => {
    if (state.isSuccessGetToken !== null) {
      if (state.isSuccessGetToken) {
        if (saveNumber === 'true') history.push('/feed');
        else history.push('/info');
      } else {
        history.push('/');
        alert('메일 형식을 확인해주세요. @dsm.hs.kr 형태의 메일만 로그인 가능합니다.');
      }
    }
  }, [state.isSuccessGetToken]);

  return <div>로그인중...</div>;
};

export default LoginLoadingContainer;
