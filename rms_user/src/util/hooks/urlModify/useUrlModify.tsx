import { useDispatch } from 'react-redux';
import { setDocsUrl, setGithubUrl, setServiceUrl } from '../../../modules/redux/action/porject';
import { useSelectState } from '../default';

const useUrlModify = () => {
  const dispatch = useDispatch();
  const state = useSelectState().urlModify;
  const setState = {
    setDocsUrl: (payload: string) => {
      dispatch(setDocsUrl(payload));
    },
    setGithubUrl: (payload: string) => {
      dispatch(setGithubUrl(payload));
    },
    setServiceUrl: (payload: string) => {
      dispatch(setServiceUrl(payload));
    },
  };
  return { state, setState };
};

export default useUrlModify;
