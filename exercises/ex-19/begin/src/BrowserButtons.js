import React from 'react';
import PropTypes from 'prop-types';

function BrowserButtons( { onNextPrev, onBack, onEdit } ) {
  return (
    <div className="btn-group">
      <button onClick={ () => onNextPrev( 'previous' ) }
              name="previous"
              className="btn btn-default">
        &laquo; Prev
      </button>
      <button onClick={ onBack }
              className="btn btn-default">
        Back
      </button>
      <button onClick={ onEdit }
              className="btn btn-success">
        Edit
      </button>
      <button onClick={ () => onNextPrev( 'next' ) }
              name="next"
              className="btn btn-default">
        Next &raquo;
      </button>
    </div>
  );
}

BrowserButtons.propTypes = {
  onNextPrev: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default BrowserButtons;
