import { useDispatch } from 'react-redux';
import { setStdNumber } from '../../../modules/redux/action/info';
import { useSelectState } from '../default';

const useInfo = () => {
  const dispatch = useDispatch();
  const state = useSelectState().info;
  const setState = {
    setStdNumber: (payload: number) => {
      dispatch(setStdNumber(payload));
    },
  };
  return { state, setState };
};

export default useInfo;
