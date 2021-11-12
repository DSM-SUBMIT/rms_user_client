import { createProjectActionType } from '../../action/porject';
import { DOCSURL, GITHUB, SERVICEURL } from '../../action/porject/interface';
import urlModifyState from './interface';

const initState: urlModifyState = {
  docsUrl: '',
  githubUrl: '',
  serviceUrl: '',
};

const urlModifyReducer = (
  state: urlModifyState = initState,
  action: createProjectActionType,
): urlModifyState => {
  switch (action.type) {
    case DOCSURL:
      return {
        ...state,
        docsUrl: action.payload,
      };
    case GITHUB:
      return {
        ...state,
        githubUrl: action.payload,
      };
    case SERVICEURL:
      return {
        ...state,
        serviceUrl: action.payload,
      };
    default:
      return state;
  }
};

export default urlModifyReducer;
