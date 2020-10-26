import React from 'react';
import { connect } from 'react-redux';
import { changeEndereco } from '../Redux/Actions';

function Endereco ({ value, handleEndereco }) {
    return (
      <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={value}
                onChange={handleEndereco}
              />
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleEndereco({ target }) {
      dispatch(changeEndereco(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Endereco);
