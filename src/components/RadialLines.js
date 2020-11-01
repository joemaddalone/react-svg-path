import Path from './Path';
import render from '../utils/render';

export const RadialLines = ({
  innerSize,
  outerSize,
  points,
  cx,
  cy,
  children,
  ...attributes
}) => {
  const p = new Path();
  const pathMethod = p.radialLines.bind(
    p,
    innerSize,
    outerSize,
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
