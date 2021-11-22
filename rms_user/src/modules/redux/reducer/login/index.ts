import { loginActionType } from '../../action/login';
import {
  CODE,
  REFRESH_TOKEN_FAILURE,
  TOKEN,
  TOKEN_FAILURE,
  TOKEN_SUCCESS,
} from '../../action/login/interface';
import LoginState from './interface';

const initState: LoginState = {
  code: '',
  isSuccessGetToken: null,
  name: '',
  error: null,
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
        isSuccessGetToken: null,
      };
    case TOKEN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        isSuccessGetToken: true,
      };
    case TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetToken: false,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
