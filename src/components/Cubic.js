import Path from './Path';
import render from '../utils/render';

export const Cubic = ({
  sx,
  sy,
  cx1,
  cy1,
  cx2,
  cy2,
  ex,
  ey,
  children,
  relative = false,
  ...rest
}) => {
  const p = new Path().moveTo(sx, sy);
  const pathMethod = p.cCurve.bind(p, cx1, cy1, cx2, cy2, ex, ey, relative);
  return render(pathMethod, rest, sx, sy, ex, ey, children);
};

Cubic.path = ({ sx, sy, cx1, cy1, cx2, cy2, ex, ey, relative = false }) => {
  return new Path().moveTo(sx, sy).cCurveTo(sx, sy, cx1, cy1, cx2, cy2, ex, ey, relative);
};
