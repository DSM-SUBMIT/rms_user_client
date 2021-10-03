import { loginActionType } from '../../action/login';
import { CODE, TOKEN, TOKEN_FAILURE, TOKEN_SUCCESS } from '../../action/login/interface';
import LoginState from './interface';

const initState: LoginState = {
  code: '',
  error: null,
  isSuccessGetToken: undefined,
};

const loginReducer = (state: LoginState = initState, action: loginActionType): LoginState => {
  switch (action.type) {
    case CODE:
      return {
        ...state,
        code: action.payload,
      };
    case TOKEN:
      return {
        ...state,
        isSuccessGetToken: undefined,
      };
    case TOKEN_SUCCESS:
      return {
        ...state,
        isSuccessGetToken: true,
      };
    case TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetToken: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
