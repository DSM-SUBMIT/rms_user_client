import { error } from '../../../../../models/error';

interface LoginState {
  code: string;
  error: error | null;
}

export default LoginState;
