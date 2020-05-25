import React from 'react';
import Steps from './components/demos/Steps';
import DagSinglePath from './components/demos/DagSinglePath';
import DagTwoPaths from './components/demos/DagTwoPaths';
import DagNodes from './components/demos/DagNodes';

import './App.css';

const stepData = [
  23,
  -45,
  100,
  -100,
  12,
  -23,
  34,
  -45,
  56,
  -67,
  78,
  -89,
  0,
  0,
  0,
  0,
  10,
  40,
  80,
  120,
  0
];

const stepHeight = Math.abs(Math.min(...stepData) - Math.max(...stepData)) + 50;
const stepX = 15;
const stepY = stepHeight / 2;

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
      <p>
        Since we're using React we can also create a simple "drawing" effect by
        iterating over the array produced with .toArray().
      </p>
      <div style={{ margin: 20 }}>
        <Steps
          x={stepX}
          y={stepY}
          width={755}
          height={stepHeight}
          data={stepData}
        />
        <a
          href='https://github.com/joemaddalone/react-svg-path/blob/master/example/src/components/demos/Steps.js'
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
