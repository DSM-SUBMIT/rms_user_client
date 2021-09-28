import { useDispatch } from 'react-redux';
import { CheckStateType } from '../../../constance/main';
import { setField, setPage } from '../../../modules/redux/action/main';
import useSelectState from '../default';

const useMain = () => {
  const dispatch = useDispatch();
  const state = useSelectState().main;
  const setState = {
    setField: (payload: CheckStateType) => {
      dispatch(setField(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };
  return { state, setState };
};

export default useMain;
