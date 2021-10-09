import { CheckStateType, ProjectListType } from '../../../../../constance/main';
import { error } from '../../../../../models/error';

interface MainState {
  currentPage: number;
  projectList: Array<ProjectListType>;
  totalPages: number;
  error: error | null;
  field: CheckStateType;
  page: number;
  currentProjectId: number;
}

export default MainState;
