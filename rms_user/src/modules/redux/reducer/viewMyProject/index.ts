import { viewProjectActionType } from '../../action/viewProject';
import {
  GET_MY_PROJECT_CONTENTS_SUCCESS,
  GET_MY_PROJECT_CONTENTS_FAILURE,
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
      };

    case GET_MY_PROJECT_CONTENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default viewMyProjectReducer;
