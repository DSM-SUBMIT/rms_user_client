import { infoActionType } from '../../action/info';
import { STDNUMBER, NUMBER, NUMBER_SUCCESS, NUMBER_FAILURE } from '../../action/info/interface';
import InfoState from './interface';

const initState: InfoState = {
  stdNumber: 1,
  isSuccessSaveNumber: undefined,
  error: null,
};

const infoReducer = (state: InfoState = initState, action: infoActionType): InfoState => {
  switch (action.type) {
    case STDNUMBER:
      return {
        ...state,
        stdNumber: action.payload,
      };
    case NUMBER:
      return {
        ...state,
        isSuccessSaveNumber: undefined,
      };
    case NUMBER_SUCCESS:
      return {
        ...state,
        isSuccessSaveNumber: true,
      };
    case NUMBER_FAILURE:
      return {
        ...state,
        isSuccessSaveNumber: false,
      };
    default:
      return state;
  }
};

export default infoReducer;
