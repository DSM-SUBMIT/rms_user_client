import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from '../../components/modal/view';
import { GET_MY_PROJECT_CONTENTS } from '../../modules/redux/action/viewProject/interface';
import useMypage from '../../util/hooks/mypage';
import useViewProject from '../../util/hooks/viewProject';

const MyProjectViewContainer: FC = () => {
  const { state } = useViewProject();
  const myPageState = useMypage().state;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(myPageState.currentProjectId);

    dispatch({ type: GET_MY_PROJECT_CONTENTS });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <View {...state} projectId={myPageState.currentProjectId} />
    </Suspense>
  );
};

export default MyProjectViewContainer;
