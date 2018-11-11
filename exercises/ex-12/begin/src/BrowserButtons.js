import React from 'react';

function BrowserButtons( { onNextPrev } ) {
  return (
    <div className="btn-group">
      <button onClick={() => onNextPrev( 'previous' )}
              name="previous"
              className="btn btn-default">
        &laquo; Prev
      </button>
      <button onClick={() => onNextPrev( 'next' )}
              name="next"
              className="btn btn-default">
        Next &raquo;
      </button>
    </div>
  );
}

export default BrowserButtons;
