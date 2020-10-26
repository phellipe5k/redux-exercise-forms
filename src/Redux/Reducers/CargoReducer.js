import { CHANGE_CARGO } from '../Actions'

const INITIAL_STATE = [];

function CargoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CARGO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default CargoReducer;