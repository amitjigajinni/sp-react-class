import React from 'react';

const PayeeDetail = ( {payee} ) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">{payee.payeeName}</div>
      <ul className="list-group">
        <li className="list-group-item">{payee.payeeName}</li>
        <li className="list-group-item">{payee.address}</li>
        <li className="list-group-item">{payee.city}, {payee.state} {payee.zip}</li>
        <li className="list-group-item">Category: {payee.category.categoryName}</li>
      </ul>
    </div>
  );
};

export default PayeeDetail;