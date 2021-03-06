import { createProjectActionType } from '../../action/porject';
import {
  PROJECTNAME,
  PROJECTTYPE,
  TEACHER,
  TEAMNAME,
  TECHSTACKS,
  FIELDLIST,
  MEMBERLIST,
  ROLE,
  CREATE_PROJECT_FAILURE,
} from '../../action/porject/interface';
import ProjectState from './interface';

const initState: ProjectState = {
  projectName: '',
  projectType: '',
  teacher: '',
  teamName: '',
  techStack: '',
  error: null,
  fieldList: [],
  memberList: [],
};

const projectReducer = (
  state: ProjectState = initState,
  action: createProjectActionType,
): ProjectState => {
  switch (action.type) {
    case PROJECTNAME:
      return {
        ...state,
        projectName: action.payload,
      };
    case PROJECTTYPE:
      return {
        ...state,
        projectType: action.payload,
      };
    case TEACHER:
      return {
        ...state,
        teacher: action.payload,
      };
    case TEAMNAME:
      return {
        ...state,
        teamName: action.payload,
      };
    case TECHSTACKS:
      return {
        ...state,
        techStack: action.payload,
      };
    case FIELDLIST:
      return {
        ...state,
        fieldList: action.payload,
      };
    case ROLE:
      const userIndex = Number(action.payload.id);
      if (state.memberList.length !== 0) {
        const stateMemberList = state.memberList;
        stateMemberList[userIndex] = {
          id: state.memberList[userIndex].id,
          email: state.memberList[userIndex].email,
          name: state.memberList[userIndex].name,
          role: action.payload.role,
        };
        return {
          ...state,
          memberList: stateMemberList,
        };
      } else
        return {
          ...state,
        };
    case MEMBERLIST:
      if (action.payload.role === 'remove')
        return {
          ...state,
          memberList: state.memberList.filter(data => data.id !== action.payload.id),
        };
      else
        return {
          ...state,
          memberList: state.memberList.concat(action.payload),
        };
    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
