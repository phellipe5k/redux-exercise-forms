import React from 'react';
import { connect } from 'react-redux';
import { changeEstado } from '../Redux/Actions';

function Estado({ value, handleEstado }){
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <div className="container">
        Estado:
        <select
          name="countryState"
          required
          value={value}
          onChange={handleEstado}
        >
            {states.map((value, key) =>
              <option key={key}>{value}</option>
              )
            }
      </select>
      </div>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEstado({ target }) {
      dispatch(changeEstado(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Estado);
