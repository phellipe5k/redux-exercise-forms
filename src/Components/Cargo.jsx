import React from 'react';
import { connect } from 'react-redux';
import { changeCargo } from '../Redux/Actions';

function Cargo ({ value, handleCargo }) {
    return (
      <div className="container">
                Cargo:
                <input
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={value}
                  onChange={handleCargo}
                />
              </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCargo({ target }) {
      dispatch(changeCargo(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Cargo);
