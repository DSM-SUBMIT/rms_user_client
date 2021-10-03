import { error } from '../../../../../models/error';

interface LoginState {
  code: string;
  error: error | null;
  isSuccessGetToken: boolean | undefined;
}

export default LoginState;
