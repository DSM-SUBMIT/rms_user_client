import { combineReducers } from 'redux';
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

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
