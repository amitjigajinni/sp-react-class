import {connect} from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import {getNextPrev} from './payee-actions';

const mapStateToProps = ( ( state ) => {
  return {
    payee: state.payee
  };
});

const mapDispatchToProps = (( dispatch ) => {
  return {
    onNextPrev: ( payee, direction ) => {
      dispatch( getNextPrev( payee, direction ) );
    }
  };
});

const PayeesContainerRedux = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeesContainerRedux;


