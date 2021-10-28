import { useSelectState } from '../default';

const useProjectDelete = () => {
  const state = useSelectState().delete;
  return { state };
};

export default useProjectDelete;
