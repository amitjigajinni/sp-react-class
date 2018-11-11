import React from 'react';
import PayeeRow from './PayeeRow';

const PayeeList = ( { payees, onPayeeSelect } ) => (
  <table className="table table-hover">
    <thead>
    <tr>
      <th>Payee</th>
      <th>City</th>
      <th>State</th>
    </tr>
    </thead>
    <tbody>
    {
      payees.map( payee => {
        return (<PayeeRow payee={payee}
                          key={payee.id}
                          onPayeeSelect={onPayeeSelect}/>);
      } )
    }
    </tbody>
  </table>
);

export default PayeeList;