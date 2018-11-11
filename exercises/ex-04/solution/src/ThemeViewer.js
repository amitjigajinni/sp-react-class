import React from 'react';

const ThemeViewer = ( props ) => {
  return (
    <div>
      <h2>Theme viewer</h2>
      <h3>Buttons</h3>
      <div>
        <button>Click Me</button>&nbsp;
        <button>Click Me</button>&nbsp;
        <button>Click Me</button>
      </div>

      <h3>Labels</h3>
      <div>
        <h1><span>Label</span></h1>
        <h2><span>Label</span></h2>
        <h3><span>Label</span></h3>
        <h4><span>Label</span></h4>
        <h5><span>Label</span></h5>
      </div>
    </div>
  );
};

export default ThemeViewer;
