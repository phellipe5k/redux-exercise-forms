import { createStore, combineReducers } from 'redux';
import NameReducer from './Reducers/NameReducer';
import EmailReducer from './Reducers/EmailReducer';
import CpfReducer from './Reducers/CpfReducer';
import EnderecoReducer from './Reducers/EnderecoReducer';
import EstadoReducer from './Reducers/EstadoReducer';
import CidadeReducer from './Reducers/CidadeReducer';
import CargoReducer from './Reducers/CargoReducer';
import DescCargoReducer from './Reducers/DescCargoReducer';
import ResumoReducer from './Reducers/ResumoReducer';

const mainReduce = combineReducers({
  NameReducer,
  EmailReducer,
  CpfReducer,
  EstadoReducer,
  EnderecoReducer,
  CidadeReducer,
  CargoReducer,
  DescCargoReducer,
  ResumoReducer
});

const store = createStore(mainReduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;