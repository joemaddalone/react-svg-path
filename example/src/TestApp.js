import React from 'react';
import { Svg, Line, Circle } from 'react-svg-path';

import './App.css';

const App = () => {
  return (
    <div>
      <Svg width={500} height={500}>
        <Line exy={10} sxy={490} stroke='#333'>
          <Circle size={10} stroke='#333' />
        </Line>
      </Svg>
    </div>
  );
};

export default App;
