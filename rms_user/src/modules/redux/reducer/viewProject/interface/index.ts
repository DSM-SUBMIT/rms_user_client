import { error } from '../../../../../models/error';
import { MemberListType } from '../../../../../constance/viewProject';
interface ViewProjectState {
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  techStack: string;
  memberList: Array<MemberListType>;
  fieledList: Array<string>;
  docsUrl: string;
  githubUrl: string;
  error: error | null;
}

export default ViewProjectState;
