import React from 'react';
import { Svg, Arc, Line, Circle } from 'react-svg-path';

import './App.css';

const App = () => {
  return (
    <div>
      <Svg width={500} height={500}>
        <Line sx={10} sy={150} ex={100} ey={150} stroke='red'>
          <Arc
          sx={100} sy={150}
            rx={10}
            ry={10}
            ex={175}
            ey={150}
            fill='none'
            stroke='red'
          >
            <Circle size={15} fill='red' />
          </Arc>
        </Line>
      </Svg>
    </div>
  );
};

export default App;
