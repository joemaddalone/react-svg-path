import React from 'react';
import {
  Svg,
  Square,
  Circle,
  Text,
  Line,
  MarkerSquare,
  MarkerArrow
} from 'react-svg-path';

export const CenterEndDemo = () => {
  return (
    <>
      <h2>centerEnd</h2>
      <p>
        Some components in react-svg-path are guaranteed to end at their center
        points. This behavior can be turned off with{' '}
        <i>centerEnd={`{false}`}</i>. Nested components will still recieve the
        center x & y from parents.
      </p>
      <div>
        <Svg width={575} height={175}>
          <MarkerSquare id='marker-s' size={10} color='#999' />
          <MarkerArrow id='marker-a' size={10} color='red' />
          <Square
            fill='none'
            cx={250}
            cy={100}
            size={75}
            stroke='#222'
            centerEnd={false}
            markerEnd='url(#marker-s)'
          >
            <Circle size={10}>
              <Line
                ox={15}
                ex={75}
                ey={0}
                relative
                stroke='red'
                markerStart='url(#marker-a)'
              />
              <Text ox={100} oy={4}>
                Circle still inherits center cx & cy
              </Text>
            </Circle>
          </Square>
          <Line
            sx={150}
            sy={60}
            ex={200}
            ey={60}
            stroke='red'
            markerEnd='url(#marker-a)'
          >
            <Text
              ox={-140}
              oy={4}
              attach='start'
            >Square new end x & y</Text>
          </Line>
        </Svg>
      </div>
      <div>
        <code>
          {`
<Svg width={575} height={175}>
<MarkerSquare id='marker-s' size={10} color='#999' />
<MarkerArrow id='marker-a' size={10} color='red' />
<Square
  fill='none'
  cx={250}
  cy={100}
  size={75}
  stroke='#222'
  centerEnd={false}
  markerEnd='url(#marker-s)'
>
  <Circle size={10}>
    <Line ox={15} ex={75} ey={0} relative stroke="red" markerStart='url(#marker-a)' />
    <Text ox={100} oy={4}>Circle still inherits center cx & cy</Text>
  </Circle>
</Square>
<Line
  sx={150}
  sy={60}
  ex={200}
  ey={60}
  stroke='red'
  markerEnd='url(#marker-a)'
>
  <Text ox={-140} oy={4} attach='start'>Square new end x & y</Text>
</Line>
</Svg>        `.trim()}
        </code>
      </div>
    </>
  );
};
