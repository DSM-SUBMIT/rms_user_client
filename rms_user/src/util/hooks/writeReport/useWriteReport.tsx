import { useDispatch } from 'react-redux';
import { setContent, setVideoUrl, getProjectId } from '../../../modules/redux/action/writeReport';
import { useSelectState } from '../default';

const useWriteReport = () => {
  const dispatch = useDispatch();
  const state = useSelectState().writeReport;
  const setState = {
    setContent: (payload: string[]) => {
      dispatch(setContent(payload));
    },
    setVideoUrl: (payload: string) => {
      dispatch(setVideoUrl(payload));
    },
    setProjectId: (payload: string) => {
      dispatch(getProjectId(payload));
    },
  };
  return { state, setState };
};

export default useWriteReport;
