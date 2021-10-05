import { combineReducers } from 'redux';
import mypageReducer from './mypage';
import loginReducer from './login';
import mainReducer from './main';

<<<<<<< HEAD
const rootReducer = combineReducers({ mypage: mypageReducer });
const rootReducer = combineReducers({ login: loginReducer });
=======
const rootReducer = combineReducers({ main: mainReducer, login: loginReducer });
>>>>>>> main

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
