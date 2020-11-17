import Path, {
  Svg,
  RadialLines,
  Circle,
  Line,
  PathMerge,
  MarkerArrow,
} from "react-svg-path";
import { useState, useEffect } from "react";

const degreeToAngle = (value, division, radius) => {
  const degree = (360 / division) * value - 90;
  const { x: ex, y: ey } = Path.polarToCartesian(cx, cy, radius, degree);
  return { ex, ey };
};

const time = () => {
  const d = new Date();
  return {
    second: d.getSeconds(),
    minute: d.getMinutes(),
    hour: d.getHours(),
  };
};

const size = 300;
const cx = size / 2;
const cy = size / 2;

const Clock = () => {
  const [state, setState] = useState({ second: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      setState(time());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Svg width={size + 40} height={size + 40} className="clock">
        <MarkerArrow id="arrow" />
        <g transform="translate(20, 20)">
          <PathMerge>
            <Circle size={size} points={3} cx={cx} cy={cy}>
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
            </Circle>
          </PathMerge>
          <Line
            stroke="#333"
            strokeWidth={1.5}
            sx={size / 2}
            sy={size / 2}
            {...degreeToAngle(state.minute, 60, size * 0.5)}
            markerEnd="url(#arrow)"
          />
          <Line
            stroke="green"
            strokeWidth={1.5}
            sx={size / 2}
            sy={size / 2}
            {...degreeToAngle(state.hour, 12, size * 0.3)}
            markerEnd="url(#arrow)"
          />
          <Line
            stroke="red"
            strokeWidth={1.5}
            sx={size / 2}
            sy={size / 2}
            {...degreeToAngle(state.second, 60, size * 0.5)}
            markerEnd="url(#arrow)"
          />
          <Circle cx={cx} cy={cy} size={5} fill="#000" />
        </g>
      </Svg>
    </div>
  );
};

export default Clock;
