import { error } from '../../../../../models/error';

interface HeaderState {
  name: string;
  error: error | null;
}

export default HeaderState;
