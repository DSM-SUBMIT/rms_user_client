import { useSelectState } from '../default';

const useMypage = () => {
  const state = useSelectState().mypage;

  return { state };
};

export default useMypage;
