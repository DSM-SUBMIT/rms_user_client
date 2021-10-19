import { error } from '../../../../../models/error';
import { MemberListType } from '../../../../../constance/viewProject';

interface ViewMyProjectState {
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  techStack: string;
  memberList: Array<MemberListType>;
  fieldList: Array<string>;
  docsUrl: string;
  githubUrl: string;
  error: error | null;
}

export default ViewMyProjectState;
