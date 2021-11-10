import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from '../../components/modal/view/myProjectView';
import { GET_MY_PROJECT_CONTENTS } from '../../modules/redux/action/viewProject/interface';
import useMypage from '../../util/hooks/mypage';
import useViewMyProject from '../../util/hooks/viewMyProject';

const MyProjectViewContainer: FC = () => {
  const { state } = useViewMyProject();
  const myPageState = useMypage().state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MY_PROJECT_CONTENTS });
  }, [GET_MY_PROJECT_CONTENTS]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <View {...state} projectId={myPageState.currentProjectId} />
    </Suspense>
  );
};

export default MyProjectViewContainer;
