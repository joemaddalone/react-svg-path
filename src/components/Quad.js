import Path from './Path';
import render from '../utils/render';

export const Quad = ({
  sx,
  sy,
  cx1,
  cy1,
  ex,
  ey,
  T = [],
  t = [],
  children,
  relative = false,
  ...attributes
}) => {
  let endX = ex;
  let endY = ey;
  const p = new Path().moveTo(sx, sy);
  const pathMethod = () => {
    // eslint-disable-next-line no-useless-call
    const cmd = p.qCurve.call(p, cx1, cy1, ex, ey, relative);
    if (T.length) {
      T.forEach((tcmd) => cmd.T.call(p, tcmd[0], tcmd[1]));
    }
    if (t.length) {
      t.forEach((tcmd) => cmd.t.call(p, tcmd[0], tcmd[1]));
    }
    return cmd;
  };
  if (T.length) {
    endX = T[T.length - 1][0];
    endY = T[T.length - 1][1];
  }
  return render({
    pathMethod,
    attributes,
    ex: sx,
    ey: sy,
    sx: endX,
    sy: endY,
    children
  });
};

Quad.path = ({
  sx,
  sy,
  cx1,
  cy1,
  ex,
  ey,
  T = [],
  t = [],
  relative = false
}) => {
  const p = new Path()
    .moveTo(sx, sy)
    .qCurve(sx, sy, cx1, cy1, ex, ey, relative);
  if (T.length) {
    T.forEach((tcmd) => p.T(tcmd[0], tcmd[1]));
  }
  if (t.length) {
    t.forEach((tcmd) => p.t(tcmd[0], tcmd[1]));
  }
  return p;
};
