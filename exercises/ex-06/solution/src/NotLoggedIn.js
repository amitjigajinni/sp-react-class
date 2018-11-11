import React from 'react';

const NotLoggedIn = () => {
  return (
    <div className="row alert alert-danger">
      <div className="col-md-6" style={{ marginTop: '8px' }}>
        Not logged in. Please sign in here:&nbsp;
      </div>
      <div className="col-md-6 text-right">
        <button className="btn btn-danger text-right">Log In</button>
      </div>
    </div>
  );
};

export default NotLoggedIn;
