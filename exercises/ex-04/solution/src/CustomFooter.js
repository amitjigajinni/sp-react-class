import React from 'react';

const CustomFooter = ( props ) => {
  return (
    <div className="footer">
      <hr/>
      <p>Copyright &copy; 2017 {props.company.name}</p>
      <address>
        {props.company.address}<br/>
        {props.company.city}, {props.company.state}<br/>
        {props.company.zip}
      </address>
    </div>
  );
};

export default CustomFooter;
