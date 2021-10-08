import { headerActionType } from '../../action/header';
import { GET_NAME_SUCCESS, GET_NAME_FAILURE } from '../../action/header/interface';
import HeaderState from './interface';

const initState: HeaderState = {
  name: '',
  error: null,
};

const headerReducer = (state: HeaderState = initState, action: headerActionType): HeaderState => {
  switch (action.type) {
    case GET_NAME_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
      };
    case GET_NAME_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
