import React from 'react';

const PayeeDetail = ( { payee } ) => {
  let handlePrevious = ( e ) => {
    console.log( 'You clicked on the %s button.', e.target.name );
  };

  let handleNext = ( e ) => {
    console.log( 'You clicked on the %s button.', e.target.name );
  };

  return (
    <div>
      <div className="panel panel-primary">
        <div className="panel-heading">{payee.payeeName}</div>
        <ul className="list-group">
          <li className="list-group-item">{payee.payeeName}</li>
          <li className="list-group-item">{payee.address}</li>
          <li className="list-group-item">{payee.city}, {payee.state} {payee.zip}</li>
          <li className="list-group-item">Category: {payee.category.categoryName}</li>
        </ul>
      </div>
      <div className="text-center">
        <div className="btn-group">
          <button onClick={handlePrevious}
                  name="previous"
                  className="btn btn-default">
            &laquo; Prev
          </button>
          <button onClick={handleNext}
                  name="next"
                  className="btn btn-default">
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayeeDetail;