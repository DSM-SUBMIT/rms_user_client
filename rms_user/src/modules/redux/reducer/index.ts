import { combineReducers } from 'redux';
import detailPlanReducer from './detailPlan';
import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({main: mainReducer, login: loginReducer, detailPlan: detailPlanReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
