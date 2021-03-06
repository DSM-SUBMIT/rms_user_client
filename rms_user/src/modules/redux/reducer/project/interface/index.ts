import { error } from '../../../../../models/error';
import { MemberListType } from '../../../../../constance/project';
interface ProjectState {
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStack: string;
  error: error | null;
  fieldList: string[];
  memberList: MemberListType[];
}

export default ProjectState;
