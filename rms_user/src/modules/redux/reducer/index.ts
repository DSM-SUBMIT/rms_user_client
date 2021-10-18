import { combineReducers } from 'redux';
import detailPlanReducer from './detailPlan';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import headerReducer from './header';
import loginReducer from './login';
import infoReducer from './info';
import viewProjectReducer from './viewProject';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
  header: headerReducer,
  info: infoReducer,
  detailPlan: detailPlanReducer,
  viewProject: viewProjectReducer,
  modal: ModalReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
