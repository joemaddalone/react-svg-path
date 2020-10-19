import Path from './Path';
import render from '../utils/render';

export const Quad = ({
  sx,
  sy,
  cx,
  cy,
  ex,
  ey,
  children,
  relative = false,
  ...rest
}) => {
  const p = new Path().moveTo(sx, sy);
  const pathMethod = p.qCurve.bind(p, cx, cy, ex, ey, relative);
  return render(pathMethod, rest, sx, sy, ex, ey, children);
};

Quad.path = ({ sx, sy, cx, cy, ex, ey, relative = false }) => {
  return new Path().moveTo(sx, sy).qCurve(sx, sy, cx, cy, ex, ey, relative);
};
