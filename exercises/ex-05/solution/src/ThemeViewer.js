import React from 'react';

const ThemeViewer = ( props ) => {
  let buttonClasses, labelClasses;
  if (props.theme === 'ocean') {
    buttonClasses = 'btn btn-info';
    labelClasses = 'label label-primary';
  } else if (props.theme === 'fire') {
    buttonClasses = 'btn btn-danger';
    labelClasses = 'label label-warning';
  }
  return (
    <div>
      <h2>Theme viewer</h2>
      <h3>Buttons</h3>
      <div>
        <button className={buttonClasses + " btn-sm"}>Click Me</button>&nbsp;
        <button className={buttonClasses}>Click Me</button>&nbsp;
        <button className={buttonClasses + " btn-lg"}>Click Me</button>
      </div>

      <h3>Labels</h3>
      <div>
        <h1><span className={labelClasses}>Label</span></h1>
        <h2><span className={labelClasses}>Label</span></h2>
        <h3><span className={labelClasses}>Label</span></h3>
        <h4><span className={labelClasses}>Label</span></h4>
        <h5><span className={labelClasses}>Label</span></h5>
      </div>
    </div>
  );
};

export default ThemeViewer;
