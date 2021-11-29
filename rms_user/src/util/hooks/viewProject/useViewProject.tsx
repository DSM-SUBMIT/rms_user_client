import { useSelectState } from '../default';

const useViewProject = () => {
  const state = useSelectState().viewProject;
  return { state };
};

export default useViewProject;
