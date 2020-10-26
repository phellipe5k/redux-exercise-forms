import { CHANGE_DESC_CARGO } from '../Actions'

const INITIAL_STATE = [];

function DescCargoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_DESC_CARGO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default DescCargoReducer;