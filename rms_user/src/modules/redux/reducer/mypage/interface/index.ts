import { ProjectListType } from '../../../../../constance/mypage';
import { error } from '../../../../../models/error';

interface MypageState {
  email: string;
  name: string;
  projectList: Array<ProjectListType>;
  error: error | null;
}

export default MypageState;
