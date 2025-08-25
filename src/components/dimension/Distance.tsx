import React from 'react';
import { Rect, Line } from '../shapes';
import { Text } from '../text/Text';
import { MarkerArrow } from '../markers/MarkerArrow';
import { MarkerTriangle } from '../markers/MarkerTriangle';
import { MarkerSquare } from '../markers/MarkerSquare';
import { MarkerLine } from '../markers/MarkerLine';
import id from '../../utils/id';
import { DistanceProps } from '../../types/distance';

const getDistance = (sx: number, sy: number, ex: number, ey: number, precision: number): number => {
  const a = sx - ex;
  const b = sy - ey;
  return Number(Math.sqrt(a * a + b * b).toFixed(precision));
};

const getMarker = (type: string): React.ComponentType<any> | null => {
  switch (type) {
    case 'arrow':
      return MarkerArrow;
    case 'square':
      return MarkerSquare;
    case 'triangle':
      return MarkerTriangle;
    case 'line':
      return MarkerLine;
    default:
      return null;
  }
};

export const Distance: React.FC<DistanceProps> = ({
  sx,
  sy,
  ex,
  ey,
  text,
  markerId = '',
  color = '#000',
  precision = 0,
  markerEnd,
  markerStart,
  markers,
  dotted = false,
  scale,
  scaleUnit = '',
  rectStyle = {},
  ...attributes
}) => {
  const markerStartId = markerId ? `${markerId}-marker-start` : id();
  const markerEndId = markerId ? `${markerId}-marker-end` : id();
  const distanceInPixels = getDistance(sx, sy, ex, ey, precision);
  const label = text
    ? text
    : scale
    ? `${(distanceInPixels * scale).toFixed(precision)}${scaleUnit}`
    : `${distanceInPixels}px`;
  const rect = {
    width: label.length * 10,
    height: 20,
    ox: -(ex - sx) / 2,
    oy: -(ey - sy) / 2
  };

  const distanceRectStyle = {
    fill: '#fff',
    stroke: 'none',
    strokeWidth: 'none',
    ...rectStyle
  };

  const endMarker = markerEnd || markers;
  const startMarker = markerStart || markers;
  const MarkerStartComponent = getMarker(startMarker);
  const MarkerEndComponent = getMarker(endMarker);

  return (
    <>
      {startMarker && MarkerStartComponent && (
        <MarkerStartComponent
          color={color}
          size={startMarker === 'line' ? 20 : 10}
          id={markerStartId}
        />
      )}
      {endMarker && MarkerEndComponent && (
        <MarkerEndComponent
          color={color}
          size={endMarker === 'line' ? 20 : 10}
          id={markerEndId}
        />
      )}
      <Line
        style={{
          vectorEffect: 'non-scaling-stroke',
          shapeRendering: 'geometricPrecision',
          stroke: color
        }}
        sx={sx}
        sy={sy}
        ex={ex}
        ey={ey}
        markerStart={`url(#${markerStartId})`}
        markerEnd={`url(#${markerEndId})`}
        strokeDasharray={dotted ? '2' : undefined}
        {...attributes}
      >
        <Rect {...rect} style={distanceRectStyle}>
          <Text
            fontSize='75%'
            dominantBaseline='middle'
            textAnchor='middle'
            dy={1}
            fill={color}
          >
            {label}
          </Text>
        </Rect>
      </Line>
    </>
  );
};

Distance.displayName = 'Distance';
