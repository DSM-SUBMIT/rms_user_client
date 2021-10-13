import { combineReducers } from 'redux';
import detailPlanReducer from './detailPlan';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import headerReducer from './header';
import loginReducer from './login';
import infoReducer from './info';
import writePlanReducer from './writePlan';
import writeReportReducer from './writeReport';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
  header: headerReducer,
  info: infoReducer,
  detailPlan: detailPlanReducer,
  writePlan: writePlanReducer,
  writeReport: writeReportReducer
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
