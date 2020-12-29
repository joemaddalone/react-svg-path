import './Clock.css';
import Path, {
  Svg,
  Circle,
  RadialLines,
  Line,
  PathMerge,
  Square,
  MarkerArrow,
  Text
} from 'react-svg-path';

import { useState, useEffect } from 'react';

export const degreeToAngle = (value, division, cx, cy, radius) => {
  const degree = (360 / division) * value - 90;
  const { x: ex, y: ey } = Path.polarToCartesian(cx, cy, radius, degree);
  return { ex, ey };
};

export const time = () => {
  const d = new Date();
  return {
    second: d.getSeconds(),
    minute: d.getMinutes(),
    hour: d.getHours(),
    millis: d.getMilliseconds()
  };
};

const Clock = ({ size = 400 }) => {
  const cx = size / 2;
  const cy = size / 2;
  const margin = 40;
  const fontBase = size / 18;
  const [state, setState] = useState(time());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(time());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hoursPoints = Path.radialPoints(size * 0.4, cx, cy, 12);
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className='Clock'>
      <Svg width={size + margin} height={size + margin} className='clock' scale>
        <MarkerArrow id='marker-h' color='blue' />
        <MarkerArrow id='marker-s' color='red' />
        <MarkerArrow id='marker-m' color='green' />
        <g transform={`translate(${margin / 2}, ${margin / 2})`}>
          <PathMerge>
            <Circle size={size} cx={cx} cy={cy}>
              <RadialLines
                innerSize={size * 0.9}
                outerSize={size}
                points={12}
              />
              <RadialLines
                innerSize={size * 0.95}
                outerSize={size}
                points={60}
              />
              <RadialLines
                strokeWidth={4}
                innerSize={size * 0.9}
                outerSize={size}
                points={4}
              />
            </Circle>
          </PathMerge>
          <Line
            strokeWidth={3}
            markerEnd='url(#marker-h)'
            sx={cx}
            sy={cy}
            stroke='blue'
            {...degreeToAngle(state.hour, 12, cx, cy, size * 0.25)}
          />
          <Line
            strokeWidth={3}
            markerEnd='url(#marker-m)'
            sx={cx}
            sy={cy}
            stroke='green'
            {...degreeToAngle(state.minute, 60, cx, cy, size * 0.35)}
          />
          <Line
            sx={cx}
            sy={cy}
            strokeWidth={1}
            stroke='red'
            {...degreeToAngle(state.second, 60, cx, cy, size * 0.5)}
          />
          {hoursPoints.map((point, index) => {
            return (
              <Square key={hours[index]} cx={point[0]} cy={point[1]} size={0}>
                <Text
                  key={hours[index]}
                  dx={-hours[index].toString().length * (fontBase / 4)}
                  dy={fontBase / 2}
                  fontSize={`${fontBase}px`}
                >
                  {hours[index]}
                </Text>
              </Square>
            );
          })}
          <Circle cx={cx} cy={cy} size={10} fill='#222' stroke='none' />
        </g>
      </Svg>
    </div>
  );
};

export default Clock;
