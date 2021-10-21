import { createProjectActionType } from '../../action/porject';
import { USERSLIST_SUCCESS, USERSLIST_FAILURE } from '../../action/porject/interface';
import userListState from './interface';

const initState: userListState = {
  user: [],
  error: null,
};

const userListReducer = (
  state: userListState = initState,
  action: createProjectActionType,
): userListState => {
  switch (action.type) {
    case USERSLIST_SUCCESS:
      return {
        ...state,
        user: action.payload.users,
      };
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
