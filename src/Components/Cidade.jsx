import React from 'react';
import { connect } from 'react-redux';
import { changeCidade } from '../Redux/Actions';

function Cidade({value, handleCidade}) {
    return (
      <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={value}
                onChange={handleCidade}
              />
      </div>
    )
  
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleCidade({ target }) {
      dispatch(changeCidade(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Cidade);
