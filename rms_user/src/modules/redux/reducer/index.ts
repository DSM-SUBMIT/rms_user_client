import { combineReducers } from 'redux';
import mypageReducer from './mypage';

const rootReducer = combineReducers({ mypage: mypageReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
