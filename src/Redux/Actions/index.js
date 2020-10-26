export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_CPF = 'CHANGE_CPF';
export const CHANGE_ENDERECO = 'CHANGE_ENDERECO';
export const CHANGE_CIDADE = 'CHANGE_CIDADE';
export const CHANGE_ESTADO = 'CHANGE_ESTADO';
export const CHANGE_RESUMO = 'CHANGE_RESUMO';
export const CHANGE_CARGO = 'CHANGE_CARGO';
export const CHANGE_DESC_CARGO = 'CHANGE_DESC_CARGO';


export const changeName = (value) => {
  return {
    type: CHANGE_NAME,
    value
  }
}

export const changeEmail = (value) => {
  return {
    type: CHANGE_EMAIL,
    value
  }
}

export const changeCpf = (value) => {
  return {
    type: CHANGE_CPF,
    value
  }
}

export const changeEndereco = (value) => {
  return {
    type: CHANGE_ENDERECO,
    value
  }
}

export const changeCidade = (value) => {
  return {
    type: CHANGE_CIDADE,
    value
  }
}

export const changeEstado = (value) => {
  return {
    type: CHANGE_ESTADO,
    value
  }
}

export const changeResumo = (value) => {
  return {
    type: CHANGE_RESUMO,
    value
  }
}


export const changeCargo = (value) => {
  return {
    type: CHANGE_CARGO,
    value
  }
}


export const changeDescCargo = (value) => {
  return {
    type: CHANGE_DESC_CARGO,
    value
  }
}
