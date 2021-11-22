import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setModalOn, setModalOff } from '../../../modules/redux/action/modal';

const useModal = () => {
  const dispatch = useDispatch();
  const state = useSelectState().modal;
  const setState = {
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    },
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useModal;
