import React, { FC, Suspense } from 'react';
import MyPage from '../../components/mypage';

const MyPageContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <MyPage />
    </Suspense>
  );
};

export default MyPageContainer;
