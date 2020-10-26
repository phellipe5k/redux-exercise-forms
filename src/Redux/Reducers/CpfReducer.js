import { CHANGE_CPF } from '../Actions'

const INITIAL_STATE = [];

function CpfReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CPF:
      return [...state, action.value];
    default:
      return state;
  }
}

export default CpfReducer;