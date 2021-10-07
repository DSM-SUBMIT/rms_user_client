import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { refreshToken, setCode } from '../../../modules/redux/action/login';

const UseLogin = () => {
  const dispatch = useDispatch();
  const state = useSelectState().login;
  const setState = {
    setCode: (payload: string) => dispatch(setCode(payload)),
    refreshToken: (callback: () => void) => {
      dispatch(refreshToken({ callback }));
    },
  };
  return {
    state,
    setState,
  };
};

export default UseLogin;
