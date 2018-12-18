import React from 'react';

const PayeeRow = ( { payee, onPayeeSelect, onPayeeEdit } ) => (
  <tr onClick={ () => onPayeeSelect( payee ) }
      className="clickable">
    <td>{ payee.payeeName }</td>
    <td>{ payee.city }</td>
    <td>{ payee.state }</td>
    <td>
      <button className="btn btn-success" onClick={ ( event ) => {
        onPayeeEdit( payee );
        event.stopPropagation();
      } }>Edit
      </button>
    </td>
  </tr>
);

export default PayeeRow;
