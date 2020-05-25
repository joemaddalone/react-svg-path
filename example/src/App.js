import React from 'react';
import DagSinglePath from './components/demos/DagSinglePath';
import DagTwoPaths from './components/demos/DagTwoPaths';
import DagNodes from './components/demos/DagNodes';
import Macros from './components/demos/Macros';

import './App.css';
const App = () => {
  return (
    <>
      <h2>react-svg-path</h2>
      <hr />
      <a href='https://github.com/joemaddalone/react-svg-path'>
        https://github.com/joemaddalone/react-svg-path
      </a>

      <h3 className='ui-header'>Demos</h3>
      <p>
        The svg element below contains only a single path. This may not be
        ideal, depending on your needs, but it demonstrates the ability to
        create complex shapes in a single path with react-svg-path
      </p>
      <div style={{ margin: 20 }}>
        <DagSinglePath />
        <a
          href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/DagSinglePath.js'
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
      <p>
        We can easily convert this to two paths. One for the nodes and one for
        the connecting lines.
      </p>
      <div style={{ margin: 20 }}>
        <DagTwoPaths />
        <a
          href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/DagTwoPaths.js'
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
      <p>
        Likewise we can use .toComponent() to create reusable components for
        each node. Each of these nodes is clickable.
      </p>
      <div style={{ margin: 20 }}>
        <DagNodes />
        <a
          href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/DagNodes.js'
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
      <p>Macros are a way to save a common set of path steps for reuse.</p>
      <div style={{ margin: 20 }}>
        <Macros />
        <a
          href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/Macros.js'
          rel='noopener noreferrer'
          target='_blank'
        >
          source
        </a>
      </div>
    </>
  );
};

export default App;
