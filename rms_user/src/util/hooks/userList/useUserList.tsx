import { useSelectState } from '../default';

const useUserList = () => {
  const state = useSelectState().userList;
  return { state };
};

export default useUserList;
