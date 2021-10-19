import { useSelectState } from '../default';
import { useDispatch } from 'react-redux';
import { setModalOff, setModalOn, setType } from '../../../modules/redux/action/modal';

const useMypage = () => {
  const state = useSelectState().mypage;
  const dispatch = useDispatch();
  const setState = {
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    },
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
  };
  return { state, setState };
};

export default useMypage;
