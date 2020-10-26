import { CHANGE_ESTADO } from '../Actions'

const INITIAL_STATE = [];

function EstadoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_ESTADO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default EstadoReducer;