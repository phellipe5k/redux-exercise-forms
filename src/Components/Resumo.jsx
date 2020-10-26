import React from 'react';
import { connect } from 'react-redux';
import { changeResumo } from '../Redux/Actions';

function Resumo ({ value, handleResumo }) {
    return (
      <div className="container">
                Resumo do currículo:
                <textarea
                  name="resume"
                  maxLength="1000"
                  required
                  value={value}
                  onChange={handleResumo}
                />
              </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleResumo({ target }) {
      dispatch(changeResumo(target.value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Resumo);
