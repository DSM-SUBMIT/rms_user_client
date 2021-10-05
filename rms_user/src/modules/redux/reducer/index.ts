import { combineReducers } from 'redux';
import detailPlanReducer from './detailPlan';
import loginReducer from './login';

const rootReducer = combineReducers({ login: loginReducer, detailPlan: detailPlanReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
