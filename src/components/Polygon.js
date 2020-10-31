import Path from './Path';
import render from '../utils/render';

export const Polygon = ({ points, relative, children, ...attributes }) => {
  const p = new Path();
  const pathMethod = p.polygon.bind(p, points, relative);
  const [sx, sy] = points[0];
  const [ex, ey] = points[points.length - 1];
  return render({ pathMethod, attributes, sx, sy, ex, ey, children });
};
