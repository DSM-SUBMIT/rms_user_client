import { error } from '../../../../../models/error';

interface userListState {
  email: string;
  name: string;
  id: number;
  error: error | null;
}

export default userListState;
