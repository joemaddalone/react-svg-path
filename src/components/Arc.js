import Path from './Path';
import render from '../utils/render';

export const Arc = ({
  sx,
  sy,
  rx,
  ry,
  rotation = 0,
  arc = 0,
  sweep = 0,
  ex,
  ey,
  children,
  relative = false,
  ...attributes
}) => {
  const p = new Path().moveTo(sx, sy);
  const pathMethod = p.arc.bind(
    p,
    rx,
    ry,
    rotation,
    arc,
    sweep,
    ex,
    ey,
    relative
  );
  return render({
    pathMethod,
    attributes,
    ex: sx,
    ey: sy,
    sx: ex,
    sy: ey,
    children
  });
};

Arc.path = ({
  sx,
  sy,
  rx,
  ry,
  rotation = 0,
  arc = 0,
  sweep = 0,
  ex,
  ey,
  relative = false
}) => {
  return new Path()
    .moveTo(sx, sy)
    .arc(rx, ry, rotation, arc, sweep, ex, ey, relative);
};
