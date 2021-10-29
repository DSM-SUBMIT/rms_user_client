import { viewProjectActionType } from '../../action/viewProject';
import {
  GET_MY_PROJECT_CONTENTS_SUCCESS,
  GET_MY_PROJECT_CONTENTS_FAILURE,
  GET_PLAN_ACCEPTED_SUCCESS,
  GET_PLAN_ACCEPTED_FAILURE,
  GET_PLAN_SUBMITTED_SUCCESS,
  GET_REPORT_SUBMITTED_FAILURE,
} from '../../action/viewProject/interface';
import ViewMyProjectState from './interface';

const initState: ViewMyProjectState = {
  projectName: '',
  projectType: '',
  serviceUrl: '',
  teamName: '',
  techStack: '',
  memberList: [],
  fieldList: [],
  docsUrl: '',
  githubUrl: '',
  error: null,
  projectId: 1,
  teacher: '',
  // isPlanAccepted: false,
  // isPlanSubmitted: false,
  // isReportAccepted: false,
  // isReportSubmitted: false,
};

const viewMyProjectReducer = (
  state: ViewMyProjectState = initState,
  action: viewProjectActionType,
) => {
  switch (action.type) {
    case GET_MY_PROJECT_CONTENTS_SUCCESS:
      return {
        ...state,
        projectName: action.payload.projectName,
        projectType: action.payload.projectType,
        serviceUrl: action.payload.serviceUrl,
        teamName: action.payload.teamName,
        techStack: action.payload.techStack,
        memberList: action.payload.memberList,
        fieldList: action.payload.fieldList,
        docsUrl: action.payload.docsUrl,
        githubUrl: action.payload.githubUrl,
        projectId: action.payload.id,
        teacher: action.payload.teacher,
      };

    default:
      return state;
  }
};

export default viewMyProjectReducer;
