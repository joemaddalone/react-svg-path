import React from 'react';
import { Svg, Distance } from 'react-svg-path';
import { Angle } from './Angle';

const App = () => {
  const size = 600;
  const quarter = size * 0.25;
  return (
    <div>
      <Svg width={size} height={size} scale>
        <Distance color='green' ex={size} ey={quarter * 2} markers='triangle' />
        <Distance
          color='green'
          ex={quarter * 2}
          ey={size}
          markerEnd='triangle'
        />
        <Distance
          color='orange'
          ex={quarter * 2}
          ey={0}
          markerEnd='triangle'
          text='CUSTOM TEXT'
          dotted
        />
        <Distance
          color='green'
          sx={quarter}
          sy={0}
          ex={quarter}
          ey={size}
          dotted
          markers='arrow'
        />
        <Distance color='green' ex={size} ey={0} markerEnd='triangle' />
        <Distance color='green' ex={quarter} ey={quarter * 3} />
        <Distance
          color='red'
          sx={0}
          sy={0}
          ex={size}
          ey={size}
          markers='arrow'
        />
        <Distance
          color='green'
          sx={quarter}
          sy={quarter * 3}
          ex={0}
          ey={quarter * 3}
          markerEnd='arrow'
          markerStart='line'
        />
        <Angle size={100} startAngle={-135} endAngle={0} dotted />
        <Angle
          color='purple'
          size={150}
          startAngle={45}
          endAngle={90}
          markers='arrow'
        />
        <Angle cx={0} cy={size} size={75} startAngle={0} endAngle={90} dotted />
      </Svg>
    </div>
  );
};

export default App;
