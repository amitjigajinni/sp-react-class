import React from 'react';
import PayeeDetail from './PayeeDetail';
import PropTypes from 'prop-types';
import BrowserButtons from '../BrowserButtons';
import {connect} from 'react-redux';
import {getNextPrev, switchView} from './payee-actions';

let PayeeBrowser = ( { onBack, payee, payees, dispatch } ) => {

  function handleNextPrev( direction ) {
    // console.log( 'PayeeBrowser.handleNextPrev() payee: %o, direction: %s', payee, direction );
    dispatch( getNextPrev( payee, payees, direction ) );
  }

  return (
    <section>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <PayeeDetail payee={payee}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <BrowserButtons onNextPrev={handleNextPrev}
                          onBack={onBack}/>
        </div>
      </div>
    </section>
  );
};

PayeeBrowser.propTypes = {
  payee : PropTypes.shape( {
    id        : PropTypes.string.isRequired,
    payeeName : PropTypes.string.isRequired,
    address   : PropTypes.string,
    city      : PropTypes.string,
    state     : PropTypes.string,
    zip       : PropTypes.string,
    categoryId: PropTypes.string.isRequired
  } ).isRequired,
  onBack: PropTypes.func.isRequired
};

const mapStateToProps = ( state ) => {
  return {
    payee: state.payee,
    payees: state.payees
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    onBack: () => {
      dispatch( switchView( 'list' ) );
    },
    dispatch
  };
};

PayeeBrowser = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeeBrowser;
