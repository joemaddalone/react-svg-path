import React from "react";

import Path, {
  MarkerArrow,
  MarkerTriangle,
  MarkerSquare,
  MarkerLine,
  Segment,
  TextPath,
  Arc
} from "react-svg-path";

const getMarker = (type) => {
  switch (type) {
    case "arrow":
      return MarkerArrow;
    case "square":
      return MarkerSquare;
    case "triangle":
      return MarkerTriangle;
    case "line":
      return MarkerLine;
    default:
      return null;
  }
};

export const Angle = ({
  cx,
  cy,
  size,
  startAngle,
  endAngle,
  sx,
  sy,
  ex,
  ey,
  text,
  color = "#000",
  precision = 0,
  markerEnd,
  markerStart,
  markers,
  dotted = false,
  startOffset = "50%"
}) => {
  const curvePoints = Path.radialPoints(size / 2, cx, cy, 361);
  const markerStartId = Math.random();
  const markerEndId = Math.random();
  const label = text || `${Math.abs(endAngle - startAngle)}°`;
  const endMarker = markerEnd || markers;
  const startMarker = markerStart || markers;
  const MarkerStartComponent = getMarker(startMarker);
  const MarkerEndComponent = getMarker(endMarker);

  const findAngle = (angle) => {
    if (angle >= 0) {
      return angle;
    }
    return 360 + angle;
  };

  return (
    <>
      {startMarker && (
        <MarkerStartComponent
          color={color}
          size={startMarker === "line" ? 20 : 10}
          id={markerStartId}
        />
      )}
      {endMarker && (
        <MarkerEndComponent
          color={color}
          size={endMarker === "line" ? 20 : 10}
          id={markerEndId}
        />
      )}

      <Segment
        style={{ vectorEffect: "non-scaling-stroke" }}
        cx={cx}
        cy={cy}
        size={size}
        startAngle={startAngle}
        endAngle={endAngle}
        stroke={color}
        strokeWidth={1}
        fill="none"
        strokeDasharray={dotted ? "2" : null}
        markerStart={`url(#${markerStartId})`}
        markerEnd={`url(#${markerEndId})`}
        centerEnd={false}
      />

      <TextPath
        fontSize="75%"
        alignmentBaseline="text-top"
        startOffset={startOffset}
        textAnchor="middle"
        dy={-4}
        fill={color}
        path={
          <Arc
            sx={curvePoints[findAngle(startAngle)][0]}
            sy={curvePoints[findAngle(startAngle)][1]}
            rx={size / 2}
            ry={size / 2}
            ex={curvePoints[findAngle(endAngle)][0]}
            ey={curvePoints[findAngle(endAngle)][1]}
            arc={0}
            sweep={1}
          />
        }
      >
        {label}
      </TextPath>
    </>
  );
};
