import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TOKEN } from '../../modules/redux/action/login/interface';
import { UseLogin } from '../../util/hooks/login';

const Loading = () => {
  const { state, setState } = UseLogin();
  const dispatch = useDispatch();
  const history = useHistory();
  const url = window.location.search;

  useEffect(() => {
    setState.setCode(url.slice(6));
    dispatch({ type: TOKEN });
    if (state.isSuccessGetToken) history.push('/feed');
    else history.push('/');
  }, [state.isSuccessGetToken]);

  return <div>로그인중...</div>;
};

export default Loading;
