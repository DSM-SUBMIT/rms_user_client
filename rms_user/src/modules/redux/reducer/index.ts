import { combineReducers } from 'redux';
import mainReducer from './main';

const rootReducer = combineReducers({ main: mainReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
