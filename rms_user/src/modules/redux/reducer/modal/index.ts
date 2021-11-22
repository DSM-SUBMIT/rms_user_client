import { modalActionType } from '../../action/modal';
import { MODAL_ON, MODAL_OFF } from '../../action/modal/interface';
import ModalState from './interface';

const initState: ModalState = {
  type: '',
};

const ModalReducer = (state: ModalState = initState, action: modalActionType): ModalState => {
  switch (action.type) {
    case MODAL_ON: {
      return { ...state, type: action.payload };
    }
    case MODAL_OFF: {
      return { ...state, type: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ModalReducer;
