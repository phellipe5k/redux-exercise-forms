import { CHANGE_ENDERECO } from '../Actions'

const INITIAL_STATE = [];

function EnderecoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_ENDERECO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default EnderecoReducer;