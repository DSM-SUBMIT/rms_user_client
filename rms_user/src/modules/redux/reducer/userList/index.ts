import { createProjectActionType } from '../../action/porject';
import { USERSLIST_SUCCESS, USERSLIST_FAILURE } from '../../action/porject/interface';
import userListState from './interface';

const initState: userListState = {
  name: '',
  email: '',
  id: 1,
  error: null,
};

const userListReducer = (state: userListState = initState, action: createProjectActionType) => {
  switch (action.type) {
    case USERSLIST_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
      };
      console.log(state);
    case USERSLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userListReducer;
