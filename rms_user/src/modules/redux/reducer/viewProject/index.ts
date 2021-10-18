import { viewProjectActionType } from '../../action/viewProject';
import {
  GET_PROJECT_CONTENTS_SUCCESS,
  GET_PROJECT_CONTENTS_FAILURE,
} from '../../action/viewProject/interface';
import ViewProjectState from './interface';

const initState: ViewProjectState = {
  projectName: '',
  projectType: '',
  serviceUrl: '',
  teamName: '',
  techStack: '',
  memberList: [],
  fieledList: [],
  docsUrl: '',
  githubUrl: '',
  error: null,
};

const viewProjectReducer = (state: ViewProjectState = initState, action: viewProjectActionType) => {
  switch (action.type) {
    case GET_PROJECT_CONTENTS_SUCCESS:
      return {
        ...state,
        projectName: action.payload.projectName,
        projectType: action.payload.projectType,
        serviceUrl: action.payload.serviceUrl,
        teamName: action.payload.teamName,
        techStack: action.payload.techStack,
        memberList: action.payload.memberList,
        fileList: action.payload.fileList,
        docsUrl: action.payload.docsUrl,
        githubUrl: action.payload.githubUrl,
      };

    case GET_PROJECT_CONTENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default viewProjectReducer;
