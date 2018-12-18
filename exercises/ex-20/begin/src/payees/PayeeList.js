import React from 'react';
import PayeeRow from './PayeeRow';

const PayeeList = ( { payees, onListSort, onPayeeSelect, onPayeeEdit } ) => (
  <table className="table table-hover">
    <thead>
    <tr>
      <th onClick={ () => onListSort( 'payeeName' ) } className="clickable">Payee</th>
      <th onClick={ () => onListSort( 'city' ) } className="clickable">City</th>
      <th onClick={ () => onListSort( 'state' ) } className="clickable">State</th>
    </tr>
    </thead>
    <tbody>
    {
      payees.map( payee => {
        return ( <PayeeRow payee={ payee }
                           key={ payee.id }
                           onPayeeSelect={ onPayeeSelect }
                           onPayeeEdit={ onPayeeEdit }/> );
      } )
    }
    </tbody>
  </table>
);

export default PayeeList;