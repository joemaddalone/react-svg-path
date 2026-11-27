import React from 'react';
import renderElement from '../../utils/renderElement';
import { collectPathsFromChildren } from '../../utils/resolvePath';
import Path from '../path/Path';
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
  width,
  height,
  scale = false,
  autoFit = false,
  padding = 0,
  viewBox: explicitViewBox,
  ...attributes
}: SvgProps) => {
  let computedWidth = width ?? 0;
  let computedHeight = height ?? 0;
  let computedViewBox = explicitViewBox ?? `0 0 ${computedWidth} ${computedHeight}`;

  if (autoFit) {
    const parts = collectPathsFromChildren(children, {
      sx: computedWidth / 2,
      sy: computedHeight / 2,
      cx: computedWidth / 2,
      cy: computedHeight / 2
    });
    const combined = new Path();
    let hasPath = false;
    parts.forEach((part) => {
      if (part instanceof Path) {
        combined.concat(part);
        hasPath = true;
      }
    });
    if (hasPath) {
      const bbox = combined.getBBox();
      const vbX = bbox.minX - padding;
      const vbY = bbox.minY - padding;
      const vbW = bbox.width + padding * 2;
      const vbH = bbox.height + padding * 2;
      if (!explicitViewBox) {
        computedViewBox = `${vbX} ${vbY} ${vbW} ${vbH}`;
      }
      if (width === undefined) computedWidth = vbW;
      if (height === undefined) computedHeight = vbH;
    }
  }

  const responsiveAttributes = {
    preserveAspectRatio: 'xMinYMin meet',
    ...attributes
  };
  (responsiveAttributes as any).style = {
    width: `100%`,
    height: 'auto',
    maxWidth: computedWidth,
    maxHeight: computedHeight,
    ...(attributes as any).style
  };

  const appliedAtrributes = scale ? responsiveAttributes : attributes;

  return (
    <svg
      x={x || sx || undefined}
      y={y || sy || undefined}
      xmlns='http://www.w3.org/2000/svg'
      width={computedWidth}
      height={computedHeight}
      viewBox={computedViewBox}
      {...appliedAtrributes}
    >
      {renderElement({
        attributes: {} as any,
        ex: computedWidth / 2,
        ey: computedHeight / 2,
        sx: computedWidth / 2,
        sy: computedHeight / 2,
        children: children as React.ReactNode | undefined
      })}
    </svg>
  );
};

Svg.displayName = 'Svg';
