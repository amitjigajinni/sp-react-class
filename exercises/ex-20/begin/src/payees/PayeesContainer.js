import React, {Component} from 'react';
import {connect} from 'react-redux';

import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  render() {
    let view = <PayeeList/>;
    if ( this.props.view === 'detail' ) view = <PayeeBrowser />;

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default PayeesContainer;
