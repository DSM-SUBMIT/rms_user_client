import { combineReducers } from 'redux';
import mypageReducer from './mypage';
import loginReducer from './login';

const rootReducer = combineReducers({ mypage: mypageReducer });
const rootReducer = combineReducers({ login: loginReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
