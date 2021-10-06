import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyPage from '../../components/mypage';
import { GET_MYPAGE_FEED } from '../../modules/redux/action/mypage/interface';
import useMypage from '../../util/hooks/mypage';

const MyPageContainer: FC = () => {
  const { state } = useMypage();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_MYPAGE_FEED });
  }, []);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <MyPage {...state} />
    </Suspense>
  );
};

export default MyPageContainer;
