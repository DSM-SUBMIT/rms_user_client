import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setId } from '../../../modules/redux/action/viewProject';

const useViewProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().viewProject;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
  };
  return { state, setState };
};

export default useViewProject;
