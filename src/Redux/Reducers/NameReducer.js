import { CHANGE_NAME } from '../Actions'

const INITIAL_STATE = [];

function NameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return [...state, action.value];
    default:
      return state;
  }
}

export default NameReducer;