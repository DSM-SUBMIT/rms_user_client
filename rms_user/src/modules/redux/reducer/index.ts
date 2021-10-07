import { combineReducers } from 'redux';
import headerReducer from './header';
import loginReducer from './login';
import mainReducer from './main';
import infoReducer from './info';

const rootReducer = combineReducers({
  main: mainReducer,
  login: loginReducer,
  header: headerReducer,
  info: infoReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
