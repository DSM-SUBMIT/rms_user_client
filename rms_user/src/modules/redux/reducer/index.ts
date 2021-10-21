import { combineReducers } from 'redux';
import mypageReducer from './mypage';
import detailPlanReducer from './detailPlan';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import headerReducer from './header';
import loginReducer from './login';
import infoReducer from './info';
import viewProjectReducer from './viewProject';
import ModalReducer from './modal';
import viewMyProjectReducer from './viewMyProject';
import projectReducer from './project';
import userListReducer from './userList';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
  mypage: mypageReducer,
  header: headerReducer,
  info: infoReducer,
  detailPlan: detailPlanReducer,
  viewProject: viewProjectReducer,
  modal: ModalReducer,
  viewMyProject: viewMyProjectReducer,
  project: projectReducer,
  userList: userListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
