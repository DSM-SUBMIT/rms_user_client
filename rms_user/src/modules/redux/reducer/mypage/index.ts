import { mypageActionType } from '../../action/mypage';
import {
  CURRENTPROJECTID,
  GET_MYPAGE_FEED_FAILURE,
  GET_MYPAGE_FEED_SUCCESS,
} from '../../action/mypage/interface';
import MypageState from './interface';

const initState: MypageState = {
  email: '',
  name: '',
  projectList: [],
  studentNumber: 0,
  error: null,
  currentProjectId: 1,
  currentPage: 1,
};

const mypageReducer = (state: MypageState = initState, action: mypageActionType): MypageState => {
  switch (action.type) {
    case GET_MYPAGE_FEED_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        projectList: action.payload.projectList,
        studentNumber: action.payload.studentNumber,
        currentPage: action.payload.currentPage,
        currentProjectId: action.payload.currentProjectId,
      };
    case GET_MYPAGE_FEED_FAILURE:
      return {
        ...state,
        error: action.payload,
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

export default mypageReducer;
