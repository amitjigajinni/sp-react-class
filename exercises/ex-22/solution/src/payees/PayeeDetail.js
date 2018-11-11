import React from 'react';
import PropTypes from 'prop-types';

const PayeeDetail = ( {payee} ) => {

  let classes = 'panel ';
  switch ( payee.category.categoryName ) {
    case 'Salary':
    case 'Other Income':
    case 'Interest':
      classes += 'panel-success';
      break;
    case 'Clothing':
    case 'Housing':
    case 'Food':
      classes += 'panel-danger';
      break;
    default:
      classes += 'panel-info';
      break;
  }

  return (
    <div className={classes}>
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

PayeeDetail.propTypes = {
  payee: PropTypes.shape( {
    id        : PropTypes.string.isRequired,
    payeeName : PropTypes.string.isRequired,
    address   : PropTypes.string,
    city      : PropTypes.string,
    state     : PropTypes.string,
    zip       : PropTypes.string,
    categoryId: PropTypes.string.isRequired
  } ).isRequired
};

export default PayeeDetail;