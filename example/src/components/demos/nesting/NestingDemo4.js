import React from 'react';
import { Svg, RegPolygon, Circle, Square, Text } from 'react-svg-path';
import './NestingDemo4.css';

const fills = ['red', 'green', 'blue'];

const NestingDemo4 = () => (
  <>
    <h3>Nesting example #4</h3>
    <p>Nesting is awesome.</p>
    <Svg width={220} height={200} className='nesting-example-4'>
      <Circle size={0} cx={75} cy={75}>
        {[1, 2, 0].map((order, index) => (
          <Circle
            key={index}
            size={60}
            ox={index * 50}
            fill={fills[index]}
            order={order}
          >
            <Circle ox={-8} size={10} fill='yellow' order={2} />
            <Circle size={10} fill='orange' order={1} />
            <Circle ox={8} size={10} fill='white' order={0} />
          </Circle>
        ))}
      </Circle>
    </Svg>
    <div>
      <code>
        {`
const fills = ['red', 'green', 'blue'];
<Circle size={0} cx={75} cy={75}>
  {[1,2,0].map((order, index) => (
    <Circle size={60} ox={index * 40} fill={fills[order]} order={order}>
      <Text dx={-4} dy={5} fill="white">
        {order}
      </Text>
    </Circle>
  ))}
</Circle>
`.trim()}
      </code>
    </div>
  </>
);

export default NestingDemo4;
