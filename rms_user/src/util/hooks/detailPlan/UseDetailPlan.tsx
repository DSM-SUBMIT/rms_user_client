import { useDispatch } from 'react-redux';
import { setId } from '../../../modules/redux/action/detailPlan';
import { useSelectState } from '../default';

const UseDetailPlan = () => {
  const dispatch = useDispatch();
  const state = useSelectState().detailPlan;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
  };
  return { state, setState };
};

export default UseDetailPlan;