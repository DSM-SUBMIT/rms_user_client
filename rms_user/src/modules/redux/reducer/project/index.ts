import { createProjectActionType } from '../../action/porject';
import {
  PROJECTNAME,
  PROJECTTYPE,
  TEACHER,
  TEAMNAME,
  TECHSTACKS,
  FIELDLIST,
  MEMBERLIST,
} from '../../action/porject/interface';
import ProjectState from './interface';

const initState: ProjectState = {
  projectName: '',
  projectType: '',
  teacher: '',
  teamName: '',
  techStacks: '',
  error: null,
  fieldList: [''],
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
        techStacks: action.payload,
      };
    // case FIELDLIST:
    //   return {
    //     ...state,
    //     fieldList: action.tpye,
    //   };
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
    default:
      return state;
  }
};

export default projectReducer;
