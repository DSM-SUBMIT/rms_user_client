import { loginActionType } from '../../action/login';
import { CODE, TOKEN_FAILURE } from '../../action/login/interface';
import LoginState from './interface';

const initState: LoginState = {
  code: '',
  error: null,
};

const gradeReducer = (state: LoginState = initState, action: loginActionType) => {
  switch (action.type) {
    case CODE:
      return {
        ...state,
        code: action.payload,
      };
    case TOKEN_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default gradeReducer;
