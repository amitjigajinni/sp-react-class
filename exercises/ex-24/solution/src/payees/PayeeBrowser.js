import React, {Component} from 'react';
import {connect} from 'react-redux';
import _isEmpty from 'lodash/isEmpty';

import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import {getNextPrev, payeesFetchData} from './payee-actions';

class PayeeBrowser extends Component {
  constructor( props ) {
    super( props );

    this.handleNextPrev = this.handleNextPrev.bind( this );
  }

  componentWillMount() {
    console.log( 'PayeeBrowser.componentWillMount: ', this.props );
    if ( this.props.payees.length === 0 || _isEmpty( this.props.payee ) ) {
      console.log( 'PayeeBrowser, came directly' );
      this.props.fetchData( 'http://localhost:8001/payees/' );
    }
  }

  handleNextPrev( direction ) {
    this.props.dispatch( getNextPrev( this.props.payee, this.props.payees, direction, this.props.history ) );
  }

  render() {
    console.log( 'PayeeBrowser.render(): ', this.props.isLoading, this.props );
    let details;
    if ( this.props.isLoading || _isEmpty( this.props.payee ) ) {
      details = <p>Loading...</p>;
    } else if ( this.props.hasErrored ) {
      details = <h3>Something has gone terribly wrong!</h3>;
    } else {
      details = <PayeeDetail payee={this.props.payee}/>;
    }

    return (
      <section>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {details}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <BrowserButtons onNextPrev={this.handleNextPrev}
                            onBack={this.props.onBack}
                            location={this.props.location}/>
          </div>
        </div>
      </section>
    );
  };
}

const mapStateToProps = ( state ) => {
  return {
    payees    : state.payees,
    payee     : state.payee,
    hasErrored: state.payeesHasErrored,
    isLoading : state.payeesIsLoading,
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    onBack   : () => {
      console.log( 'PayeeBrowser.mdtp.onBack' );
      ownProps.history.push( '/list' );
    },
    fetchData: ( url ) => {
      dispatch( payeesFetchData( url, ownProps.match.params.id ) );
    },
    dispatch
  };
};

PayeeBrowser = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeeBrowser;
