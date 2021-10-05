import { combineReducers } from 'redux';
import mypageReducer from './mypage';
import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({
  main: mainReducer,
  login: loginReducer,
  mypage: mypageReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
