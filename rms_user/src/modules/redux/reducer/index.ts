import { combineReducers } from 'redux';
import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({ main: mainReducer });
const rootReducer = combineReducers({ login: loginReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
