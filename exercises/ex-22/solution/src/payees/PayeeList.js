import React, {Component} from 'react';
import PayeeRow from './PayeeRow';
import {setSortField, setPayee, payeesFetchData} from './payee-actions';
import {connect} from 'react-redux';

class PayeeList extends Component {

  componentDidMount() {
    this.props.fetchData('http://localhost:8001/payees/');
  }

  render() {
    if ( this.props.isLoading ) {
      return (
        <p>Loading...</p>
      );
    } else if ( this.props.hasErrored ) {
      return (
        <h3>Something has gone terribly wrong!</h3>
      );
    }

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th onClick={() => this.props.onListSort( this.props.currentSort, 'payeeName' )} className="clickable">Payee
          </th>
          <th onClick={() => this.props.onListSort( this.props.currentSort, 'city' )} className="clickable">City</th>
          <th onClick={() => this.props.onListSort( this.props.currentSort, 'state' )} className="clickable">State</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.payees.map( payee => {
            return (<PayeeRow payee={payee}
                              key={payee.id}
                              onPayeeSelect={this.props.onPayeeSelect}/>);
          } )
        }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    // payees: sortPayees(state.payees, state.sortField)
    payees     : state.payees,
    hasErrored : state.payeesHasErrored,
    isLoading  : state.payeesIsLoading,
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
    },
    fetchData    : ( url ) => dispatch( payeesFetchData( url ) )
  };
};

PayeeList = connect( mapStateToProps, mapDispatchToProps )( PayeeList );

export default PayeeList;