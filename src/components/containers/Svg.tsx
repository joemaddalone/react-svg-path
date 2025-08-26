import React from 'react';
import renderElement from '../../utils/renderElement';
import { SvgProps } from '../../types/svg';

export const Svg = ({
  children,
  x,
  y,
  sx,
  sy,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cy,
  width = 0,
  height = 0,
  scale = false,
  ...attributes
}: SvgProps) => {
  const responsiveAttributes = {
    preserveAspectRatio: 'xMinYMin meet',
    ...attributes
  };
  (responsiveAttributes as any).style = {
    width: `100%`,
    height: 'auto',
    maxWidth: width,
    maxHeight: height,
    ...(attributes as any).style
  };

  const appliedAtrributes = scale ? responsiveAttributes : attributes;

  return (
    <svg
      x={x || sx || undefined}
      y={y || sy || undefined}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...appliedAtrributes}
    >
      {renderElement({
        attributes: {} as any,
        ex: width / 2 as number,
        ey: height / 2 as number,
        sx: width / 2 as number,
        sy: height / 2 as number,
        children: children as React.ReactNode | undefined,
      })}
    </svg>
  );
};

Svg.displayName = 'Svg';