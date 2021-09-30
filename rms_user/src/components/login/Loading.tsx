import React, { useEffect } from 'react';
import { setCode } from '../../modules/redux/action/login';

const Loading = () => {
  const url = window.location.search;
  useEffect(() => {
    console.log(1, url);
    console.log(2, url.slice(6));
    setCode(url.slice(6));
  }, [url]);
  return <div>로그인중...</div>;
};

export default Loading;
