import { useSelectState } from '../default';

const useViewMyProject = () => {
  const state = useSelectState().viewMyProject;
  return { state };
};

export default useViewMyProject;
