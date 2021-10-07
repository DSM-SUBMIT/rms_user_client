import { useDispatch } from 'react-redux';
import { getName } from '../../../modules/redux/action/header';
import { useSelectState } from '../default';

const useHeader = () => {
  const dispatch = useDispatch();
  const state = useSelectState().header;
  const setState = {
    getName: () => {
      dispatch(getName());
    },
  };
  return { state, setState };
};

export default useHeader;
