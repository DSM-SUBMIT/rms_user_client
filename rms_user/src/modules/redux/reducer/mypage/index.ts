import { mypageActionType } from '../../action/mypage';
import {
  GET_MYPAGE_FEED_FALURE,
  GET_MYPAGE_FEED_SUCCESS,
  FIELD,
} from '../../action/mypage/interface';
import MypageState from './interface';

const initState: MypageState = {
  email: '',
  name: '',
  projectList: [],
  error: null,
  field: {
    web: false,
    app: false,
    game: false,
    embedded: false,
    security: false,
    aiAndBigData: false,
  },
};

const mypageReducer = (state: MypageState = initState, action: mypageActionType) => {
  switch (action.type) {
    case GET_MYPAGE_FEED_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        projectList: action.payload.projectList,
      };
    case GET_MYPAGE_FEED_FALURE:
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
    default:
      return state;
  }
};

export default mypageReducer;
