import { combineReducers } from 'redux';
import detailReportReducer from './detailReport';
import mainReducer from './main';

const rootReducer = combineReducers({ main: mainReducer, detailReport: detailReportReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
