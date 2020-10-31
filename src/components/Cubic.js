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
  S = [],
  s = [],
  children,
  relative = false,
  ...attributes
}) => {
  let endX = ex;
  let endY = ey;
  const p = new Path().moveTo(sx, sy);
  const pathMethod = () => {
    // eslint-disable-next-line no-useless-call
    const cmd = p.cCurve.call(p, cx1, cy1, cx2, cy2, ex, ey, relative);
    if (S.length) {
      S.forEach((scmd) => cmd.S.apply(p, scmd));
    }
    if (s.length) {
      s.forEach((scmd) => cmd.s.apply(p, scmd));
    }
    return cmd;
  };
  if (S.length) {
    endX = S[S.length - 1][0];
    endY = S[S.length - 1][1];
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
