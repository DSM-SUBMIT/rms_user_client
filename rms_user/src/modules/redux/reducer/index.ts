import { combineReducers } from 'redux';
import detailPlanReducer from './detailPlan';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import headerReducer from './header';
import loginReducer from './login';
import infoReducer from './info';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
  header: headerReducer,
  info: infoReducer,
});
const rootReducer = combineReducers({main: mainReducer, login: loginReducer, detailPlan: detailPlanReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
