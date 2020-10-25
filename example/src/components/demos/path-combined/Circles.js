import React from 'react';
import { Svg, PathMerge, Line, RegPolygon, Circle, Text, Triangle, Square } from 'react-svg-path';
import './Circles.css';

const xy = {cx: 300, cy: 150}
export const Circles = () => (

    <Svg width={700} height={300} className="example-components">
      <PathMerge className="merged">
        <RegPolygon size={100} sides={6} {...xy} />
        <Circle size={50} {...xy} />
        <Square size={50} {...xy}  />
        <Triangle size={85} {...xy} />
      </PathMerge>
      <Circle size={100} cx={150} cy={150} fill="white" stroke="#222">
          <Line ex={150} ey={130} stroke="#ccc">
            <Circle size={2} fill="#ccc" />
          </Line>
          <Line ex={150} ey={170} stroke="#ccc">
            <Circle size={2} fill="#ccc" />
          </Line>
          <Line ex={130} ey={150} stroke="#ccc">
            <Square size={3} fill="#ccc" />
          </Line>
          <Line ex={170} ey={150} stroke="#ccc">
          <Square size={3} fill="#ccc" />
            </Line>
          <Line ex={110} ey={190} stroke="red">
            <Circle size={5} fill="red" />
          </Line>
          <Line ex={190} ey={190} stroke="blue">
            <Text dy={6} dx={2}>text</Text>
          </Line>
          <Line ex={190} ey={110} stroke="green">
            <Square size={6} fill="green" />
          </Line>
          <Line ex={110} ey={110} stroke="purple">
            <RegPolygon size={6} sides={6} fill="purple" />
          </Line>
      </Circle>
    </Svg>
);
