import React from 'react';
import PayeeDetail from './PayeeDetail';
import PropTypes from 'prop-types';
import BrowserButtons from '../BrowserButtons';

const PayeeBrowser = ( { onNextPrev, onPayeeEdit, onBack, payee } ) => {
  function handleNextPrev( direction ) {
    onNextPrev( payee, direction );
  }

  function handleEdit() {
    onPayeeEdit( payee );
  }

  return (
    <section>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <PayeeDetail payee={ payee }/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <BrowserButtons onNextPrev={ handleNextPrev }
                          onBack={ onBack }
                          onEdit={ handleEdit }
          />
        </div>
      </div>
    </section>
  );
};

PayeeBrowser.propTypes = {
  payee: PropTypes.shape( {
    id: PropTypes.string.isRequired,
    payeeName: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    categoryId: PropTypes.string.isRequired
  } ).isRequired,
  onNextPrev: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default PayeeBrowser;
