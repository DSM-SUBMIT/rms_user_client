import { ProjectListType } from '../../../../../constance/mypage';
import { error } from '../../../../../models/error';

interface MypageState {
  email: string;
  name: string;
  projectList: Array<ProjectListType>;
  studentNumber: number;
  error: error | null;
  currentProjectId: number;
}

export default MypageState;
