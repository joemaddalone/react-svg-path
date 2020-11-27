import React from 'react';
import {
  Svg,
  Square,
  Circle,
  Text,
  Line,
  RadialLines,
  MarkerSquare,
  MarkerArrow,
  Quad
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
            <Text ox={-140} oy={4} attach='start'>
              Square new end x & y
            </Text>
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
      <div>
        <h3>Another demo</h3>
        <Svg width={500} height={500}>
          <MarkerSquare id='ms' size={10} color='red' />
          <MarkerSquare id='mm' size={10} color='#999' />
          <MarkerSquare id='me' size={10} color='blue' />
          <MarkerArrow id='marker-explain-start' size={10} color='red' />
          <MarkerArrow id='marker-explain-end' size={10} color='blue' />
          <RadialLines
            cx={250}
            cy={250}
            innerSize={75}
            outerSize={200}
            points={12}
            stroke='#ccc'
            centerEnd={false}
            markerEnd='url(#me)'
            markerMid='url(#mm)'
            markerStart='url(#ms)'
          >
            <Quad
              oy={-40}
              cx={300}
              cy={50}
              ex={375}
              ey={125}
              stroke='red'
              fill='none'
              markerEnd='url(#marker-explain-start)'
            >
              <Text oy={15}>Starting point</Text>
            </Quad>
            <Quad
              oy={-90}
              ox={-51}
              cx={125}
              cy={50}
              ex={75}
              ey={125}
              stroke='blue'
              fill='none'
              markerEnd='url(#marker-explain-end)'
            >
              <Text ox={-50} oy={15}>
                Ending point
              </Text>
            </Quad>
          </RadialLines>
        </Svg>
      </div>
      <div>
        <code>
          {`
<Svg width={500} height={500}>
  <MarkerSquare id='ms' size={10} color='red' />
  <MarkerSquare id='mm' size={10} color='#999' />
  <MarkerSquare id='me' size={10} color='blue' />
  <MarkerArrow id='marker-explain-start' size={10} color='red' />
  <MarkerArrow id='marker-explain-end' size={10} color='blue' />
  <RadialLines
    cx={250}
    cy={250}
    innerSize={75}
    outerSize={200}
    points={12}
    stroke='#ccc'
    centerEnd={false}
    markerEnd='url(#me)'
    markerMid='url(#mm)'
    markerStart='url(#ms)'
  >
    <Quad
      oy={-40}
      cx={300}
      cy={50}
      ex={375}
      ey={125}
      stroke='red'
      fill='none'
      markerEnd='url(#marker-explain-start)'
    >
      <Text oy={15}>Starting point</Text>
    </Quad>
    <Quad
      oy={-90}
      ox={-51}
      cx={125}
      cy={50}
      ex={75}
      ey={125}
      stroke='blue'
      fill='none'
      markerEnd='url(#marker-explain-end)'
    >
      <Text ox={-50} oy={15}>Ending point</Text>
    </Quad>
  </RadialLines>
</Svg>`.trim()}
        </code>
      </div>
    </>
  );
};
