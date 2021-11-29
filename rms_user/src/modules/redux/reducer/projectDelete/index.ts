import { DELETE_PROJECT_FAILURE } from '../../action/porject/interface';
import { createProjectActionType } from '../../action/porject';
import DeleteState from './interface';

const initState: DeleteState = {
  error: null,
};

const deleteReducer = (
  state: DeleteState = initState,
  action: createProjectActionType,
): DeleteState => {
  switch (action.type) {
    case DELETE_PROJECT_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteReducer;
