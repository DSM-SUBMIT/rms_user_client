import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';

const useViewProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().viewProject;
  return { state };
};

export default useViewProject;
