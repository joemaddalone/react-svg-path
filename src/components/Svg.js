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
  scale = false,
  ...attributes
}) => {
  const responsiveAttributes = {
    preserveAspectRatio: 'xMinYMin meet',
    ...attributes
  };
  responsiveAttributes.style = {
    width: `100%`,
    height: 'auto',
    maxWidth: width,
    maxHeight: height,
    ...attributes.style
  };

  const appliedAtrributes = scale ? responsiveAttributes : attributes;

  return (
    <svg
      x={x || sx || null}
      y={y || sy || null}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...appliedAtrributes}
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

Svg.displayName = 'Svg';
