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

const sortPayees = (payees, sortField) => {
  let reverseIt = false;
  if (sortField.startsWith('-')) {
    reverseIt = true;
    sortField = sortField.slice(1);
  }
  let results = _sortBy(payees, [sortField]);

  return reverseIt ? results.reverse() : results;
};

const mapStateToProps = ( state ) => {
  return {
    // payees: sortPayees(state.payees, state.sortField)
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