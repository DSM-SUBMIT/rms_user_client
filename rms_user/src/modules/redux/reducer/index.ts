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
import writePlanReducer from './writePlan';
import writeReportReducer from './writeReport';
import viewMyProjectReducer from './viewMyProject';

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
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
