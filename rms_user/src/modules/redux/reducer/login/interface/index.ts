import { error } from '../../../../../models/error';

interface LoginState {
  code: string;
  isSuccessGetToken: boolean | null;
  error: error | null;
}

export default LoginState;
