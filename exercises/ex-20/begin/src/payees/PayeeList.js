import React from 'react';
import PayeeRow from './PayeeRow';
import {setSortField, setPayee} from './payee-actions';
import _sortBy from 'lodash/sortBy';
import {connect} from 'react-redux';

let PayeeList = ( { payees, currentSort, onListSort, onPayeeSelect } ) => (
  <table className="table table-hover">
    <thead>
    <tr>
      <th onClick={() => onListSort( currentSort, 'payeeName' )} className="clickable">Payee</th>
      <th onClick={() => onListSort( currentSort, 'city' )} className="clickable">City</th>
      <th onClick={() => onListSort( currentSort, 'state' )} className="clickable">State</th>
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

const mapStateToProps = ( state ) => {
  return {
    payees: state.payees,
    currentSort: state.sortField
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    onListSort   : ( lastSort, nextSort ) => {
      dispatch( setSortField( lastSort, nextSort ) );
    },
    onPayeeSelect: ( payee ) => {
      dispatch( setPayee( payee ) );
    }
  };
};

PayeeList = connect( mapStateToProps, mapDispatchToProps )( PayeeList );

export default PayeeList;