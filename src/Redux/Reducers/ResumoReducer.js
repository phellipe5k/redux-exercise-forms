import { CHANGE_RESUMO } from '../Actions'

const INITIAL_STATE = [];

function ResumoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_RESUMO:
      return [...state, action.value];
    default:
      return state;
  }
}

export default ResumoReducer;