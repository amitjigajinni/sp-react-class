import {connect} from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import {getNextPrev} from './payee-actions';

const mapStateToProps = ( ( state ) => {
  return {
    payee: state.payee
  }
});

const mapDispatchToProps = (( dispatch ) => {
  onNextPrev: getNextPrev
});

const PayeesContainerRedux = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeesContainerRedux;


