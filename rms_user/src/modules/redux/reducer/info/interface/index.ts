import { error } from '../../../../../models/error';

interface InfoState {
  stdNumber: number;
  isSuccessSaveNumber: boolean | undefined;
  error: error | null;
}

export default InfoState;
