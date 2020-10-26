import React from 'react';
import { connect } from 'react-redux';
import { changeDescCargo } from '../Redux/Actions';

function DescCargo ({ value, handleDescCargo }) {
    return (
      <div className="container">
        Descrição do cargo:
        <textarea
          name="roleDescription"
          maxLength="500"
          value={value}
          onChange={handleDescCargo}
        />
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDescCargo({ target }) {
      dispatch(changeDescCargo(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(DescCargo);
