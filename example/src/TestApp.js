import React from 'react';
import { Svg, Line, Square } from 'react-svg-path';

import './App.css';

const App = () => {
  return (
    <div>
      <Svg width={500} height={500}>
        <Square size={10} centerEnd={false}>
          <Line
            ex={75}
            ey={0}
            stroke='red'
            relative
          />
        </Square>
      </Svg>
    </div>
  );
};

export default App;
