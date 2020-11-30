/* eslint-disable no-unused-vars */
import React from 'react';
import render from '../utils/render';

export const Svg = ({
  children,
  x,
  y,
  sx,
  sy,
  cx,
  cy,
  width = 0,
  height = 0,
  ...attributes
}) => {
  return (
    <svg
      x={x || sx || null}
      y={y || sy || null}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...attributes}
    >
      {render({
        attributes: {},
        ex: width / 2,
        ey: height / 2,
        sx: width / 2,
        sy: height / 2,
        children
      })}
    </svg>
  );
};
