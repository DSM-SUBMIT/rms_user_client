import { combineReducers } from 'redux';
import detailReportReducer from './detailReport';
import mainReducer from './main';
import loginReducer from './login';

const rootReducer = combineReducers({
  main: mainReducer,
  detailReport: detailReportReducer,
  login: loginReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
