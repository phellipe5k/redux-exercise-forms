import { CHANGE_CIDADE } from '../Actions'

const INITIAL_STATE = [];

function CidadeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CIDADE:
      return [...state, action.value];
    default:
      return state;
  }
}

export default CidadeReducer;