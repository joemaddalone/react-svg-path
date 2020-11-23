import React from 'react';
import { Svg, RegPolygon, Circle, Square } from 'react-svg-path';
import './NestingDemo4.css';

const NestingDemo4 = () => (
  <>
    <h3>Nesting example #4</h3>
    <p>Nesting is awesome.</p>
    <Svg width={200} height={200} className='nesting-example-1'>
      <Circle order={2} cx={100} cy={100} size={25} style={{ fill: 'red' }}>
        <Circle order={3} size={10} style={{ stroke: 'none', fill: '#fff' }} />
        <RegPolygon
          size={120}
          sides={4}
          order={0}
          style={{ fill: 'rgba(0,0,0,0.9)' }}
        />
      </Circle>
    </Svg>
    <div>
      <code>
        {`
<RegPolygon size={120} sides={4} cx={100} cy={100} >
  <Circle size={55}  />
  <Square size={60}  />
  <Circle size={25} cy={58}   />
</RegPolygon>
`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo4;
