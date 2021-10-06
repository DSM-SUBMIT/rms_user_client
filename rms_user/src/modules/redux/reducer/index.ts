import { combineReducers } from 'redux';
import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({ main: mainReducer, login: loginReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
