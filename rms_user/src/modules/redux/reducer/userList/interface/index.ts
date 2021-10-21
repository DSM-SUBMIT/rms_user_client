import { error } from '../../../../../models/error';

interface userListState {
  user: Array<{ email: string; name: string; id: number }>;
  error: error | null;
}

export default userListState;
