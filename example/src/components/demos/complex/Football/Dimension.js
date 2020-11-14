import React from "react";
import { Rect, Line, Text } from "react-svg-path";
import "./Dimension.css";

const Dimension = ({ sx, sy, ex, ey, text, markerId }) => {
  const rect = {
    width: text.length * 6.5,
    height: 20,
    ox: -(ex - sx) / 2,
    oy: -(ey - sy) / 2,
  };
  return (
    <Line
      className="dimension-line"
      sx={sx}
      sy={sy}
      ex={ex}
      ey={ey}
      markerStart={`url(#${markerId})`}
      markerEnd={`url(#${markerId})`}
    >
      <Rect className="dimension-value" {...rect}>
        <Text
          className="dimension-text"
          dominantBaseline="middle"
          textAnchor="middle"
          dy={2}
          fill="green"
        >
          {text}
        </Text>
      </Rect>
    </Line>
  );
};

export default Dimension;
