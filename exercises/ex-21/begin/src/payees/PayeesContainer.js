import React, {Component} from 'react';
import {connect} from 'react-redux';

import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  render() {
    // console.log( 'PayeesContainer.render(): ', this.props );
    let view = <PayeeList/>;
    if ( this.props.view === 'detail' ) view = <PayeeBrowser />;

    return (
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  // console.log('PayeesContainer.mapStateToProps: ', state);
  return {
    view: state.view
  };
};

PayeesContainer = connect( mapStateToProps )( PayeesContainer );

export default PayeesContainer;
