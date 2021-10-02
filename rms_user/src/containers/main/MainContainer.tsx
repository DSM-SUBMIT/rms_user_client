import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from '../../components/main';
import { GET_MAIN_FEED } from '../../modules/redux/action/main/interface';
import useMain from '../../util/hooks/main';

const MainContainer: FC = () => {
  const { state, setState } = useMain();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MAIN_FEED });
  }, [state.field]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main {...state} {...setState} />
    </Suspense>
  );
};

export default MainContainer;
