import Path from './Path';
import render from '../utils/render';

export const RadialLines = ({
  outerSize,
  innerSize,
  points,
  cx,
  cy,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.radialLines.bind(
    p,
    outerSize,
    innerSize,
    points,
    cx,
    cy
  );
  return render({
    pathMethod,
    attributes,
    ex: cx,
    ey: cy,
    sx: cx,
    sy: cy,
    children
  });
};
