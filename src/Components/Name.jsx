import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../Redux/Actions';


function Name ({ value, handleName }) {
    return(
      <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={value}
                onChange={handleName}
              />
      </div>
    )
  
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleName ({ target }) {
      dispatch(changeName(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Name);
