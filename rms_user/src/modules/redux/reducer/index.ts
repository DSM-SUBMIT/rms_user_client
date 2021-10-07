import { combineReducers } from 'redux';
import headerReducer from './header';
import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({
  main: mainReducer,
  login: loginReducer,
  header: headerReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
