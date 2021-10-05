import { mainActionType } from '../../action/main';
import {
  GET_MAIN_FEED_SUCCESS,
  GET_MAIN_FEED_FAILURE,
  FIELD,
  PAGE,
  CURRENTPROJECTID,
} from '../../action/main/interface';
import MainState from './interface';

const initState: MainState = {
  currentPage: 1,
  projectList: [],
  totalPages: 1,
  error: null,
  field: {
    web: false,
    app: false,
    game: false,
    embedded: false,
    security: false,
    aiAndBigData: false,
  },
  page: 1,
  currentProjectId: 1,
};

const mainReducer = (state: MainState = initState, action: mainActionType) => {
  switch (action.type) {
    case GET_MAIN_FEED_SUCCESS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        projectList: action.payload.projectList,
        totalPages: action.payload.totalPages,
      };
    case GET_MAIN_FEED_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FIELD:
      return {
        ...state,
        field: {
          web: action.payload.web,
          app: action.payload.app,
          game: action.payload.game,
          embedded: action.payload.embedded,
          security: action.payload.security,
          aiAndBigData: action.payload.aiAndBigData,
        },
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CURRENTPROJECTID:
      return {
        ...state,
        currentProjectId: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
