import React from 'react';

const PayeeRow = ( { payee, onPayeeSelect } ) => (
  <tr onClick={() => onPayeeSelect( payee )}
      className="clickable">
    <td>{payee.payeeName}</td>
    <td>{payee.city}</td>
    <td>{payee.state}</td>
  </tr>
);

export default PayeeRow;
