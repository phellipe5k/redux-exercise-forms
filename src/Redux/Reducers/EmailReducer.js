import { CHANGE_EMAIL } from '../Actions'

const INITIAL_STATE = [];

function EmailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return [...state, action.value];
    default:
      return state;
  }
}

export default EmailReducer;