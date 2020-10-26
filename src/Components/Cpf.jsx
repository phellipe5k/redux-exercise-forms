import React from 'react';
import { connect } from 'react-redux';
import { changeCpf } from '../Redux/Actions';

function Cpf ({value, handleCpf}) {
    return (
      <div className="container">
        CPF:
        <input
          type="text"
          name="cpf"
          maxLength="11"
          required
          value={value}
          onChange={handleCpf}
        />
      </div>
    )
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCpf({ target }) {
      dispatch(changeCpf(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Cpf);
