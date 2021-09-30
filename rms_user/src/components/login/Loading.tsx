import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN } from '../../modules/redux/action/login/interface';
import { UseLogin } from '../../util/hooks/login';

const Loading = () => {
  const { setState } = UseLogin();
  const dispatch = useDispatch();
  const url = window.location.search;
  useEffect(() => {
    setState.setCode(url.slice(6));
    dispatch({ type: TOKEN });
  }, [url]);
  return <div>로그인중...</div>;
};

export default Loading;
