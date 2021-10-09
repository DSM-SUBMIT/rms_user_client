import { useDispatch } from 'react-redux';
import { setId } from '../../../modules/redux/action/detailReport';
import { useSelectState } from '../default';

const UseDetailReoprt = () => {
  const dispatch = useDispatch();
  const state = useSelectState().detailReport;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
  };
  return { state, setState };
};

export default UseDetailReoprt;
