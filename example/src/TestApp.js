import React from 'react';
import { Svg, Arc, Line, Circle, Cubic } from 'react-svg-path';

import './App.css';

const App = () => {
  return (
    <div>
      <Svg width={500} height={500}>
        <Cubic
          sx={10}
          sy={90}
          cx1={30}
          cy1={90}
          cx2={25}
          cy2={10}
          ex={50}
          ey={10}
          S={[[70, 90, 90, 90]]}
          stroke='#0e98dd'
          strokeWidth={1}
          fill='#ffffff'
        />
      </Svg>
    </div>
  );
};

export default App;
