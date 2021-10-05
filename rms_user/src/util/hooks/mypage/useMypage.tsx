import { useDispatch } from 'react-redux';
import { CheckStateType } from '../../../constance/mypage';
import { setField } from '../../../modules/redux/action/mypage';
import { useSelectState } from '../default';

const useMypage = () => {
  const dispatch = useDispatch();
  const state = useSelectState().mypage;
  const setState = {
    setField: (payload: CheckStateType) => {
      dispatch(setField(payload));
    },
  };
  return { state, setState };
};

export default useMypage;
