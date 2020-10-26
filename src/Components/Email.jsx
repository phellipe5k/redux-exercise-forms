import React from 'react';
import { connect } from 'react-redux';
import { changeEmail } from '../Redux/Actions';

function Email ({ value, handleEmail }) {
    return (
      <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={value}
                onChange={handleEmail}
              />
            </div>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleEmail({ target }) {
      dispatch(changeEmail(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Email);
